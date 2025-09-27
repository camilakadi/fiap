import Image from "next/image";
import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introText}>
        <div>CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</div>
        <div>TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</div>
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
