"use client";

import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  /** "viewport" (default) animates in on scroll; "mount" animates
   *  immediately — use "mount" for above-the-fold content like page
   *  headers, where waiting for a scroll trigger would just be a
   *  pointless delay on content that's already visible. */
  mode = "viewport",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  mode?: "viewport" | "mount";
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: EASE } },
  };

  if (mode === "mount") {
    return (
      <motion.div initial="hidden" animate="show" variants={variants} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
