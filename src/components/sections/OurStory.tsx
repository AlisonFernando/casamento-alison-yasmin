import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function OurStory() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-20">
      {/* Textura de fundo (sutil) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 10%, rgba(156,175,136,.35), transparent 45%),
            radial-gradient(circle at 80% 30%, rgba(183,196,165,.28), transparent 50%),
            radial-gradient(circle at 40% 90%, rgba(126,143,106,.22), transparent 55%),
            linear-gradient(180deg, rgba(0,0,0,.03), transparent)
          `,
        }}
      />
      {/* “granulado” leve */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(0,0,0,.06) 0, rgba(0,0,0,.06) 1px, transparent 1px, transparent 3px),
            repeating-linear-gradient(90deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) 1px, transparent 1px, transparent 4px)
          `,
        }}
      />

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Título */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl"
          style={{ fontFamily: "Playfair Display, serif", color: "#7E8F6A" }} // sálvia escuro
        >
          Nossa história
        </motion.h2>

        {/* Linha decorativa animada */}
        <div className="flex justify-center mt-4 mb-10">
          <motion.div
            className="h-[2px] w-28 rounded-full origin-left"
            style={{ backgroundColor: "#B7C4A5" }} // sálvia claro
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Conteúdo (fade-in no scroll) */}
        <motion.div
          className="mx-auto max-w-3xl text-left leading-relaxed space-y-6"
          style={{ color: "rgba(20, 20, 20, 0.78)" }}
          variants={container}
        >
          {/* Primeiro parágrafo com “drop cap” */}
          <motion.p variants={item} className="text-lg">
            <span
              className="float-left mr-3 leading-none"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "3.5rem",
                lineHeight: "0.9",
                color: "#7E8F6A",
              }}
            >
              E
            </span>
            m um tempo cuidadosamente preparado pelo Senhor, quando cada detalhe
            já havia sido escrito nos céus, começou a se revelar uma história
            que parecia saída de um livro encantado, uma história guiada pelas
            mãos de Deus.
          </motion.p>

          <motion.p variants={item}>
            Era uma vez uma jovem de coração doce, sorriso leve e fé sincera,
            que carregava sonhos, sem imaginar que um simples momento
            compartilhado em suas redes sociais se tornaria o início de algo
            eterno.
          </motion.p>

          <motion.p variants={item}>
            E em algum lugar, havia também um homem de coração bondoso, olhar
            protetor e alma tranquila, que, movido por um sopro silencioso do
            céu, decidiu enviar uma mensagem. E foi assim que, através de
            palavras simples, Deus começou a entrelaçar dois caminhos em um só.
          </motion.p>

          <motion.p variants={item}>
            À medida que os dias passavam, eles descobriam que eram como peças
            cuidadosamente moldadas pelo Criador: ele, a calmaria que traz
            segurança e cuidado; ela, a alegria que colore os dias com leveza e
            doçura. Em cada conversa, em cada risada, havia a doce sensação de
            que o amor florescia sob a luz da presença de Deus.
          </motion.p>

          <motion.p variants={item}>
            Como em toda história preciosa, surgiram provas que fortaleceram
            seus corações. A distância e o tempo limitado pareciam longas
            estradas, mas a cada reencontro, ainda que apenas uma vez por
            semana, havia a certeza de que o Senhor sustentava cada passo e
            transformava a espera em esperança.
          </motion.p>

          <motion.p variants={item}>
            Com olhos atentos, passaram a enxergar no outro os presentes do céu:
            nele, o cuidado, o carisma e o profundo amor por Deus; nela, a
            ternura, o caráter e um coração que reflete a bondade do Senhor.
            Unidos pela fé, guardavam o mesmo sonho: construir um lar firmado em
            Jesus, onde o amor seria reflexo da graça divina.
          </motion.p>

          <motion.p variants={item}>
            Sob as estrelas que testemunham promessas e sob o olhar fiel do Pai,
            eles oram, caminham e confiam, certos de que Deus é um Deus de
            milagres, que honra aqueles que O amam e escreve histórias mais
            belas do que qualquer conto poderia imaginar.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
