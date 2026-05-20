"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const calendlyUrl =
  "https://calendly.com/mostafa-marocmentor/session-decouverte-30-minutes-clone?utm_id=97758_v0_s00_e0_tv1_a1demoo3ja7o5y&fbclid=IwY2xjawRxZSFleHRuA2FlbQIxMABicmlkETBPMFVlNnpUR2Q0ZFhWQjB1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlWOt6tH2RBcSqYBd9azTPsPztAlKLXBzhiO7aoYmIi2stJIeGwAW8qcGDjj_aem_Beyyr0mjqH0QAdXSrJX_eQ";

const steps = [
  {
    eyebrow: "Istanbul, 2016",
    title: "Le jour ou j'ai pris l'avion pour Istanbul, a 48 ans",
    paragraphs: [
      "En 2016, a 48 ans, j'ai pris l'avion pour Istanbul. Pas pour doubler mon salaire. Pour ne pas accepter l'echec.",
    ],
  },
  {
    eyebrow: "Le choc",
    title: "Le moment ou une page s'est fermee",
    paragraphs: [
      "ATTAWAFOK venait de fermer. Huit ans de direction, de 2007 a 2015. Une page douloureuse.",
    ],
  },
  {
    eyebrow: "Le choix",
    title: "J'aurais pu rester dans le confort",
    paragraphs: [
      "J'aurais pu chercher un poste confortable a Casablanca. J'ai choisi Istanbul.",
    ],
  },
  {
    eyebrow: "Le defi",
    title: "Le defi qui a redefine ma posture",
    paragraphs: [
      "Premier defi immediat: zero turc. Diriger une equipe de 80 personnes sans parler leur langue.",
    ],
  },
  {
    eyebrow: "Lecon de leadership",
    title: "L'autorite vient de la posture, pas des mots.",
    paragraphs: [],
  },
  {
    eyebrow: "Ce que je transmets",
    title: "L'echec bien vecu devient un capital pour diriger avec plus de justesse.",
    paragraphs: [],
  },
  {
    eyebrow: "Session decouverte 30 min offerte",
    title: "Un premier echange pour clarifier votre situation.",
    paragraphs: [],
    cta: true,
  },
] as const;

function ChevronLeftIcon() {
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
      <path d="M15 18 9 12l6-6" />
    </svg>
  );
}

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

export default function FounderStory() {
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const headingText = "Le point de bascule qui a redefini mon leadership";
  const introText =
    "Ce contenu est plus qu'une anecdote. C'est un recit de transformation professionnelle qui explique d'ou vient ma posture aujourd'hui face a l'echec, a la pression et a la decision.";
  const lessonText = "L'autorite vient de la posture, pas des mots.";
  const transmissionText =
    "L'echec bien vecu devient un capital pour diriger avec plus de justesse.";
  const discoveryText = "Session decouverte 30 min offerte";
  const discoverySubtext = "Un premier echange pour clarifier votre situation.";
  const revealEase = [0.22, 1, 0.36, 1] as const;
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: revealEase },
    },
  };
  const panelMotion = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 20, filter: reduceMotion ? "none" : "blur(8px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: revealEase },
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : -12,
      filter: reduceMotion ? "none" : "blur(8px)",
      transition: { duration: 0.28, ease: [0.55, 0.06, 0.68, 0.19] as const },
    },
  };
  const progressRatio = (activeStep + 1) / steps.length;
  const currentStep = steps[activeStep];
  const isLastStep = activeStep === steps.length - 1;

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
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14">
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
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,18,28,0.92)_0%,rgba(7,10,17,0.98)_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
          >
            <div className="border-b border-white/8 px-5 py-5 md:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d4b000]">
                    Istanbul, 2016
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/44">
                    {`Evenement ${activeStep + 1} / ${steps.length}`}
                  </p>
                </div>

                <div className="w-28 sm:w-36">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#d4b000] to-[#f0d35b]"
                      animate={{ width: `${progressRatio * 100}%` }}
                      transition={{ duration: reduceMotion ? 0 : 0.45, ease: revealEase }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 py-6 md:px-8 md:py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`step-${activeStep}`}
                  {...panelMotion}
                  className="min-h-[19rem]"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#d4b000]">
                    {currentStep.eyebrow}
                  </p>

                  <h3 className="mt-3 max-w-[22ch] text-2xl font-semibold leading-tight text-white md:text-[2rem]">
                    {currentStep.title}
                  </h3>

                  {currentStep.paragraphs.length > 0 ? (
                    <div className="mt-6 space-y-4 text-[0.98rem] leading-7 text-white/78 md:text-lg md:leading-8">
                      {currentStep.paragraphs.map((paragraph, index) => (
                        <motion.p
                          key={`${activeStep}-${index}`}
                          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.42,
                            ease: revealEase,
                            delay: reduceMotion ? 0 : index * 0.08,
                          }}
                        >
                          {paragraph.includes("ATTAWAFOK") ? (
                            <>
                              <span className="font-semibold text-white">ATTAWAFOK</span>
                              {paragraph.replace("ATTAWAFOK", "")}
                            </>
                          ) : (
                            paragraph
                          )}
                        </motion.p>
                      ))}
                    </div>
                  ) : null}

                  {currentStep.title === lessonText ? (
                    <motion.div
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.48, ease: revealEase }}
                      className="mt-8 rounded-[1.25rem] border border-[#d4b000]/20 bg-[#0a1018] p-5"
                    >
                      <p className="text-sm leading-7 text-white/80 md:text-lg md:leading-8">
                        Une autorite durable ne depend pas d'un titre, d'un
                        volume de voix ou d'un effet de langage. Elle se sent
                        dans la presence, la constance et la clarte.
                      </p>
                    </motion.div>
                  ) : null}

                  {currentStep.title === transmissionText ? (
                    <motion.div
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.48, ease: revealEase }}
                      className="mt-8 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <p className="text-sm leading-7 text-white/80 md:text-lg md:leading-8">
                        C'est ce regard-la que j'apporte aux dirigeants que
                        j'accompagne: transformer une epreuve en discernement,
                        et une periode instable en posture plus juste.
                      </p>
                    </motion.div>
                  ) : null}

                  {currentStep.cta ? (
                    <motion.div
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: revealEase,
                      }}
                      className="mt-8 flex flex-col items-start gap-3 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                          {discoveryText}
                        </p>
                        <p className="mt-1 text-sm text-white/62">
                          {discoverySubtext}
                        </p>
                      </div>

                      <a
                        href={calendlyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-b from-[#d9b816] to-[#b38b00] px-6 text-sm font-bold uppercase tracking-[0.12em] text-[#08111d] shadow-[0_10px_22px_rgba(179,139,0,0.24)] transition-transform duration-200 hover:translate-y-[-1px]"
                      >
                        Reserver un echange
                      </a>
                    </motion.div>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-white/8 px-5 py-4 md:px-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.16em] text-white/44">
                  {currentStep.eyebrow}
                </p>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveStep((current) => Math.max(0, current - 1))}
                    disabled={activeStep === 0}
                    aria-label="Evenement precedent"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white/74 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1119]"
                  >
                    <ChevronLeftIcon />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveStep((current) => {
                        if (current >= steps.length - 1) {
                          return steps.length - 1;
                        }

                        return current + 1;
                      })
                    }
                    disabled={isLastStep}
                    aria-label="Evenement suivant"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d4b000]/24 bg-[#d4b000]/10 text-[#e1bf39] transition-colors duration-200 hover:bg-[#d4b000]/16 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1119]"
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
