import About from "@/components/About/About";
import Courses from "@/components/Courses/Courses";
import Faq from "@/components/Faq/Faq";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Water from "@/components/Water/Water";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Intro />
      <Water />
      <Courses />
      <Faq />
    </main>
  );
}
