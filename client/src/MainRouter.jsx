import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./projects.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import NotFound from "./NotFound.jsx";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All pages render inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
