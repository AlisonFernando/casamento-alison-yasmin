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
};

// Edite esta lista com os presentes reais (nome, descrição e preço).
// Quem já foi comprado é controlado automaticamente pelo Firestore, não aqui.
export const GIFTS: GiftItem[] = [
  {
    id: "jogo-panelas",
    name: "Jogo de panelas",
    description: "Um conjunto completo para começarmos a cozinhar juntos.",
    price: 350,
  },
  {
    id: "jogo-cama",
    name: "Jogo de cama casal",
    description: "Para as noites de descanso no nosso novo lar.",
    price: 220,
  },
  {
    id: "liquidificador",
    name: "Liquidificador",
    description: "Prático para o dia a dia da nossa cozinha.",
    price: 180,
  },
  {
    id: "jogo-toalhas",
    name: "Jogo de toalhas",
    description: "Toalhas de banho para o nosso banheiro.",
    price: 110,
  },
  {
    id: "kit-churrasco",
    name: "Kit churrasco",
    description: "Para reunir a família e os amigos no nosso novo lar.",
    price: 200,
  },
  {
    id: "chaleira",
    name: "Chaleira",
    description: "Para preparar aquele chá ou café quentinho.",
    price: 80,
  },
  {
    id: "filtro-agua",
    name: "Filtro de água",
    description: "Água fresca e filtrada todos os dias em casa.",
    price: 300,
  },
  {
    id: "garrafa-cafe",
    name: "Garrafa de café",
    description: "Pra manter o café quentinho por mais tempo.",
    price: 50,
  },
  {
    id: "jogo-pratos",
    name: "Jogo de pratos",
    description: "Pratos para as nossas refeições.",
    price: 120,
  },
  {
    id: "talheres",
    name: "Talheres",
    description: "Um jogo de talheres completo para a nossa mesa.",
    price: 105,
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
