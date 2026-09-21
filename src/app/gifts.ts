export type GiftItem = {
  id: string;
  name: string;
  description?: string;
  /** Valor fixo em reais. Omitir quando `customAmount` for true. */
  price?: number;
  /** Se true, o convidado escolhe o valor que quiser presentear (ex.: lua de mel). */
  customAmount?: boolean;
  /** Sugestão de valor mínimo, usada só quando `customAmount` for true. */
  minPrice?: number;
  /**
   * Quantas unidades desse item ainda podem ser compradas. Quando alguém
   * avisar pelo WhatsApp que comprou, diminua esse número e publique de novo
   * (`npm run deploy`) pra evitar que outra pessoa compre o mesmo item.
   * Omitir = sem limite (usado na cota de valor livre).
   */
  quantity?: number;
};

// Edite esta lista com os presentes reais (nome, descrição, preço e quantidade).
export const GIFTS: GiftItem[] = [
  {
    id: "jogo-panelas",
    name: "Jogo de panelas",
    description: "Um conjunto completo para começarmos a cozinhar juntos.",
    price: 350,
    quantity: 1,
  },
  {
    id: "jogo-cama",
    name: "Jogo de cama casal",
    description: "Para as noites de descanso no nosso novo lar.",
    price: 220,
    quantity: 1,
  },
  {
    id: "liquidificador",
    name: "Liquidificador",
    description: "Prático para o dia a dia da nossa cozinha.",
    price: 180,
    quantity: 1,
  },
  {
    id: "jogo-toalhas",
    name: "Jogo de toalhas",
    description: "Toalhas de banho para o nosso banheiro.",
    price: 110,
    quantity: 1,
  },
  {
    id: "kit-churrasco",
    name: "Kit churrasco",
    description: "Para reunir a família e os amigos no nosso novo lar.",
    price: 200,
    quantity: 1,
  },
  {
    id: "chaleira",
    name: "Chaleira",
    description: "Para preparar aquele chá ou café quentinho.",
    price: 110,
    quantity: 1,
  },
  {
    id: "filtro-agua",
    name: "Filtro de água",
    description: "Água fresca e filtrada todos os dias em casa.",
    price: 300,
    quantity: 1,
  },
  {
    id: "garrafa-cafe",
    name: "Garrafa de café",
    description: "Pra manter o café quentinho por mais tempo.",
    price: 100,
    quantity: 1,
  },
  {
    id: "jogo-pratos",
    name: "Jogo de pratos",
    description: "Pratos para as nossas refeições.",
    price: 120,
    quantity: 1,
  },
  {
    id: "talheres",
    name: "Talheres",
    description: "Um jogo de talheres completo para a nossa mesa.",
    price: 105,
    quantity: 1,
  },
  {
    id: "cota-lua-de-mel",
    name: "Cota lua de mel",
    description:
      "Ajude a tornar nossa primeira viagem de casados inesquecível. Escolha o valor que quiser presentear.",
    customAmount: true,
    minPrice: 100,
  },
];
