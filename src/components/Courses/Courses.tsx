"use client";

import { useEffect, useState } from "react";
import CoursesDesktop from "../CoursesDesktop/CoursesDesktop";
import CoursesMobile from "../CoursesMobile/CoursesMobile";

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
