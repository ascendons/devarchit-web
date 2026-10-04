import Image from "next/image";
import type { CSSProperties } from "react";
import Nav from "@/components/Nav";
import HeroSlides from "@/components/HeroSlides";
import ScrollEffects from "@/components/ScrollEffects";
import IndustryIcon from "@/components/IndustryIcon";
import { HeroWaves, ContactWaves } from "@/components/Waves";
import { contacts, industries, marqueeItems, productCategories } from "@/lib/content";
import factory from "@/public/assets/factory.jpg";
import logoMark from "@/public/assets/logo-mark.png";
import logoLight from "@/public/assets/logo-light.png";

/** Sets a CSS custom property used for staggered animation delays. */
const delay = (name: "--d" | "--i", value: number) => ({ [name]: value }) as CSSProperties;

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Nav />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow load" style={delay("--d", 0)}>
                Industrial supply · Bengaluru, India
              </p>
              <h1 className="hero__title">
                <span className="line">
                  <span className="load" style={delay("--d", 1)}>
                    Industrial &amp;
                  </span>
                </span>
                <span className="line">
                  <span className="load" style={delay("--d", 2)}>
                    Engineering
                  </span>
                </span>
                <span className="line">
                  <span className="load" style={delay("--d", 3)}>
                    Supply <span className="grad">Partner.</span>
                  </span>
                </span>
              </h1>
              <p className="hero__lead load" style={delay("--d", 4)}>
                Comprehensive product distribution for HVAC, Oil &amp; Gas, Metals &amp; Mining, Water, and
                Infrastructure projects.
              </p>
              <div className="hero__cta load" style={delay("--d", 5)}>
                <a href="#contact" className="btn">
                  Send an Inquiry <span aria-hidden="true">→</span>
                </a>
                <a href="#products" className="btn btn--ghost">
                  Explore Products
                </a>
              </div>
            </div>
            <HeroSlides />
          </div>

          <HeroWaves />
          <a href="#about" className="scroll-cue" aria-label="Scroll down">
            <span />
          </a>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="marquee__item">
                <span>{item}</span>
                <i />
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="container about__grid">
            <div className="about__media reveal" data-reveal="left">
              <div className="frame">
                <Image
                  src={factory}
                  alt="Heavy industrial machinery on a plant floor"
                  className="parallax"
                  data-speed="0.08"
                  sizes="(max-width: 960px) 100vw, 50vw"
                  placeholder="blur"
                />
              </div>
              <div className="badge">
                <Image src={logoMark} alt="" />
                <span>
                  Multi-sector
                  <br />
                  supply expertise
                </span>
              </div>
            </div>
            <div className="about__copy">
              <p className="eyebrow reveal">About Devarchit Enterprises LLP</p>
              <h2 className="h2 reveal">Trusted multi-sector industrial supplier.</h2>
              <p className="body reveal">
                A well-established industry presence delivering proven supply capabilities and deep domain expertise
                across core engineering sectors.
              </p>
              <ul className="pills reveal">
                <li>Proven supply capability</li>
                <li>Deep domain expertise</li>
                <li>Certified products</li>
              </ul>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section industries" id="industries">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow reveal">Core Industries Served</p>
              <h2 className="h2 reveal">Built for the sectors that keep things running.</h2>
            </div>
            <div className="ind-grid">
              {industries.map((ind, i) => (
                <article key={ind.name} className="ind reveal" style={delay("--i", i)}>
                  <span className="ind__num">{String(i + 1).padStart(2, "0")}</span>
                  <IndustryIcon name={ind.icon} />
                  <h3>{ind.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="section products" id="products">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow reveal">Product Portfolio</p>
              <h2 className="h2 reveal">Everything a project needs, from one partner.</h2>
            </div>

            {productCategories.map((cat, idx) => {
              const reversed = idx % 2 === 1;
              return (
                <div key={cat.title} className={`cat${reversed ? " cat--rev" : ""}`}>
                  <div className="cat__media reveal" data-reveal={reversed ? "right" : "left"}>
                    <div className="frame">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        className="parallax"
                        data-speed="0.1"
                        sizes="(max-width: 960px) 100vw, 50vw"
                        placeholder="blur"
                      />
                    </div>
                    <span className="cat__tag">
                      {String(idx + 1).padStart(2, "0")} / {String(productCategories.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="cat__body">
                    <h3 className="h3 reveal">{cat.title}</h3>
                    {cat.items.map((item, i) => (
                      <div key={item.name} className="item reveal" style={delay("--i", i + 1)}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <ContactWaves />
          <div className="container contact__inner">
            <p className="eyebrow eyebrow--light reveal">Let’s work together</p>
            <h2 className="h2 h2--light reveal">Looking forward to a long-term business association.</h2>
            <p className="body body--light reveal">
              Send us your procurement inquiries for industrial valves, electrical goods, piping, and sanitary
              solutions.
            </p>
            <div className="contact__cards">
              {contacts.map((c, i) => (
                <a
                  key={c.label}
                  className="ccard reveal"
                  style={delay("--i", i)}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="ccard__label">{c.label}</span>
                  <span className="ccard__value">{c.value}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <Image src={logoLight} alt="Devarchit Enterprises LLP" className="footer__logo" />
          <p>© {new Date().getFullYear()} Devarchit Enterprises LLP. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
