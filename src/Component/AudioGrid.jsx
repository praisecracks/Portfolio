import { motion } from "framer-motion";

const bars = Array.from({ length: 24 });

const AudioGrid = () => {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-[6px] pointer-events-none">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-[4px] rounded-full
            bg-gradient-to-t
            from-teal-400 to-cyan-300
            dark:from-teal-500 dark:to-cyan-400
            opacity-30 dark:opacity-40"
          animate={{
            height: ["20%", "60%", "35%", "80%", "30%"],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AudioGrid;
