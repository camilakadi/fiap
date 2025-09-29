"use client";

import { useEffect, useState } from "react";
import CoursesDesktop from "../CoursesDesktop/CoursesDesktop";
import CoursesMobile from "../CoursesMobile/CoursesMobile";

export const coursesData = {
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

export const categoriesCourses = [
  { key: "tecnologia" as const, label: "Tecnologia" },
  { key: "inovacao" as const, label: "Inovação" },
  { key: "negocios" as const, label: "Negócios" },
];

export default function Courses() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return <>{isMobile ? <CoursesMobile /> : <CoursesDesktop />}</>;
}
