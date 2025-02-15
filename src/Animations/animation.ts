export const CreateAnimation = (
  direction: string,
  duration: number,
) => {
  const x = direction === "right" ? 50 : direction === "left" ? -50 : 0;
  const y = direction === "up" ? 50 : direction === "down" ? -50 : 0;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: "easeOut" },
    },
  };
};


export const staggerContainer = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});