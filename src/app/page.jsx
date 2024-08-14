"use client";
import Homepage from "./components/Homepage";
import Lists from "./components/Lists";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Projects from "./components/Projects";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <main>
      <section ref={targetRef} className="relative h-[400vh]">
        <div className="sticky top-0 overflow-hidden">
          {/* <motion.div> */}
          <motion.div style={{ x }} className="flex shrink-0 items-center">
            <Homepage />
            <Lists />
          </motion.div>
        </div>
      </section>
      <Projects />
    </main>
  );
}
