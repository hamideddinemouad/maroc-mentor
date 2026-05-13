"use client";

import { motion, useReducedMotion } from "framer-motion";

const calendlyUrl =
  "https://calendly.com/mostafa-marocmentor/session-decouverte-30-minutes-clone?utm_id=97758_v0_s00_e0_tv1_a1demoo3ja7o5y&fbclid=IwY2xjawRxZSFleHRuA2FlbQIxMABicmlkETBPMFVlNnpUR2Q0ZFhWQjB1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlWOt6tH2RBcSqYBd9azTPsPztAlKLXBzhiO7aoYmIi2stJIeGwAW8qcGDjj_aem_Beyyr0mjqH0QAdXSrJX_eQ";

export default function FounderStory() {
  const reduceMotion = useReducedMotion();
  const headingText = "Le point de bascule qui a redéfini mon leadership";
  const introText =
    "Ce contenu est plus qu'une anecdote. C'est un récit de transformation professionnelle qui explique d'où vient ma posture aujourd'hui face à l'échec, à la pression et à la décision.";
  const journeyTitle = "Le jour où j'ai pris l'avion pour Istanbul, à 48 ans";
  const journeyParagraphs = [
    "En 2016, à 48 ans, j'ai pris l'avion pour Istanbul. Pas pour doubler mon salaire. Pour ne pas accepter l'échec.",
    "venait de fermer. Huit ans de direction, de 2007 à 2015. Une page douloureuse.",
    "J'aurais pu chercher un poste confortable à Casablanca. J'ai choisi Istanbul.",
    "Premier défi immédiat: zéro turc. Diriger une équipe de 80 personnes sans parler leur langue.",
  ] as const;
  const lessonText = "L'autorité vient de la posture, pas des mots.";
  const transmissionText =
    "L'échec bien vécu devient un capital pour diriger avec plus de justesse.";
  const discoveryText = "Session découverte 30 min offerte";
  const discoverySubtext = "Un premier échange pour clarifier votre situation.";
  const revealEase = [0.22, 1, 0.36, 1] as const;
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: revealEase },
    },
  };

  return (
    <motion.section
      id="parcours"
      className="relative scroll-mt-24 bg-[#05080d] px-5 py-16 text-white sm:px-6 md:px-10 md:py-24 lg:px-14"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.12,
          },
        },
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-14">
          <motion.div variants={reveal} className="max-w-xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#d4b000]">
              Parcours fondateur
            </p>
            <h2 className="mt-3 max-w-[14ch] text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-[0.94] tracking-[0.03em]">
              {headingText}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/76 md:text-lg md:leading-8">
              {introText}
            </p>
          </motion.div>

          <motion.div
            variants={reveal}
            className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,18,28,0.92)_0%,rgba(7,10,17,0.98)_100%)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d4b000]">
              Istanbul, 2016
            </p>
            <h3 className="mt-3 max-w-[22ch] text-2xl font-semibold leading-tight text-white md:text-[2rem]">
              {journeyTitle}
            </h3>

            <div className="mt-6 space-y-4 text-[0.98rem] leading-7 text-white/78 md:text-lg md:leading-8">
              <p>{journeyParagraphs[0]}</p>
              <p>
                <span className="font-semibold text-white">ATTAWAFOK</span>{" "}
                {journeyParagraphs[1]}
              </p>
              <p>{journeyParagraphs[2]}</p>
              <p>{journeyParagraphs[3]}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <motion.div
                variants={reveal}
                className="rounded-[1.25rem] border border-[#d4b000]/20 bg-[#0a1018] p-4"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#d4b000]">
                  Le&ccedil;on de leadership
                </p>
                <p className="mt-3 text-base leading-7 text-white/82">{lessonText}</p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#d4b000]">
                  Ce que je transmets
                </p>
                <p className="mt-3 text-base leading-7 text-white/82">{transmissionText}</p>
              </motion.div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{discoveryText}</p>
                <p className="mt-1 text-sm text-white/62">{discoverySubtext}</p>
              </div>

              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-b from-[#d9b816] to-[#b38b00] px-6 text-sm font-bold uppercase tracking-[0.12em] text-[#08111d] shadow-[0_10px_22px_rgba(179,139,0,0.24)] transition-transform duration-200 hover:translate-y-[-1px]"
              >
                R&eacute;server un &eacute;change
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
