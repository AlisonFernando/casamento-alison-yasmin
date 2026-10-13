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
    title: "Lua de mel",
    subtitle: "Momentos da nossa primeira viagem de casados. Podem ser presenteados mais de uma vez.",
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
    id: "chaleira",
    category: "casa",
    name: "Chaleira",
    description: "Para preparar aquele chá ou café quentinho.",
    price: 80,
  },
  {
    id: "filtro-agua",
    category: "casa",
    name: "Filtro de água",
    description: "Água fresca e filtrada todos os dias em casa.",
    price: 350,
  },
  {
    id: "garrafa-cafe",
    category: "casa",
    name: "Garrafa de café",
    description: "Pra manter o café quentinho por mais tempo.",
    price: 85,
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
    name: "Aparador",
    description: "Pra receber as chaves, as cartas e os porta-retratos da entrada.",
    price: 250,
  },
  {
    id: "cabeceira",
    category: "casa",
    name: "Cabeceira",
    description: "O toque final do nosso quarto.",
    price: 350,
  },
  {
    id: "rack-tv",
    category: "casa",
    name: "Rack para a TV",
    description: "Pras noites de filme no sofá.",
    price: 300,
  },
  {
    id: "suporte-tv",
    category: "casa",
    name: "Suporte articulado para TV",
    description: "Pra assistir de qualquer canto da sala.",
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
    name: "Jogo de mesa e cadeiras",
    description: "Pra reunir quem a gente ama em volta da mesa.",
    price: 1200,
  },
  {
    id: "comprinhas-casa-nova",
    category: "casa",
    name: "Comprinhas de sobrevivência para a casa nova",
    description: "Aquele mercado da primeira semana, com tudo que esquecemos de comprar.",
    price: 300,
  },
  {
    id: "conjunto-malas",
    category: "casa",
    name: "Conjunto de malas",
    description: "Pra viagem mais especial das nossas vidas e todas as próximas.",
    price: 600,
  },

  // Lua de mel
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
    id: "cafe-manha-nupcias",
    category: "lua-de-mel",
    name: "Café da manhã depois da noite de núpcias",
    description: "Na cama, com direito a suco natural e pão quentinho.",
    price: 120,
    repeatable: true,
  },
  {
    id: "champagne-frutas",
    category: "lua-de-mel",
    name: "Champagne com cesta de frutas",
    description: "Pra brindar a noite de núpcias.",
    price: 250,
    repeatable: true,
  },
  {
    id: "decoracao-nupcias",
    category: "lua-de-mel",
    name: "Decoração romântica para a noite de núpcias",
    description: "Pétalas, velas e tudo que tem direito.",
    price: 200,
    repeatable: true,
  },
  {
    id: "frigobar",
    category: "lua-de-mel",
    name: "Acesso liberado ao frigobar",
    description: "Sem olhar a tabelinha de preços.",
    price: 170,
    repeatable: true,
  },
  {
    id: "servico-de-quarto",
    category: "lua-de-mel",
    name: "Serviço de quarto",
    description: "Porque tem dia que a gente não quer sair do quarto.",
    price: 300,
    repeatable: true,
  },
  {
    id: "jantar-romantico",
    category: "lua-de-mel",
    name: "Jantar romântico",
    description: "Uma noite só nossa, à luz de velas.",
    price: 250,
    repeatable: true,
  },
  {
    id: "jantar-italiano",
    category: "lua-de-mel",
    name: "Jantar temático italiano",
    description: "Massa fresca, vinho e muita conversa.",
    price: 300,
    repeatable: true,
  },
  {
    id: "almoco-campo",
    category: "lua-de-mel",
    name: "Almoço especial no campo",
    description: "Comida caseira com vista pro verde.",
    price: 300,
    repeatable: true,
  },
  {
    id: "vinho-fim-de-tarde",
    category: "lua-de-mel",
    name: "Um bom vinho para o fim de tarde",
    description: "Pra ver o pôr do sol brindando.",
    price: 180,
    repeatable: true,
  },
  {
    id: "massagem-casal",
    category: "lua-de-mel",
    name: "Massagem relaxante para o casal",
    description: "Pra descansar de toda a correria dos preparativos.",
    price: 400,
    repeatable: true,
  },
  {
    id: "tarde-spa",
    category: "lua-de-mel",
    name: "Tarde de spa",
    description: "Pros noivos relaxarem depois da festa.",
    price: 450,
    repeatable: true,
  },
  {
    id: "passeio-bicicleta",
    category: "lua-de-mel",
    name: "Passeio romântico de bicicleta",
    description: "Pra conhecer o lugar sem pressa.",
    price: 150,
    repeatable: true,
  },
  {
    id: "passeios-atracoes",
    category: "lua-de-mel",
    name: "Curtir os passeios e atrações",
    description: "Ingressos e passeios pra aproveitar cada dia.",
    price: 500,
    repeatable: true,
  },
  {
    id: "passeio-balao",
    category: "lua-de-mel",
    name: "Passeio romântico de balão",
    description: "Ver o nascer do sol lá de cima.",
    price: 1500,
    repeatable: true,
  },

  // Com bom humor
  {
    id: "docinho",
    category: "bom-humor",
    name: "Não deixar faltar um docinho",
    description: "Pós-almoço sem sobremesa não é vida de casado.",
    price: 90,
    repeatable: true,
  },
  {
    id: "noite-pizza",
    category: "bom-humor",
    name: "Noite de pizza",
    description: "Pra quando nenhum dos dois quiser cozinhar.",
    price: 150,
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
    id: "curso-culinaria-noivo",
    category: "bom-humor",
    name: "Curso de culinária para o noivo",
    description: "A noiva agradece. E o estômago dela também.",
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
    id: "trocar-fraldas",
    category: "bom-humor",
    name: "Ferramenta para trocar fraldas do futuro filho",
    description: "Ainda não, mas vai que...",
    price: 110,
    repeatable: true,
  },
  {
    id: "pagar-lua-de-mel",
    category: "bom-humor",
    name: "Deus te iluminou e você resolveu pagar grande parte da lua de mel",
    description: "Seremos eternamente gratos (e bronzeados).",
    price: 600,
    repeatable: true,
  },
];
