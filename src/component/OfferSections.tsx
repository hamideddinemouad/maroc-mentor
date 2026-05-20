"use client";

import { motion, useReducedMotion } from "framer-motion";

const calendlyUrl =
  "https://calendly.com/mostafa-marocmentor/session-decouverte-30-minutes-clone?utm_id=97758_v0_s00_e0_tv1_a1demoo3ja7o5y&fbclid=IwY2xjawRxZSFleHRuA2FlbQIxMABicmlkETBPMFVlNnpUR2Q0ZFhWQjB1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlWOt6tH2RBcSqYBd9azTPsPztAlKLXBzhiO7aoYmIi2stJIeGwAW8qcGDjj_aem_Beyyr0mjqH0QAdXSrJX_eQ";

const keyFigures = [
  { value: "23", label: "Ans de direction" },
  { value: "4", label: "Programmes" },
  { value: "30'", label: "Session gratuite" },
] as const;

const timeline = [
  {
    years: "2002 - 2016",
    role: "Directeur General",
    company: "Al Mouhassib Consulting",
    city: "Casablanca",
  },
  {
    years: "2007 - 2015",
    role: "Directeur General",
    company: "Attawafok Assurances",
    city: "Casablanca",
  },
  {
    years: "2016 - 2023",
    role: "Directeur General",
    company: "Prime Estate & Prime Pazarlama",
    city: "Istanbul",
  },
  {
    years: "2026",
    role: "Fondateur",
    company: "Maroc Mentor",
    city: "Casablanca",
  },
] as const;

const programs = [
  {
    name: "Ignition",
    audience: "Auto-entrepreneurs",
    duration: "3 mois",
    description: "Structurer votre activite et decrocher vos premiers clients.",
  },
  {
    name: "Transition",
    audience: "Cadres en reconversion",
    duration: "4 mois",
    description: "Piloter votre changement de cap avec clarte.",
  },
  {
    name: "Growth",
    audience: "Dirigeants PME",
    duration: "6 mois",
    description: "Sortir de l'operationnel et structurer votre croissance.",
  },
  {
    name: "International",
    audience: "Expansion Maroc-Turquie",
    duration: "6 mois",
    description: "Naviguer deux marches avec un guide qui les connait.",
  },
] as const;

export default function OfferSections() {
  const reduceMotion = useReducedMotion();
  const revealEase = [0.22, 1, 0.36, 1] as const;
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.68, ease: revealEase },
    },
  };

  return (
    <>
      <motion.section
        className="relative scroll-mt-24 bg-[linear-gradient(180deg,#05080d_0%,#07101a_100%)] px-5 py-16 text-white sm:px-6 md:px-10 md:py-20 lg:px-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduceMotion ? 0 : 0.1,
            },
          },
        }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div variants={reveal} className="max-w-xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#d4b000]">
              Chiffres cles
            </p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.94] tracking-[0.03em] text-white">
              Une credibilite batie sur des annees de terrain
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {keyFigures.map((figure) => (
              <motion.article
                key={figure.label}
                variants={reveal}
                className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] px-5 py-6 shadow-[0_20px_48px_rgba(0,0,0,0.22)]"
              >
                <p className="text-4xl font-black tracking-[-0.04em] text-[#d4b000] md:text-5xl">
                  {figure.value}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
                  {figure.label}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative scroll-mt-24 bg-[#06101a] px-5 py-16 text-white sm:px-6 md:px-10 md:py-24 lg:px-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduceMotion ? 0 : 0.12,
            },
          },
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:gap-14">
          <motion.div variants={reveal} className="max-w-lg">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#d4b000]">
              Pourquoi Maroc Mentor
            </p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.7rem)] font-black uppercase leading-[0.94] tracking-[0.03em]">
              Un coach qui a dirige, pas seulement forme
            </h2>
          </motion.div>

          <motion.div
            variants={reveal}
            className="rounded-[1.8rem] border border-[#d4b000]/16 bg-[linear-gradient(180deg,rgba(8,17,29,0.96)_0%,rgba(5,9,16,0.98)_100%)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.24)] md:p-8"
          >
            <p className="text-base leading-8 text-white/78 md:text-lg">
              La majorite des coachs n&apos;ont jamais gere une equipe de 80
              personnes, dirige en Turquie sans parler la langue, ou reconstruit
              apres une faillite.
            </p>
            <p className="mt-5 text-base leading-8 text-white/78 md:text-lg">
              Mostafa Mounasser a tout vecu. Ce qu&apos;il vous transmet, c&apos;est du
              terrain, pas de la theorie.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="relative scroll-mt-24 bg-[#05080d] px-5 py-16 text-white sm:px-6 md:px-10 md:py-24 lg:px-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduceMotion ? 0 : 0.1,
            },
          },
        }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div variants={reveal} className="max-w-2xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#d4b000]">
              Parcours
            </p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.6rem)] font-black uppercase leading-[0.94] tracking-[0.03em]">
              58 ans d&apos;experience condenses pour vous
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-4">
            {timeline.map((item) => (
              <motion.article
                key={`${item.years}-${item.company}`}
                variants={reveal}
                className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 md:grid-cols-[11rem_minmax(0,1fr)_auto] md:items-center md:px-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d4b000]">
                  {item.years}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white md:text-xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-white/68 md:text-base">
                    {item.company}
                  </p>
                </div>
                <p className="text-sm uppercase tracking-[0.16em] text-white/54 md:text-right">
                  {item.city}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="programmes"
        className="relative scroll-mt-24 bg-[linear-gradient(180deg,#07101a_0%,#05080d_100%)] px-5 py-16 text-white sm:px-6 md:px-10 md:py-24 lg:px-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduceMotion ? 0 : 0.1,
            },
          },
        }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div variants={reveal} className="max-w-2xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#d4b000]">
              Programmes
            </p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.6rem)] font-black uppercase leading-[0.94] tracking-[0.03em]">
              Un accompagnement adapte a votre stade
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {programs.map((program) => (
              <motion.article
                key={program.name}
                variants={reveal}
                className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,29,0.94)_0%,rgba(5,8,13,0.98)_100%)] p-6 shadow-[0_22px_52px_rgba(0,0,0,0.22)]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-white">{program.name}</h3>
                  <span className="rounded-full border border-[#d4b000]/24 bg-[#d4b000]/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#e1bf39]">
                    {program.duration}
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/52">
                  {program.audience}
                </p>
                <p className="mt-4 text-base leading-7 text-white/76">
                  {program.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative scroll-mt-24 bg-[#04070c] px-5 py-16 text-white sm:px-6 md:px-10 md:py-24 lg:px-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#d4b000]/18 bg-[radial-gradient(circle_at_top,rgba(212,176,0,0.16),transparent_36%),linear-gradient(180deg,rgba(8,17,29,0.96)_0%,rgba(4,7,12,1)_100%)] px-6 py-10 text-center shadow-[0_28px_70px_rgba(0,0,0,0.28)] md:px-10 md:py-12">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#d4b000]">
            Pret a en parler ?
          </p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.3rem)] font-black uppercase leading-[0.96] tracking-[0.03em] text-white">
            30 minutes. Gratuit. Sans engagement.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/74 md:text-lg md:leading-8">
            On voit si on peut travailler ensemble.
          </p>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-b from-[#d9b816] to-[#b38b00] px-7 text-sm font-bold uppercase tracking-[0.12em] text-[#08111d] shadow-[0_10px_22px_rgba(179,139,0,0.24)] transition-transform duration-200 hover:translate-y-[-1px]"
          >
            Reserver ma session decouverte
          </a>
        </div>
      </motion.section>
    </>
  );
}
