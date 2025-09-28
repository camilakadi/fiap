"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Intro.module.scss";

export default function Intro() {
  const marquee01Ref = useRef<HTMLDivElement>(null);
  const marquee02Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

      <div className={styles.banner}>
        <Image
          src="/imgs/intro.png"
          alt="Menino escutando música e pensando"
          width={1495}
          height={804}
          priority
          className={styles.imageBanner}
        />
      </div>

      <div className={styles.carouselTextoCima}>
        <Image
          src="/imgs/skills.png"
          alt="Skills"
          width={500}
          height={121}
          priority
          className={styles.carouselTextoCimaSkills}
        />

        <Image
          src="/imgs/circulo.png"
          alt="Círculo"
          width={38}
          height={38}
          priority
          className={styles.carouselTextoCimaCirculo}
        />

        <Image
          src="/imgs/conhecimento.png"
          alt="Conhecimento"
          width={1261}
          height={121}
          priority
          className={styles.carouselTextoCimaConhecimento}
        />
      </div>

      <div className={styles.carouselTextoBaixo}>
        <Image
          src="/imgs/muito-alem-dos-tutoriais.png"
          alt="Muito além dos tutoriais"
          width={1940}
          height={121}
          priority
          className={styles.carouselTextoBaixoSkills}
        />

        <Image
          src="/imgs/circulo.png"
          alt="Círculo"
          width={38}
          height={38}
          priority
          className={styles.carouselTextoBaixoCirculo}
        />
      </div>
    </section>
  );
}
