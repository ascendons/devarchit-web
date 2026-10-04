"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import logo from "@/public/assets/logo.png";
import factory from "@/public/assets/factory.jpg";
import { industries, productCategories } from "@/lib/content";

const SLIDE_MS = 5000;

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 5 5L20 7" />
  </svg>
);

function ProductSlide({ index, reversed }: { index: number; reversed?: boolean }) {
  const cat = productCategories[index];
  return (
    <div className={`slide__split${reversed ? " slide__split--rev" : ""}`}>
      <div className="slide__items">
        {cat.items.map((item) => (
          <div key={item.name} className="slide__item s-in">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="slide__photo s-in">
        <Image src={cat.image} alt="" fill sizes="(max-width: 1100px) 50vw, 300px" />
      </div>
    </div>
  );
}

const slides: { label: string; className?: string; content: ReactNode }[] = [
  {
    label: "Company profile",
    className: "slide--cover",
    content: (
      <>
        <Image src={logo} alt="Devarchit Enterprises LLP" className="slide__logo s-in" />
        <h3 className="slide__title slide__title--xl s-in">Industrial &amp; Engineering Supply Partner</h3>
        <p className="slide__lead s-in">
          Comprehensive product distribution for HVAC, Oil &amp; Gas, Metals &amp; Mining, Water, and Infrastructure
          projects.
        </p>
        <div className="slide__contact s-in">
          <span>
            <PhoneIcon />
            +91 7667048330
          </span>
          <span>
            <MailIcon />
            sid.devarchit@gmail.com
          </span>
        </div>
        <p className="slide__address s-in">Hosur Main Road, Singasandra, Bengaluru, Karnataka, India - 560068</p>
      </>
    ),
  },
  {
    label: "About",
    content: (
      <>
        <p className="slide__eyebrow s-in">About Devarchit Enterprises LLP</p>
        <h3 className="slide__title s-in">Trusted Multi-Sector Industrial Supplier</h3>
        <div className="slide__split slide__split--rev">
          <div>
            <p className="slide__text s-in">
              Well-established industry presence delivering proven supply capabilities and deep domain expertise across
              core engineering sectors.
            </p>
            <div className="slide__panel s-in">
              <h4>Core Industries Served</h4>
              <ul>
                {industries.map((ind) => (
                  <li key={ind.name}>
                    <CheckIcon />
                    {ind.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="slide__photo s-in">
            <Image src={factory} alt="" fill sizes="(max-width: 1100px) 50vw, 300px" />
          </div>
        </div>
      </>
    ),
  },
  {
    label: "Valves & piping",
    content: (
      <>
        <p className="slide__eyebrow s-in">Product Portfolio</p>
        <h3 className="slide__title s-in">{productCategories[0].title}</h3>
        <ProductSlide index={0} />
      </>
    ),
  },
  {
    label: "Electrical",
    content: (
      <>
        <p className="slide__eyebrow s-in">Product Portfolio</p>
        <h3 className="slide__title s-in">{productCategories[1].title}</h3>
        <ProductSlide index={1} reversed />
      </>
    ),
  },
  {
    label: "HVAC & sanitary",
    content: (
      <>
        <p className="slide__eyebrow s-in">Product Portfolio</p>
        <h3 className="slide__title s-in">{productCategories[2].title}</h3>
        <ProductSlide index={2} />
      </>
    ),
  },
  {
    label: "Contact",
    className: "slide--closing",
    content: (
      <>
        <h3 className="slide__title slide__title--xl s-in">Looking Forward to a Long-Term Business Association</h3>
        <p className="slide__lead s-in">
          Send us your procurement inquiries for industrial valves, electrical goods, piping, and sanitary solutions.
        </p>
        <p className="slide__phone s-in">
          <PhoneIcon />
          7667048330
        </p>
        <div className="slide__contact s-in">
          <span>
            <MailIcon />
            devarchit@crm.ascendons.in
          </span>
          <span>
            <MailIcon />
            sid.devarchit@gmail.com
          </span>
        </div>
      </>
    ),
  },
];

export default function HeroSlides() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const remaining = useRef(SLIDE_MS);
  const go = (i: number) => setActive((i + slides.length) % slides.length);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Each new slide gets a full interval; declared before the timer so it resets first.
  useEffect(() => {
    remaining.current = SLIDE_MS;
  }, [active]);

  // Auto-advance; pausing keeps the unused time so the progress bar and timer stay in sync.
  useEffect(() => {
    if (paused || reducedMotion) return;
    const start = performance.now();
    const id = window.setTimeout(() => setActive((a) => (a + 1) % slides.length), remaining.current);
    return () => {
      window.clearTimeout(id);
      remaining.current -= performance.now() - start;
    };
  }, [active, paused, reducedMotion]);

  return (
    <div
      className={`deck load${paused ? " is-paused" : ""}`}
      style={{ "--d": 4 } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Company profile slides"
    >
      <div className="deck__stage">
        {slides.map((s, i) => (
          <div
            key={s.label}
            className={`slide${s.className ? ` ${s.className}` : ""}${i === active ? " is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}: ${s.label}`}
            aria-hidden={i !== active}
          >
            <div className="slide__accent" aria-hidden="true" />
            {s.content}
            <span className="slide__num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      <div className="deck__controls">
        <button className="deck__arrow" onClick={() => go(active - 1)} aria-label="Previous slide">
          ←
        </button>
        <div className="deck__bars">
          {slides.map((s, i) => (
            <button
              key={s.label}
              className={`deck__bar${i === active ? " is-active" : ""}${i < active ? " is-done" : ""}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}: ${s.label}`}
              aria-current={i === active}
            >
              <span key={i === active ? `on-${active}` : "off"} style={{ animationDuration: `${SLIDE_MS}ms` }} />
            </button>
          ))}
        </div>
        <button className="deck__arrow" onClick={() => go(active + 1)} aria-label="Next slide">
          →
        </button>
      </div>
    </div>
  );
}
