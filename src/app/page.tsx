import About from "@/components/About/About";
import Courses from "@/components/Courses/Courses";
import Faq from "@/components/Faq/Faq";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Intro />
      <Courses />
      <Faq />
    </main>
  );
}
