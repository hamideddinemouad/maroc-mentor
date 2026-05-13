"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const calendlyUrl =
  "https://calendly.com/mostafa-marocmentor/session-decouverte-30-minutes-clone?utm_id=97758_v0_s00_e0_tv1_a1demoo3ja7o5y&fbclid=IwY2xjawRxZSFleHRuA2FlbQIxMABicmlkETBPMFVlNnpUR2Q0ZFhWQjB1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlWOt6tH2RBcSqYBd9azTPsPztAlKLXBzhiO7aoYmIi2stJIeGwAW8qcGDjj_aem_Beyyr0mjqH0QAdXSrJX_eQ";

function PrimaryCta({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? "" : "hidden md:flex md:flex-col md:items-start"}>
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-[#d9b816] to-[#b38b00] px-6 text-sm font-bold uppercase tracking-[0.12em] text-[#08111d] shadow-[0_10px_22px_rgba(179,139,0,0.24)] transition-transform duration-200 hover:translate-y-[-1px] md:w-auto md:px-7"
      >
        Prendre rendez-vous
      </a>
      <p className="mt-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/64">
        Premier rendez-vous gratuit
      </p>
    </div>
  );
}

function AdvisorIdentity({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={
        mobile
          ? "w-full max-w-[20rem] sm:max-w-md"
          : "hidden md:block md:max-w-[18rem] lg:max-w-[20rem]"
      }
    >
      <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#d4b000] [text-shadow:0_6px_18px_rgba(0,0,0,0.45)]">
        Mostafa
      </p>
      <h2 className="mt-2 text-lg font-semibold leading-tight text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.52)] lg:text-xl">
        Sparring partner des dirigeants de PME
      </h2>
      {mobile ? (
        <p className="mt-2 text-sm leading-6 text-white/72">
          Des &eacute;changes concrets pour clarifier les enjeux, ajuster la
          posture et avancer avec plus de justesse.
        </p>
      ) : null}
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const heroEase = [0.22, 1, 0.36, 1] as const;
  const heroReveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: heroEase },
    },
  };

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#02060c] text-white">
      <motion.div
        className="absolute inset-0 md:hidden"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: heroEase }}
      >
        <Image
          src="/hero-bg.png"
          alt="Maroc Mentor hero background"
          fill
          priority
          quality={100}
          sizes="(max-width: 768px) 220vw, 100vw"
          className="object-cover object-[72%_center]"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 hidden md:block"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04, x: reduceMotion ? 0 : 18 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, ease: heroEase }}
      >
        <Image
          src="/hero-bg.png"
          alt="Maroc Mentor hero background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,12,0.16)_0%,rgba(2,6,12,0.42)_28%,rgba(2,6,12,0.76)_58%,rgba(2,6,12,0.96)_100%)] md:bg-[linear-gradient(90deg,rgba(2,6,12,0.84)_0%,rgba(2,6,12,0.56)_34%,rgba(2,6,12,0.18)_62%,rgba(2,6,12,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,167,0,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(200,167,0,0.1),transparent_28%)]" />

      <motion.div
        className="pointer-events-none absolute left-5 top-5 z-20 h-auto w-[5.5rem] drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] sm:left-6 sm:top-6 sm:w-[6.5rem] md:left-[4.5%] md:top-[5%] md:w-[10.5rem] md:max-w-none"
        initial={{ opacity: 0, y: reduceMotion ? 0 : -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: heroEase, delay: 0.12 }}
      >
        <Image
          src="/logo.svg"
          alt="Maroc Mentor"
          priority
          width={198}
          height={233}
          className="h-auto w-full"
        />
      </motion.div>

      <section
        id="accueil"
        className="relative z-10 flex min-h-[100svh] scroll-mt-24 flex-col px-5 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28 md:min-h-screen md:px-10 md:pb-10 md:pt-6 lg:px-14"
      >
        <div className="flex min-h-full flex-1 flex-col justify-end md:justify-center">
          <motion.div
            className="w-full max-w-[21rem] pt-28 sm:max-w-[22rem] sm:pt-32 md:mt-[16rem] md:max-w-[52rem] md:pt-0 lg:mt-[17.5rem]"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.12,
                  delayChildren: 0.18,
                },
              },
            }}
          >
            <motion.p
              variants={heroReveal}
              className="mb-5 inline-flex rounded-full border border-[#d4b000]/24 bg-[#d4b000]/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#e1bf39] backdrop-blur-sm"
            >
              Leadership de posture
            </motion.p>

            <motion.h1
              variants={heroReveal}
              className="text-[clamp(2.45rem,11vw,4rem)] font-black uppercase leading-[0.96] tracking-[0.03em] text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.52)] md:max-w-[12ch] md:text-[clamp(4rem,6vw,6.2rem)] md:tracking-[0.06em]"
            >
              <span className="text-[#d4b000]">Leadership</span>
              <br />
              vient de la <span className="text-[#d4b000]">posture</span>
              <br />
              pas des mots
            </motion.h1>

            <motion.p
              variants={heroReveal}
              className="mt-5 max-w-[20rem] text-sm leading-6 text-white/80 md:mt-7 md:max-w-[34rem] md:text-lg md:leading-8"
            >
              Un accompagnement direct pour les dirigeants de PME qui veulent
              renforcer leur impact, leur calme et leur prise de d&eacute;cision.
            </motion.p>

            <motion.div variants={heroReveal} className="hidden md:mt-8 md:block">
              <PrimaryCta />
            </motion.div>
          </motion.div>

          <motion.div variants={heroReveal} initial="hidden" animate="show" className="mt-8 md:hidden">
            <PrimaryCta mobile />
          </motion.div>

          <motion.div variants={heroReveal} initial="hidden" animate="show" className="mt-8 md:hidden">
            <AdvisorIdentity mobile />
          </motion.div>
        </div>

        <motion.div
          className="hidden md:absolute md:bottom-12 md:right-[6%] md:block lg:bottom-16 lg:right-[7%]"
          initial={{ opacity: 0, x: reduceMotion ? 0 : 26, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: heroEase, delay: 0.42 }}
        >
          <AdvisorIdentity />
        </motion.div>
      </section>
    </main>
  );
}
