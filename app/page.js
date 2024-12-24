import Image from "next/image";

import Testimonial1 from "./assets/testimonial1.jpeg";
import Testimonial2 from "./assets/testimonial2.jpeg";
import Testimonial3 from "./assets/testimonial3.jpeg";

import Hero from "./hero";
import { OurTeam, AboutUs } from "./aboutus";
import Courses from "./courses";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurTeam />
      <Courses />
      <Footer />
    </div >
  );
}
