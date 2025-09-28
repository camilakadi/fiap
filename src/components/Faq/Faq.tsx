"use client";

import { useState } from "react";
import styles from "./Faq.module.scss";

const faqData = [
  {
    question: "QUANDO POSSO ME MATRICULAR?",
    answer:
      "Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever.",
  },
  {
    question: "POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?",
    answer:
      "Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.",
  },
  {
    question: "QUAIS OS PRÉ-REQUISITOS?",
    answer:
      "Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT.",
  },
  {
    question: "QUAL A DURAÇÃO DOS CURSOS?",
    answer: "De 6 a 42 horas.",
  },
  {
    question: "PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?",
    answer:
      "Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações.",
  },
  {
    question: "VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?",
    answer:
      "Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma.",
  },
];

export default function Faq() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>FAQ</h1>
          <h2 className={styles.subtitle}>Dúvidas Frequentes</h2>
        </div>

        <div className={styles.faqGrid}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeItem === index ? styles.active : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className={styles.risk}></div>
              <div className={styles.question}>{item.question}</div>
              <div className={styles.answer}>{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
