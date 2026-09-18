// Gera o payload "Pix Copia e Cola" (padrão EMV / BR Code do Bacen),
// o mesmo formato usado nos QR Codes de cobrança Pix.

function tlv(id: string, value: string) {
  return `${id}${value.length.toString().padStart(2, "0")}${value}`;
}

// remove acentos e qualquer caractere fora do ASCII imprimível, exigido pelo padrão
function normalize(text: string, maxLen: number) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\x20-\x7e]/g, "")
    .toUpperCase()
    .slice(0, maxLen)
    .trim();
}

// CRC-16/CCITT-FALSE — checksum exigido no final do payload Pix
function crc16(payload: string): string {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let bit = 0; bit < 8; bit++) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

type BuildPixPayloadArgs = {
  key: string;
  merchantName: string;
  merchantCity: string;
  amount?: number;
  description?: string;
};

export function buildPixPayload({
  key,
  merchantName,
  merchantCity,
  amount,
  description,
}: BuildPixPayloadArgs): string {
  const gui = tlv("00", "BR.GOV.BCB.PIX");
  const pixKey = tlv("01", key.trim());
  const desc = description ? tlv("02", normalize(description, 50)) : "";
  const merchantAccountInfo = tlv("26", `${gui}${pixKey}${desc}`);

  const additionalData = tlv("62", tlv("05", "***"));

  const fields =
    tlv("00", "01") + // Payload Format Indicator
    merchantAccountInfo +
    tlv("52", "0000") + // Merchant Category Code
    tlv("53", "986") + // Moeda: BRL
    (amount && amount > 0 ? tlv("54", amount.toFixed(2)) : "") +
    tlv("58", "BR") +
    tlv("59", normalize(merchantName, 25)) +
    tlv("60", normalize(merchantCity, 15)) +
    additionalData +
    "6304";

  return fields + crc16(fields);
}

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
