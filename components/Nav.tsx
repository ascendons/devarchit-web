"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "@/public/assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#industries", label: "Industries" },
  { href: "#products", label: "Products" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 400);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const className = ["nav", scrolled && "is-scrolled", hidden && !open && "is-hidden"].filter(Boolean).join(" ");

  return (
    <header className={className}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="Devarchit Enterprises LLP home" onClick={close}>
          <Image src={logo} alt="Devarchit Enterprises LLP" priority />
        </a>
        <nav className={`nav__links${open ? " is-open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--sm" onClick={close}>
            Get a Quote
          </a>
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
