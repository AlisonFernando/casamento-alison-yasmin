export type GiftCategory = "casa" | "lua-de-mel" | "bom-humor";

export type GiftItem = {
  id: string;
  name: string;
  description?: string;
  category: GiftCategory;
  /** Valor fixo em reais. Omitir quando `customAmount` for true. */
  price?: number;
  /** Se true, o convidado escolhe o valor que quiser presentear (ex.: lua de mel). */
  customAmount?: boolean;
  /** Sugestão de valor mínimo, usada só quando `customAmount` for true. */
  minPrice?: number;
  /** Se true, pode ser presenteado por várias pessoas e nunca fica esgotado. */
  repeatable?: boolean;
};

export const GIFT_CATEGORIES: { id: GiftCategory; title: string; subtitle: string }[] = [
  {
    id: "casa",
    title: "Para a nossa casa",
    subtitle: "Cada item só pode ser presenteado uma vez.",
  },
  {
    id: "lua-de-mel",
    title: "Lua de mel em Monte Verde",
    subtitle:
      "Nossa primeira viagem de casados vai ser no friozinho da serra. Esses momentos podem ser presenteados mais de uma vez.",
  },
  {
    id: "bom-humor",
    title: "Com bom humor",
    subtitle: "Pra quem quer presentear e arrancar uma risada da gente.",
  },
];

// Quem já foi comprado é controlado automaticamente pelo Firestore, não aqui.
// Não mude o `id` de um item já publicado: é ele que liga o item às compras confirmadas.
export const GIFTS: GiftItem[] = [
  // Para a nossa casa
  {
    id: "jogo-panelas",
    category: "casa",
    name: "Jogo de panelas",
    description: "Um conjunto completo para começarmos a cozinhar juntos.",
    price: 350,
  },
  {
    id: "jogo-cama",
    category: "casa",
    name: "Jogo de cama casal",
    description: "Para as noites de descanso no nosso novo lar.",
    price: 220,
  },
  {
    id: "liquidificador",
    category: "casa",
    name: "Liquidificador",
    description: "Prático para o dia a dia da nossa cozinha.",
    price: 180,
  },
  {
    id: "jogo-toalhas",
    category: "casa",
    name: "Jogo de toalhas",
    description: "Toalhas de banho para o nosso banheiro.",
    price: 110,
  },
  {
    id: "kit-churrasco",
    category: "casa",
    name: "Kit churrasco",
    description: "Para reunir a família e os amigos no nosso novo lar.",
    price: 200,
  },
  {
    id: "filtro-agua",
    category: "casa",
    name: "Filtro de água",
    description: "Água fresca e filtrada todos os dias em casa.",
    price: 350,
  },
  {
    id: "jogo-pratos",
    category: "casa",
    name: "Jogo de pratos completos",
    description: "Pratos para as nossas refeições.",
    price: 200,
  },
  {
    id: "talheres",
    category: "casa",
    name: "Talheres",
    description: "Um jogo de talheres completo para a nossa mesa.",
    price: 105,
  },
  {
    id: "aparador",
    category: "casa",
    name: "Aparador para a entrada",
    description: "O lugar oficial das chaves, que até hoje vivem sumindo.",
    price: 250,
  },
  {
    id: "cabeceira",
    category: "casa",
    name: "Cabeceira da cama",
    description: "O toque final do nosso quarto.",
    price: 350,
  },
  {
    id: "rack-tv",
    category: "casa",
    name: "Rack para a sala",
    description: "Pras maratonas de série no sofá.",
    price: 300,
  },
  {
    id: "suporte-tv",
    category: "casa",
    name: "Suporte de parede para a TV",
    description: "Pra deixar a sala mais livre.",
    price: 200,
  },
  {
    id: "sapateira",
    category: "casa",
    name: "Sapateira",
    description: "Pra acabar com a pilha de sapatos na porta.",
    price: 150,
  },
  {
    id: "prateleiras",
    category: "casa",
    name: "Prateleiras",
    description: "Pros livros, plantas e lembranças do casamento.",
    price: 130,
  },
  {
    id: "mesa-cadeiras",
    category: "casa",
    name: "Mesa com cadeiras",
    description: "Pros almoços de domingo com a família.",
    price: 1200,
  },
  {
    id: "comprinhas-casa-nova",
    category: "casa",
    name: "Primeira feira da casa nova",
    description: "Pra encher a despensa logo na primeira semana.",
    price: 300,
  },
  {
    id: "conjunto-malas",
    category: "casa",
    name: "Malas de viagem",
    description: "Começando por Monte Verde e indo pra onde a vida levar.",
    price: 600,
  },

  // Lua de mel em Monte Verde
  {
    id: "cota-lua-de-mel",
    category: "lua-de-mel",
    name: "Cota lua de mel",
    description:
      "Ajude a tornar nossa primeira viagem de casados inesquecível. Escolha o valor que quiser presentear.",
    customAmount: true,
    minPrice: 150,
  },
  {
    id: "fondue-a-dois",
    category: "lua-de-mel",
    name: "Fondue a dois",
    description: "De queijo pra começar, de chocolate pra terminar.",
    price: 250,
    repeatable: true,
  },
  {
    id: "cafe-colonial",
    category: "lua-de-mel",
    name: "Café colonial",
    description: "Mesa farta de pães, geleias e queijos da região.",
    price: 150,
    repeatable: true,
  },
  {
    id: "vinho-lareira",
    category: "lua-de-mel",
    name: "Vinho em frente à lareira",
    description: "Uma garrafa pra aquecer a noite fria.",
    price: 180,
    repeatable: true,
  },
  {
    id: "chocolate-quente",
    category: "lua-de-mel",
    name: "Rodada de chocolate quente",
    description: "Pros fins de tarde mais gelados da viagem.",
    price: 100,
    repeatable: true,
  },
  {
    id: "lojinhas-centrinho",
    category: "lua-de-mel",
    name: "Comprinhas no centrinho",
    description: "Chocolates caseiros, malhas e lembrancinhas pra trazer de volta.",
    price: 200,
    repeatable: true,
  },
  {
    id: "cervejaria-artesanal",
    category: "lua-de-mel",
    name: "Degustação de cerveja artesanal",
    description: "Pra conhecer as cervejarias da serra.",
    price: 200,
    repeatable: true,
  },
  {
    id: "trilha-pedra-redonda",
    category: "lua-de-mel",
    name: "Trilha até a Pedra Redonda",
    description: "Subir juntos pra ver a Mantiqueira lá de cima.",
    price: 150,
    repeatable: true,
  },
  {
    id: "passeio-cavalo",
    category: "lua-de-mel",
    name: "Cavalgada pelas montanhas",
    description: "Um passeio sem pressa no meio das araucárias.",
    price: 200,
    repeatable: true,
  },
  {
    id: "quadriciclo",
    category: "lua-de-mel",
    name: "Aventura de quadriciclo",
    description: "Lama, risada e muita poeira pra lembrar depois.",
    price: 300,
    repeatable: true,
  },
  {
    id: "massagem-pedras-quentes",
    category: "lua-de-mel",
    name: "Massagem com pedras quentes",
    description: "Pros dois descansarem de toda a correria dos preparativos.",
    price: 400,
    repeatable: true,
  },
  {
    id: "ofuro",
    category: "lua-de-mel",
    name: "Ofurô quentinho no chalé",
    description: "Água quente por dentro, frio da serra por fora.",
    price: 450,
    repeatable: true,
  },
  {
    id: "diaria-chale",
    category: "lua-de-mel",
    name: "Uma diária a mais no chalé",
    description: "Porque um dia a mais nunca é demais.",
    price: 600,
    repeatable: true,
  },

  // Com bom humor
  {
    id: "aquecedor-pes-noiva",
    category: "bom-humor",
    name: "Meias térmicas para os pés gelados da noiva",
    description: "Em Monte Verde a disputa pelo cobertor vai ser séria.",
    price: 100,
    repeatable: true,
  },
  {
    id: "lembrete-aniversario",
    category: "bom-humor",
    name: "Lembrete vitalício do aniversário de casamento",
    description: "Pra ninguém esquecer o 12 de junho. Ninguém, Alison.",
    price: 100,
    repeatable: true,
  },
  {
    id: "kit-primeira-briga",
    category: "bom-humor",
    name: "Kit primeira briga de casados",
    description: "Chocolate, pipoca e um filme pra fazer as pazes.",
    price: 120,
    repeatable: true,
  },
  {
    id: "delivery-preguica",
    category: "bom-humor",
    name: "Delivery pras noites de preguiça",
    description: "Pra quando o fogão pedir folga.",
    price: 150,
    repeatable: true,
  },
  {
    id: "curso-culinaria-noivo",
    category: "bom-humor",
    name: "Curso de culinária para o noivo",
    description: "Pra cardápio de casado não ser só miojo.",
    price: 200,
    repeatable: true,
  },
  {
    id: "primeiro-boleto",
    category: "bom-humor",
    name: "Pagar o primeiro boleto de casados",
    description: "Bem-vindos à vida adulta a dois.",
    price: 250,
    repeatable: true,
  },
  {
    id: "poupanca-bebe",
    category: "bom-humor",
    name: "Poupança do futuro bebê",
    description: "Calma, ainda não. Mas já vamos juntando.",
    price: 200,
    repeatable: true,
  },
  {
    id: "padrinho-de-luxo",
    category: "bom-humor",
    name: "Quero bancar a lua de mel quase inteira",
    description: "Seu nome vai ser lembrado em cada foto da viagem.",
    price: 600,
    repeatable: true,
  },
];
