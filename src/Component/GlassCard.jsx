import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hover = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : {}
      }
      className={`
        relative rounded-3xl
        p-6 md:p-8

        /* TRUE GLASS */
        bg-white/40 dark:bg-white/5
        backdrop-blur-2xl

        /* SOFT BORDER */
        border border-white/30 dark:border-white/10

        /* DEPTH */
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]

        /* SMOOTHNESS */
        transition-all duration-500 ease-out

        ${className}
      `}
    >
      {/* subtle inner glow */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-3xl
          bg-gradient-to-br from-white/20 via-transparent to-transparent
          dark:from-white/5
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
