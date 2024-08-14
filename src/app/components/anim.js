export const Information = [
  {
    Number: "01",
    Image: "Shoes",
    Year: "2020",
    Job: "Direction artistique",
    Where: "Baskets éco responsables",
    Client: "Ubac store",
    Color: "#b792a2",
    src: "https://cdn.sanity.io/images/zvxprgaj/production/3f5c4c6b0dd9c8baced3d27dd43a31f6f618f5ed-3600x1720.jpg?w=2028&h=1140&q=80&fit=crop&auto=format",
    scale: scaleX1,
  },
  {
    Number: "02",
    Image: "Shoes",
    Year: "2020",
    Job: "Direction artistique",
    Where: "Les portes du soleil",
    Client: "Avoriaz",
    Color: "#becbdb",
    src: "https://cdn.sanity.io/images/zvxprgaj/production/b7577dd97610ac59f5a792461ae8a6c6b56264a1-3600x1720.jpg?w=1280&h=720&q=80&fit=crop&auto=format",
    scale: scaleX2,
  },
  {
    Number: "03",
    Image: "Shoes",
    Year: "2023",
    Job: "Direction artistique",
    Where: "To the moon",
    Client: "Sanctuary",
    Color: "#7a8f7b",
    src: "https://cdn.sanity.io/images/zvxprgaj/production/724006a122cd59c8a0a8622305e029b82bc26b87-3600x2025.jpg?w=1280&h=720&q=80&fit=crop&rect=0,0,3600,2025&fp-x=0.5&fp-y=0.5&auto=format",
    scale: scaleX3,
  },
];

export const animation = {
  initial: { y: "100%" },
  enter: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.32, 1, 0.68, 1],
      delay: 0.03 * i,
    },
  }),
  exit: {
    y: "100%",
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const animation1 = {
  initial: { y: "100%" },
  enter: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.32, 1, 0.68, 1],
      delay: 0.9,
    },
  }),
  exit: {
    y: "100%",
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const animation2 = {
  initial: { y: "100%" },
  enter: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.32, 1, 0.68, 1],
      delay: 0.9,
    },
  }),
  exit: {
    y: "100%",
    transition: {
      duration: 1.1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};
