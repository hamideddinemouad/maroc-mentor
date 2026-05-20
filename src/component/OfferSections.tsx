"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

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
    summary: "Structuration, conseil et vision long terme au service des entreprises.",
  },
  {
    years: "2007 - 2015",
    role: "Directeur General",
    company: "Attawafok Assurances",
    city: "Casablanca",
    summary: "Pilotage, responsabilite operationnelle et gestion de la complexite au quotidien.",
  },
  {
    years: "2016 - 2023",
    role: "Directeur General",
    company: "Prime Estate & Prime Pazarlama",
    city: "Istanbul",
    summary: "Direction en contexte international, adaptation rapide et leadership sans confort culturel.",
  },
  {
    years: "2026",
    role: "Fondateur",
    company: "Maroc Mentor",
    city: "Casablanca",
    summary: "Transmission d'une experience dirigeante condensee en accompagnement utile et concret.",
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

function ChevronRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function OfferSections() {
  const reduceMotion = useReducedMotion();
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const revealEase = [0.22, 1, 0.36, 1] as const;
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.68, ease: revealEase },
    },
  };
  const activeItem = activeExperience === null ? timeline[0] : timeline[activeExperience];

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

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <motion.div variants={reveal} className="grid gap-3 lg:hidden">
              {timeline.map((item, index) => {
                const isActive = index === activeExperience;

                return (
                  <div
                    key={`${item.years}-${item.company}`}
                    className={`overflow-hidden rounded-[1.35rem] border transition-all duration-200 ${
                      isActive
                        ? "border-[#d4b000]/28 bg-[#d4b000]/10 shadow-[0_20px_48px_rgba(0,0,0,0.18)]"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveExperience((current) => (current === index ? null : index))
                      }
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b000] focus-visible:ring-inset"
                    >
                      <div>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#d4b000]">
                          {item.years}
                        </p>
                        <h3 className="mt-2 text-base font-semibold text-white">
                          {item.company}
                        </h3>
                        <p className="mt-1 text-sm text-white/58">{item.city}</p>
                      </div>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                          isActive
                            ? "rotate-90 bg-[#d4b000] text-[#08111d]"
                            : "bg-white/[0.04] text-white/50"
                        }`}
                      >
                        <ChevronRightIcon />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.32, ease: revealEase }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/8 px-4 pb-4 pt-4">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/44">
                              Fonction
                            </p>
                            <p className="mt-2 text-lg font-semibold text-white">
                              {item.role}
                            </p>

                            <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/44">
                              Resume
                            </p>
                            <p className="mt-2 text-sm leading-7 text-white/76">
                              {item.summary}
                            </p>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={reveal} className="hidden gap-3 lg:grid">
              {timeline.map((item, index) => {
                const isActive = index === activeExperience;

                return (
                    <button
                      key={`${item.years}-${item.company}`}
                      type="button"
                      onClick={() => setActiveExperience(index)}
                      className={`group flex w-full cursor-pointer items-center justify-between gap-4 rounded-[1.35rem] border px-4 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05080d] ${
                        isActive
                          ? "border-[#d4b000]/28 bg-[#d4b000]/10 shadow-[0_20px_48px_rgba(0,0,0,0.18)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/16 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#d4b000]">
                        {item.years}
                      </p>
                      <h3 className="mt-2 text-base font-semibold text-white md:text-lg">
                        {item.company}
                      </h3>
                      <p className="mt-1 text-sm text-white/58">{item.city}</p>
                    </div>

                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 ${
                        isActive
                          ? "bg-[#d4b000] text-[#08111d]"
                          : "bg-white/[0.04] text-white/50 group-hover:text-white/72"
                      }`}
                    >
                      <ChevronRightIcon />
                    </span>
                  </button>
                );
              })}
            </motion.div>

            <motion.div
              variants={reveal}
              className="hidden overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,18,28,0.94)_0%,rgba(6,10,16,0.98)_100%)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] md:p-8 lg:block"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem.years}-${activeItem.company}`}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 18, filter: reduceMotion ? "none" : "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: reduceMotion ? 0 : -12, filter: reduceMotion ? "none" : "blur(6px)" }}
                  transition={{ duration: 0.42, ease: revealEase }}
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#d4b000]">
                    Experience choisie
                  </p>
                  <h3 className="mt-3 text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-tight text-white">
                    {activeItem.role}
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/44">
                        Periode
                      </p>
                      <p className="mt-3 text-base font-semibold text-white">
                        {activeItem.years}
                      </p>
                    </div>

                    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/44">
                        Structure
                      </p>
                      <p className="mt-3 text-base font-semibold text-white">
                        {activeItem.company}
                      </p>
                    </div>

                    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/44">
                        Ville
                      </p>
                      <p className="mt-3 text-base font-semibold text-white">
                        {activeItem.city}
                      </p>
                    </div>
                  </div>

                  <p className="mt-8 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
                    {activeItem.summary}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
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
