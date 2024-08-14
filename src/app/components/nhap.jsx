const Title = useRef([]);
Title.current = [];
const myTexts = useRef([]);
myTexts.current = [];
const pages = useRef([]);

useLayoutEffect(() => {
  Title.current.forEach((char, i) => {
    char.setAttribute("data-index", i);
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
          trigger: pages,
          start: "top 10%",
          end: "end 10%",
          markers: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // const boxes = gsap.utils.toArray(".box");
  // boxes.forEach((box) => {
  //   gsap.fromTo(
  //     box,
  //     {
  //       y: "100%",
  //     },
  //     {
  //       y: 0,
  //       duration: 1,
  //       delay: 0.09,
  //       scrollTrigger: {
  //         trigger: box,
  //         start: "top 40%",
  //         end: "top 60%",
  //         scrub: true,
  //         markers: true,
  //       },
  //     }
  //   );
  // });

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
          trigger: pages,
          start: "top 40%",
          end: "top 60%",
          markers: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}, []);
