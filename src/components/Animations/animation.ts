export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 10, y: 0, transition: { duration: 2.0 } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
