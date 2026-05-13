"use client";

import { motion, useReducedMotion } from "framer-motion";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9.75h3.96V21H3V9.75Zm7.2 0H14v1.54h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.08V21h-3.95v-5.07c0-1.21-.02-2.77-1.69-2.77-1.7 0-1.96 1.32-1.96 2.68V21H10.2V9.75Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M13.5 21v-7.03H16l.38-2.97H13.5v-1.9c0-.86.24-1.44 1.47-1.44h1.57V5a19.2 19.2 0 0 0-2.28-.12c-2.26 0-3.81 1.38-3.81 3.92V11H8v2.97h2.46V21h3.04Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.64 2.61a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6.25 6.25l1.31-1.3a2 2 0 0 1 2.11-.46c.84.31 1.71.52 2.61.64A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const cardEase = [0.22, 1, 0.36, 1] as const;
  const cardReveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.62, ease: cardEase },
    },
  };

  return (
    <motion.footer
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-[#04070c] px-5 py-10 text-white sm:px-6 md:px-10 md:py-12 lg:px-14"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.1,
          },
        },
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <motion.div variants={cardReveal} className="max-w-md">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#d4b000]">
            Maroc Mentor
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-[2rem]">
            Restons en contact
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/68 md:text-base md:leading-7">
            Un point de contact simple pour poursuivre l&apos;&eacute;change, poser une
            question ou r&eacute;server un premier rendez-vous.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-3 md:min-w-[34rem]">
          <motion.a
            variants={cardReveal}
            href="https://www.linkedin.com/in/mostafa-mounasser/"
            target="_blank"
            rel="noreferrer"
            className="group flex cursor-pointer items-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-200 hover:border-[#d4b000]/40 hover:bg-white/[0.06]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d4b000]/12 text-[#d4b000] transition-colors duration-200 group-hover:bg-[#d4b000] group-hover:text-[#08111d]">
              <LinkedInIcon />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                LinkedIn
              </span>
              <span className="block text-sm font-medium text-white">
                mostafa-mounasser
              </span>
            </span>
          </motion.a>

          <motion.a
            variants={cardReveal}
            href="https://web.facebook.com/mostafa.mounasser"
            target="_blank"
            rel="noreferrer"
            className="group flex cursor-pointer items-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-200 hover:border-[#d4b000]/40 hover:bg-white/[0.06]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d4b000]/12 text-[#d4b000] transition-colors duration-200 group-hover:bg-[#d4b000] group-hover:text-[#08111d]">
              <FacebookIcon />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Facebook
              </span>
              <span className="block text-sm font-medium text-white">
                mostafa.mounasser
              </span>
            </span>
          </motion.a>

          <motion.a
            variants={cardReveal}
            href="tel:0661064946"
            className="group flex cursor-pointer items-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-200 hover:border-[#d4b000]/40 hover:bg-white/[0.06]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d4b000]/12 text-[#d4b000] transition-colors duration-200 group-hover:bg-[#d4b000] group-hover:text-[#08111d]">
              <PhoneIcon />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                T&eacute;l&eacute;phone
              </span>
              <span className="block text-sm font-medium text-white">
                06 61 06 49 46
              </span>
            </span>
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
