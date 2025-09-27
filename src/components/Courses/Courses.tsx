"use client";

import { useState } from "react";
import styles from "./Courses.module.scss";

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

export default function Courses() {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof coursesData>("tecnologia");

  const categories = [
    { key: "tecnologia" as const, label: "Tecnologia" },
    { key: "inovacao" as const, label: "Inovação" },
    { key: "negocios" as const, label: "Negócios" },
  ];

  const currentCourses = coursesData[activeCategory];
  const activeCategoryLabel = categories.find(
    (cat) => cat.key === activeCategory
  )?.label;

  return (
    <section className={styles.courses}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>Cursos</h1>
            <h2 className={styles.subtitle}>Cursos de curta duração</h2>
          </div>

          <div className={styles.categories}>
            {categories.map((category) => (
              <a
                key={category.key}
                href="#"
                className={`${styles.categoryLink} ${
                  activeCategory === category.key ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(category.key);
                }}
              >
                {category.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.category}>
          <div className={styles.categoryTitle}>
            <h3>{activeCategoryLabel}</h3>
          </div>

          <div className={styles.coursesList}>
            {currentCourses.map((course, index) => (
              <div key={index} className={styles.courseItem}>
                <span className={styles.courseTitle}>
                  {course.title}{" "}
                  <span className={styles.courseMode}>{course.mode}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
