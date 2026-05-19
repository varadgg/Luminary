import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Reusable scroll-driven animation hook.
 * Animations are FULLY REVERSIBLE — scroll down to reveal, scroll up to hide.
 * 
 * @param {Array} range - The scroll progress range to map [start, end]. Default [0, 0.4].
 * @returns {{ ref, opacity, y, scale }} - Ref to attach + motion values.
 */
export default function useScrollAnimation(range = [0, 0.4]) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  const y = useTransform(scrollYProgress, range, [80, 0]);
  const scale = useTransform(scrollYProgress, range, [0.95, 1]);

  return { ref, opacity, y, scale, scrollYProgress };
}
