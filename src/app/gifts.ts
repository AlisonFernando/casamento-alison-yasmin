export type GiftItem = {
  id: string;
  name: string;
  description?: string;
  price?: string;
  image?: string;
};

// Edite esta lista com os presentes reais (nome, descrição, preço e imagem).
export const GIFTS: GiftItem[] = [
  {
    id: "jogo-panelas",
    name: "Jogo de panelas",
    description: "Um conjunto completo para começarmos a cozinhar juntos.",
    price: "R$ 350",
  },
  {
    id: "jogo-cama",
    name: "Jogo de cama casal",
    description: "Para as noites de descanso no nosso novo lar.",
    price: "R$ 220",
  },
  {
    id: "liquidificador",
    name: "Liquidificador",
    description: "Prático para o dia a dia da nossa cozinha.",
    price: "R$ 180",
  },
  {
    id: "jogo-toalhas",
    name: "Jogo de toalhas",
    description: "Toalhas de banho para o nosso banheiro.",
    price: "R$ 150",
  },
  {
    id: "cota-lua-de-mel",
    name: "Cota lua de mel",
    description: "Ajude a tornar nossa primeira viagem de casados inesquecível.",
    price: "A partir de R$ 50",
  },
  {
    id: "kit-churrasco",
    name: "Kit churrasco",
    description: "Para reunir a família e os amigos no nosso novo lar.",
    price: "R$ 200",
  },
];
