import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sobre</h1>
        <h2 className={styles.text}>A melhor faculdade de tecnologia</h2>
      </div>
    </section>
  );
}
