"use client";

import { useEffect, useRef } from "react";

/** Scroll progress bar, reveal-on-scroll for `.reveal` elements, and parallax for `.parallax` images. */
export default function ScrollEffects() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const parallax = Array.from(document.querySelectorAll<HTMLElement>(".parallax"));
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }

      if (!reduceMotion) {
        const vh = window.innerHeight;
        parallax.forEach((img) => {
          const rect = img.parentElement!.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > vh) return;
          const offset = (rect.top + rect.height / 2 - vh / 2) * parseFloat(img.dataset.speed || "0.1");
          img.style.transform = `translate3d(0, ${offset - rect.height * 0.09}px, 0)`;
        });
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className="progress" ref={progressRef} aria-hidden="true" />;
}
