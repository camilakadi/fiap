"use client";

import { useState } from "react";
import styles from "./CoursesMobile.module.scss";

const coursesData = {
  tecnologia: [
    {
      title: "Big Data Ecosystem",
      mode: "remoto • live",
    },
    {
      title: "Creating Dashboards for BI",
      mode: "remoto • live + multimídia",
    },
    {
      title: "Big Data Science • Machine Learning & Data Mining",
      mode: "remoto • live",
    },
    {
      title: "Storytelling",
      mode: "remoto • live + multimídia",
    },
  ],
  inovacao: [
    {
      title: "UX",
      mode: "remoto • live",
    },
    {
      title: "UX Whiting",
      mode: "remoto",
    },
    {
      title: "Chatbots",
      mode: "remoto • live + multimídia",
    },
  ],
  negocios: [
    {
      title: "Agile Culture",
      mode: "live",
    },
    {
      title: "DPO Data Protection Officer",
      mode: "remoto • live",
    },
    {
      title: "IT Business Partner",
      mode: "remoto • live + multimídia",
    },
    {
      title: "Perícia Forense Computacional",
      mode: "remoto • live + multimídia",
    },
    {
      title: "Growth Hacking",
      mode: "remoto",
    },
  ],
};

export default function CoursesMobile() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const categories = [
    { key: "tecnologia" as const, label: "Tecnologia" },
    { key: "inovacao" as const, label: "Inovação" },
    { key: "negocios" as const, label: "Negócios" },
  ];

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryKey)
        ? prev.filter((key) => key !== categoryKey)
        : [...prev, categoryKey]
    );
  };

  return (
    <section className={styles.courses}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Cursos</h1>
          <h2 className={styles.subtitle}>Cursos de curta duração</h2>
        </div>

        <div className={styles.accordion}>
          {categories.map((category) => {
            const isExpanded = expandedCategories.includes(category.key);
            const courses = coursesData[category.key];

            return (
              <div key={category.key} className={styles.accordionItem}>
                <div
                  className={`${styles.accordionHeader} ${
                    isExpanded ? styles.expanded : ""
                  }`}
                  onClick={() => toggleCategory(category.key)}
                >
                  <span className={styles.categoryLabel}>{category.label}</span>

                  <span className={styles.accordionIcon}>
                    {isExpanded ? "−" : "+"}
                  </span>
                </div>

                {isExpanded && (
                  <div className={styles.accordionContent}>
                    <div className={styles.coursesList}>
                      {courses.map((course, index) => (
                        <div key={index} className={styles.courseItem}>
                          <span className={styles.courseMode}>
                            {course.mode}
                          </span>

                          <span className={styles.courseTitle}>
                            {course.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
