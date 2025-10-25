import { motion } from "framer-motion";
import { useState } from "react";

function TiltCard({ icon, text }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  let cardRef = null;

  const handleMouseMove = (e) => {
    const rect = cardRef.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15; // max 15deg tilt
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={(el) => (cardRef = el)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        perspective: 1000,
      }}
      whileHover={{ scale: 1.05, boxShadow: '0 15px 25px rgba(20,184,166,0.3)' }}
      className="flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-md transition-transform cursor-pointer"
    >
      <div className="text-teal-500 text-xl">{icon}</div>
      <p className="text-gray-900 dark:text-gray-200 font-medium">{text}</p>
    </motion.div>
  );
}

export default TiltCard;
