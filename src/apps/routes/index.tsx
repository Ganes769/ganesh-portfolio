import { Routes, Route } from "react-router-dom";
import Work from "@pages/work/Work";
import Skills from "@pages/skills/Skills";
import Education from "@pages/education/Education";
import Hobbies from "@pages/hobbies/Hobbies";
import Home from "@pages/home/Home";
import About from "@pages/about/About";
import Projects from "@pages/projects/Projects";

export default function NavRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/work" element={<Work />} />
      <Route path="/education" element={<Education />} />
      <Route path="/hobbies" element={<Hobbies />} />
    </Routes>
  );
}
