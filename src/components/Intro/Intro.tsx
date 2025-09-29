"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./Intro.module.scss";

export default function Intro() {
  const marquee01Ref = useRef<HTMLDivElement>(null);
  const marquee02Ref = useRef<HTMLDivElement>(null);
  const marquee03Ref = useRef<HTMLDivElement>(null);
  const marquee04Ref = useRef<HTMLDivElement>(null);
  const introBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (marquee01Ref.current) {
      gsap.set(marquee01Ref.current, { x: "0%" });
      gsap.to(marquee01Ref.current, {
        x: "-50%",
        duration: 10,
        ease: "none",
        repeat: -1,
      });
    }

    if (marquee02Ref.current) {
      gsap.set(marquee02Ref.current, { x: "-50%" });
      gsap.to(marquee02Ref.current, {
        x: "0%",
        duration: 10,
        ease: "none",
        repeat: -1,
      });
    }

    if (introBannerRef.current) {
      const getResponsiveHeight = () => {
        const width = window.innerWidth;
        if (width <= 480) return "40vh";
        if (width <= 768) return "50vh";
        if (width <= 1200) return "60vh";
        if (width <= 1600) return "70vh";
        return "804px";
      };

      gsap.set(introBannerRef.current, { height: 0 });
      gsap.to(introBannerRef.current, {
        height: getResponsiveHeight(),
        scrollTrigger: {
          trigger: "#marquee03",
          start: "top bottom",
          scrub: false,
        },
        duration: 1,
        ease: "power2.out",
      });

      const handleResize = () => {
        gsap.set(introBannerRef.current, { height: getResponsiveHeight() });
      };

      window.addEventListener("resize", handleResize);
    }

    if (marquee03Ref.current) {
      gsap.set(marquee03Ref.current, { x: "0%" });

      gsap.to(marquee03Ref.current, {
        x: "-75%",
        scrollTrigger: {
          trigger: "#marquee03",
          start: "top-=100 bottom",
          end: "bottom+=100 top",
          scrub: true,
        },
        ease: "power1.out",
      });
    }

    if (marquee04Ref.current) {
      gsap.set(marquee04Ref.current, { x: "-75%" });
      gsap.to(marquee04Ref.current, {
        x: "0%",
        scrollTrigger: {
          trigger: "#marquee04",
          start: "top-=100 bottom",
          end: "bottom+=100 top",
          scrub: true,
        },
        ease: "power1.out",
      });
    }
  }, []);

  return (
    <section className={styles.intro}>
      <div className={styles.marquees}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack} ref={marquee01Ref}>
            <span className={styles.marqueeContent}>
              CURSOS E IMERSÕES. &nbsp;
            </span>

            <span className={styles.marqueeContent}>
              UMA NOVA CULTURA DE MERCADO. &nbsp;
            </span>

            <span className={styles.marqueeContent}>
              CURSOS E IMERSÕES. &nbsp;
            </span>

            <span className={styles.marqueeContent}>
              UMA NOVA CULTURA DE MERCADO. &nbsp;
            </span>
          </div>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack} ref={marquee02Ref}>
            <span className={styles.marqueeContent}>
              TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. &nbsp;
            </span>

            <span className={styles.marqueeContent}>
              PRESENTE E FUTURO. &nbsp;
            </span>

            <span className={styles.marqueeContent}>
              TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. &nbsp;
            </span>

            <span className={styles.marqueeContent}>
              PRESENTE E FUTURO. &nbsp;
            </span>
          </div>
        </div>
      </div>

      <div className={styles.introBanner}>
        <div className={styles.introBannerContent} ref={introBannerRef}>
          <div className={styles.introBannerImageContainer}>
            <picture>
              <img
                src="/imgs/intro.png"
                alt="Menino escutando música e pensando"
                width={1495}
                className={styles.introBannerImage}
              />
            </picture>
          </div>
        </div>
      </div>

      <div className={styles.marquees02}>
        <div className={styles.marqueeContainer02}>
          <div
            id="marquee03"
            className={styles.marqueeTrack02}
            ref={marquee03Ref}
          >
            <div className={styles.marqueeContent02}>Skills</div>

            <div className={styles.circle}></div>

            <div className={styles.marqueeContent02}>Conhecimento</div>

            <div className={styles.circle}></div>

            <div className={styles.marqueeContent02}>Skills</div>

            <div className={styles.circle}></div>

            <div className={styles.marqueeContent02}>Conhecimento</div>

            <div className={styles.circle}></div>

            <div className={styles.marqueeContent02}>Skills</div>

            <div className={styles.circle}></div>

            <div className={styles.marqueeContent02}>Conhecimento</div>
          </div>
        </div>

        <div className={styles.marqueeContainer02}>
          <div
            id="marquee04"
            className={styles.marqueeTrack02}
            ref={marquee04Ref}
          >
            <div
              className={`${styles.marqueeContent02} ${styles.marqueeContent02Italic}`}
            >
              Muito além dos tutoriais
            </div>

            <div className={styles.circle}></div>

            <div
              className={`${styles.marqueeContent02} ${styles.marqueeContent02Italic}`}
            >
              Muito além dos tutoriais
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
