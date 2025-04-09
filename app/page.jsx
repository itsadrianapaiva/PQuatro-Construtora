"use client";
import { useEffect, useState } from "react";

//components
import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(headerActive);

  return (
    <div>
      <Topbar />
      {/* static header */}
      <div className="relative z-10">
        <Header />
      </div>
      {/* animated header */}
      <div
        className={`fixed left-0 top-0 z-50 w-full transition-transform duration-500 ${headerActive ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Header />
      </div>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
