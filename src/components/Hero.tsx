"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0, rotate: -2 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Button animation with scale and hover
  const buttonVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.15,
      rotate: 0,
      boxShadow: "0px 0px 20px hsl(142.1 76.2% 36.3% / 0.8)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    pulse: {
      
      transition: {
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Background gradient animation
  const backgroundVariants = {
    animate: {
      background: [
        "linear-gradient(to bottom, hsl(0 0% 100%), hsl(240 4.8% 95.9%))",
        "linear-gradient(to bottom, hsl(240 4.8% 95.9%), hsl(0 0% 100%))",
        "linear-gradient(to bottom, hsl(0 0% 100%), hsl(240 4.8% 95.9%))",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      className="Hero flex items-center justify-center px-4 py-32"
      animate="animate"
    >
      <motion.div
        className="flex w-full flex-col items-center justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Section */}
        <motion.h2
          className="text-2xl font-semibold text-muted-foreground sm:text-3xl"
          variants={itemVariants}
        >
          Save <span className="text-destructive">45% Off</span> Now
        </motion.h2>
        <motion.h1
          className="mt-6 bg-gradient-to-r from-primary to-destructive bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl md:text-8xl"
          variants={itemVariants}
        >
          Super Products Unleashed
        </motion.h1>
        <motion.p
          className="mt-8 max-w-md text-lg text-muted-foreground sm:text-xl"
          variants={itemVariants}
        >
          Grab premium deals today!
        </motion.p>
        <motion.div className="mt-12" variants={itemVariants}>
          <Link href="/products">
            <motion.button
              className="rounded-full bg-primary px-10 py-4 text-2xl font-semibold text-primary-foreground shadow-xl"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              animate="pulse"
            >
              Shop Now
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>

  );
}