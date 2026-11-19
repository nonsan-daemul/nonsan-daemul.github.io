"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useReducedMotionPreference } from "./use-reduced-motion-preference";

export default function CountUpFact({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotionPreference();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const end = Number.parseInt(value, 10);
    if (!inView || reduceMotion || !Number.isFinite(end)) return;

    const openingYear = value === "2004";
    const animation = animate(openingYear ? 2000 : 0, end, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate(current) {
        const digits = String(Math.round(current));
        setDisplay(value === "1:1" ? `${digits}:${digits}` : value.replace(/^\d+/, digits));
      },
    });
    return () => animation.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      <span className="sr-only motion-reduce:not-sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums motion-reduce:hidden">{display}</span>
    </span>
  );
}
