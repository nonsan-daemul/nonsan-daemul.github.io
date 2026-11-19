"use client";

import { useEffect, useRef, useState } from "react";
import { m, useInView } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiPause, HiPlay } from "react-icons/hi2";
import TripIllustration from "./TripIllustration";
import { tripStoryCopy } from "./trip-story-copy";
import type { Locale } from "./translations";
import { useReducedMotionPreference } from "./use-reduced-motion-preference";

const sceneDuration = 6500;

export default function TripStory({ locale }: { locale: Locale }) {
  const copy = tripStoryCopy[locale];
  const [phase, setPhase] = useState(0);
  const [playRequested, setPlayRequested] = useState<boolean | null>(null);
  const [pageVisible, setPageVisible] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const inView = useInView(frame, { amount: 0.35 });
  const reducedMotion = useReducedMotionPreference();
  const wantsPlayback = playRequested ?? !reducedMotion;
  const playing = pageVisible && inView && wantsPlayback;
  const last = copy.steps.length - 1;

  useEffect(() => {
    const syncVisibility = () => setPageVisible(!document.hidden);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (phase === last) setPlayRequested(false);
      else setPhase(phase + 1);
    }, sceneDuration);
    return () => window.clearTimeout(timer);
  }, [phase, playing, last]);

  function selectScene(index: number) {
    setPlayRequested(false);
    setPhase(index);
  }

  function togglePlayback() {
    if (!wantsPlayback && phase === last) setPhase(0);
    setPlayRequested(!wantsPlayback);
  }

  return (
    <section id="trip-story" className="section trip-story" aria-labelledby="trip-story-title">
      <div className="wrap">
        <div className="section-heading story-heading">
          <h2 id="trip-story-title">{copy.title}</h2>
          <p>{copy.intro}</p>
        </div>
        <div className="story-player">
          <div className="story-main">
            <div className="story-frame" ref={frame} aria-hidden="true">
              <TripIllustration phase={phase} playing={playing} />
            </div>
            <div className="story-caption">
              <div className="scene-captions" aria-live={playing ? "off" : "polite"} aria-atomic="true">
                {copy.steps.map((scene, index) => (
                  <div key={index} aria-hidden={index !== phase}>
                    <h3>{scene.title}</h3>
                    <p>{scene.body}</p>
                  </div>
                ))}
              </div>
              <div className="story-controls">
                <button type="button" onClick={() => selectScene(phase - 1)} disabled={phase === 0} aria-label={copy.previous} title={copy.previous}><HiChevronLeft /></button>
                <button type="button" className="play-toggle" onClick={togglePlayback} aria-label={wantsPlayback ? copy.pause : copy.play} title={wantsPlayback ? copy.pause : copy.play}>{wantsPlayback ? <HiPause /> : <HiPlay />}</button>
                <button type="button" onClick={() => selectScene(phase + 1)} disabled={phase === last} aria-label={copy.next} title={copy.next}><HiChevronRight /></button>
              </div>
            </div>
          </div>
          <ol className="scene-list" aria-label={copy.title}>
            {copy.steps.map((step, index) => (
              <li key={index}>
                <button type="button" onClick={() => selectScene(index)} aria-label={step.title} aria-current={index === phase ? "step" : undefined}>
                  <span className="scene-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span className="scene-name">{step.title}</span>
                  {index === phase && <m.span initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : 0.22 }} className="scene-marker" aria-hidden="true" />}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <noscript><style>{".story-controls,.scene-list{display:none}.story-player{display:block}"}</style><ol className="story-transcript">{copy.steps.map(step => <li key={step.title}><strong>{step.title}</strong> {step.body}</li>)}</ol></noscript>
      </div>
    </section>
  );
}
