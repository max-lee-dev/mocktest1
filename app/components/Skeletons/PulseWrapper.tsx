import { motion } from "framer-motion";

export default function PulseWrapper({ children, className = "" }: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`${className} bg-gray-200`}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.97, 1.02, 0.97]
      }}
      transition={{
        duration: 0.2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
} 