"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  once?: boolean;
}

/**
 * Word-by-word reveal for headlines. Renders inline (span) - wrap in your own heading tag.
 * Uses inline-flex + gap for spacing rather than a literal space character inside each
 * word's overflow-hidden box, since trailing whitespace right at a clipped inline-block
 * boundary gets collapsed by the browser and silently swallows the space between words.
 */
export function AnimatedText({ text, className, delay = 0, wordDelay = 0.06, once = true }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className ?? ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.6 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: wordDelay, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-top last:mr-0">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
