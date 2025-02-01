"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInViewProps {
  children: ReactNode;
  className?: string;
}

export function AnimateInView({ children, className = "" }: AnimateInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 