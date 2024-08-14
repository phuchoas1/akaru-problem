"use client";
import Homepage from "./components/Homepage";
import Lists from "./components/Lists";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Projects from "./components/Projects";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  const Title = useRef([]);
  Title.current = [];
  const myTexts = useRef([]);
  myTexts.current = [];
  const pages = useRef([]);
  pages.current = [];
  gsap.registerPlugin(ScrollTrigger, CustomEase);
  useEffect(() => {
    Title.current.forEach((char, i) => {
      gsap.fromTo(
        char,
        { y: "100%" },
        {
          y: 0,
          duration: 1,
          delay: 0.09 * i,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.126,0.382 0.078,0.818 0.291,0.924 0.444,1 0.818,1.001 1,1"
          ),
          scrollTrigger: {
            trigger: char,
            start: "top 85%",
            end: "bottom 20%",
            markers: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    myTexts.current.forEach((text, i) => {
      text.setAttribute("data-index", i);
      gsap.fromTo(
        text,
        { y: "100%" },
        {
          y: 0,
          duration: 1,
          delay: 1,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.126,0.382 0.161,0.8 0.343,0.873 0.579,0.967 0.818,1.001 1,1 "
          ),
          scrollTrigger: {
            trigger: text,
            start: "top 60%",
            end: "bottom 40%",
            markers: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <main>
      <section ref={targetRef} className="relative h-[400vh]">
        <div className="sticky top-0 overflow-hidden">
          <motion.div style={{ x }} className="flex shrink-0 items-center">
            <Homepage />
            <Lists Title={Title} myTexts={myTexts} pages={pages} />
          </motion.div>
        </div>
      </section>
      <Projects />
    </main>
  );
}
