import About from "@/components/About/About";
import Courses from "@/components/Courses/Courses";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Intro />
      <Courses />
    </main>
  );
}
