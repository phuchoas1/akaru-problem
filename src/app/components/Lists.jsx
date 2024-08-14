import React, { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function Lists() {
  const Title = useRef([]);
  Title.current = [];
  const myTexts = useRef([]);
  myTexts.current = [];
  const pages = useRef([]);
  pages.current = [];

  useLayoutEffect(() => {
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
            trigger: pages.current,
            start: "top 40%",
            end: "bottom 30%",
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
            trigger: pages.current,
            start: "top 40%",
            end: "bottom 30%",
            markers: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const X2 = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const X3 = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  const Information = [
    {
      index: "1",
      Number: "01",
      Image: "Shoes",
      Year: "2020",
      Job: "Direction artistique",
      Where: "Baskets éco responsables",
      Client: "Ubac store",
      Color: "#b792a2",
      src: "https://cdn.sanity.io/images/zvxprgaj/production/3f5c4c6b0dd9c8baced3d27dd43a31f6f618f5ed-3600x1720.jpg?w=2028&h=1140&q=80&fit=crop&auto=format",
    },
    {
      index: "2",
      Number: "02",
      Image: "Shoes",
      Year: "2020",
      Job: "Direction artistique",
      Where: "Les portes du soleil",
      Client: "Avoriaz",
      Color: "#becbdb",
      src: "https://cdn.sanity.io/images/zvxprgaj/production/b7577dd97610ac59f5a792461ae8a6c6b56264a1-3600x1720.jpg?w=1280&h=720&q=80&fit=crop&auto=format",
    },
    {
      index: "3",
      Number: "03",
      Image: "Shoes",
      Year: "2023",
      Job: "Direction artistique",
      Where: "To the moon",
      Client: "Sanctuary",
      Color: "#7a8f7b",
      src: "https://cdn.sanity.io/images/zvxprgaj/production/724006a122cd59c8a0a8622305e029b82bc26b87-3600x2025.jpg?w=1280&h=720&q=80&fit=crop&rect=0,0,3600,2025&fp-x=0.5&fp-y=0.5&auto=format",
    },
  ];

  return (
    <>
      {Information.map((info, x, index) => {
        return (
          <div
            // ref={(el) => (pages.current[index] = el)}
            // ref={(el) => pages.current.push(el)}
            // ref={pages}
            key={`d_${index}`}
            className={`shrink-0 bg-[${info.Color}] w-3/4 h-screen origin-bottom-left`} //flex-shrink-0 or shrink-0 !!important
            style={{ top: -info.index * 50 }}
          >
            <div
              style={{
                backgroundImage: `url(${info.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-1/2"
            />
            <div
              ref={(el) => pages.current.push(el)}
              className="relative w-full h-1/2 p-[1rem]"
            >
              <div className="absolute w-full h-full flex justify-center place-items-center">
                <a
                  id="Title"
                  className="relative block overflow-hidden whitespace-nowrap"
                >
                  {info.Client.split("").map((divide, index) => (
                    <span
                      // ref={Title}
                      ref={(el) => myTexts.current.push(el)}
                      // ref={(el) => (Title.current[index] = el)}
                      key={index}
                      className="inline-block text-[9.6rem] tracking-[-0.02rem] antialiased font-[Alliance]"
                    >
                      {divide}
                    </span>
                  ))}
                </a>
              </div>
              <div className="flex justify-between">
                <a className="overflow-hidden">
                  <span
                    id="AppYear"
                    // ref={myTexts}
                    ref={(el) => myTexts.current.push(el)}
                    // ref={(el) => (myTexts.current[index] = el)}
                    className="box inline-block rounded-[3rem] shadow-outline-AppYear px-[1.5rem] py-[0.5rem] font-[Alliance] font-semibold text-xl"
                  >
                    {info.Year}
                  </span>
                </a>
                <a className="overflow-hidden flex self-center flex-row-reverse basis-[50%]">
                  <span
                    id="Job"
                    // ref={myTexts}
                    ref={(el) => myTexts.current.push(el)}
                    // ref={(el) => (myTexts.current[index] = el)}
                    className="box tracking-tighter font-[Alliance] uppercase text-[0.9rem]"
                  >
                    {info.Job}
                  </span>
                </a>
                <a className="overflow-hidden flex self-center ">
                  <span
                    id="Where"
                    // ref={myTexts}
                    ref={(el) => myTexts.current.push(el)}
                    // ref={(el) => (myTexts.current[index] = el)}
                    className="box self-center tracking-tighter font-[Alliance] uppercase text-[0.9rem]"
                  >
                    {info.Where}
                  </span>
                </a>
              </div>
              <a className="overflow-hidden">
                <span
                  id="Where"
                  // ref={myTexts}
                  ref={(el) => myTexts.current.push(el)}
                  // ref={(el) => (myTexts.current[index] = el)}
                  className="text absolute bottom-0 p-2"
                >
                  {info.Number}
                </span>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

// export function Title({ info }) {
//   const container = useRef(null);
//   const isInView = useInView(container, {
//     threshold: 0.5,
//     rootMargin: "10px",
//   });

//   return (
//     <a
//       ref={container}
//       className="relative block overflow-hidden whitespace-nowrap"
//     >
//       {info.Client.split("").map((divide, index) => (
//         <motion.span
//           key={index}
//           custom={index}
//           variants={animation}
//           initial="initial"
//           animate={isInView ? "enter" : "exit"}
//           viewport={{ amount: 0.8 }}
//           className="inline-block text-[9.6rem] tracking-[-0.02rem] antialiased font-[Alliance]"
//         >
//           {divide}
//         </motion.span>
//       ))}
//     </a>
//   );
// }

// export function Year({ info }) {
//   const year = useRef(null);
//   const isInView = useInView(year, {
//     threshold: 1,
//     rootMargin: "10px",
//   });

//   return (
//     <a ref={year} className="overflow-hidden">
//       <motion.span
//         variants={animation1}
//         initial="initial"
//         animate={isInView ? "enter" : "exit"}
//         id="AppYear"
//         className="inline-block rounded-[3rem] shadow-outline-AppYear px-[1.5rem] py-[0.5rem] font-[Alliance] font-semibold text-xl"
//       >
//         {info.Year}
//       </motion.span>
//     </a>
//   );
// }

// export function Job({ info }) {
//   const job = useRef(null);
//   const isInView = useInView(job, {
//     threshold: 1,
//     rootMargin: "10px",
//   });

//   return (
//     <a
//       ref={job}
//       className="overflow-hidden flex self-center flex-row-reverse basis-[50%]"
//     >
//       <motion.span
//         id="Job"
//         variants={animation2}
//         initial="initial"
//         animate={isInView ? "enter" : "exit"}
//         className="tracking-tighter font-[Alliance] uppercase text-[0.9rem]"
//       >
//         {info.Job}
//       </motion.span>
//     </a>
//   );
// }

// export function Where({ info }) {
//   const Where = useRef(null);
//   const isInView = useInView(Where, {
//     threshold: 1,
//     rootMargin: "10px",
//   });

//   return (
//     <a ref={Where} className="overflow-hidden flex self-center ">
//       <motion.span
//         variants={animation1}
//         initial="initial"
//         animate={isInView ? "enter" : "exit"}
//         id="Where"
//         className="self-center tracking-tighter font-[Alliance] uppercase text-[0.9rem]"
//       >
//         {info.Where}
//       </motion.span>
//     </a>
//   );
// }

// export function Number({ info }) {
//   const num = useRef(null);
//   const isInView = useInView(num, {
//     threshold: 1,
//     rootMargin: "10px",
//   });

//   return (
//     <a ref={num} className="overflow-hidden">
//       <motion.span
//         variants={animation2}
//         initial="initial"
//         animate={isInView ? "enter" : "exit"}
//         id="Where"
//         className="absolute bottom-0 p-2"
//       >
//         {info.Number}
//       </motion.span>
//     </a>
//   );
// }
