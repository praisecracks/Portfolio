import React, { useEffect, useRef, useState } from "react";

const TimeOrb = () => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  // Update time every second
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours() % 12;

      const secondDeg = seconds * 6;
      const minuteDeg = minutes * 6 + seconds * 0.1;
      const hourDeg = hours * 30 + minutes * 0.5;

      if (hourRef.current) hourRef.current.style.transform = `rotate(${hourDeg}deg)`;
      if (minuteRef.current) minuteRef.current.style.transform = `rotate(${minuteDeg}deg)`;
      if (secondRef.current) secondRef.current.style.transform = `rotate(${secondDeg}deg)`;
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // 3D floating tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;

      setRotation({ x: y * 10, y: -x * 10, z: x * 3 });
      setTranslate({ x: x * 40, y: y * 40 });
    };

    const resetTilt = () => {
      setRotation({ x: 0, y: 0, z: 0 });
      setTranslate({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetTilt);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-0">
      <div
        className="relative w-[620px] h-[620px] sm:w-[780px] sm:h-[780px] rounded-full flex items-center justify-center animate-orbitRotate"
        style={{
          transform: `
            perspective(1000px)
            translateX(${translate.x}px)
            translateY(${translate.y}px)
            rotateY(${rotation.y}deg)
            rotateX(${rotation.x}deg)
            rotateZ(${rotation.z}deg)
          `,
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Outer energy field */}
        <div className="absolute w-full h-full rounded-full bg-[conic-gradient(from_0deg,rgba(45,212,191,0.05),transparent_30%,rgba(45,212,191,0.1),transparent_70%,rgba(45,212,191,0.05))] blur-[120px] animate-pulseGlow"></div>

        {/* Clock frame & tick marks */}
        <div className="absolute w-full h-full rounded-full border border-teal-400/30 shadow-[0_0_50px_#14b8a6aa] flex items-center justify-center">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-teal-300/50 origin-bottom"
              style={{
                width: i % 5 === 0 ? "3px" : "1.5px",
                height: i % 5 === 0 ? "20px" : "10px",
                borderRadius: "2px",
                transform: `rotate(${i * 6}deg) translateY(-375px)`,
                boxShadow: i % 5 === 0 ? "0 0 6px #14b8a6" : "0 0 2px #14b8a6",
              }}
            />
          ))}
        </div>

        {/* Hour hand */}
        <div
          ref={hourRef}
          className="absolute w-[6px] h-[160px] bg-teal-400 origin-bottom rounded-full shadow-[0_0_15px_#14b8a6] transition-transform duration-700 ease-in-out"
          style={{ bottom: "50%" }}
        ></div>

        {/* Minute hand */}
        <div
          ref={minuteRef}
          className="absolute w-[4px] h-[240px] bg-teal-300 origin-bottom rounded-full shadow-[0_0_12px_#14b8a6] transition-transform duration-500 ease-in-out"
          style={{ bottom: "50%" }}
        ></div>

        {/* Second hand */}
        <div
          ref={secondRef}
          className="absolute w-[2px] h-[290px] bg-cyan-400 origin-bottom rounded-full shadow-[0_0_15px_#14b8a6] transition-transform duration-300 ease-in-out"
          style={{ bottom: "50%" }}
        ></div>

        {/* Central pulse */}
        <div className="absolute w-8 h-8 rounded-full bg-teal-400 shadow-[0_0_50px_#14b8a6] blur-[2px] animate-centerPulse"></div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @keyframes orbitRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes centerPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.4); opacity: 1; }
        }
        .animate-pulseGlow {
          animation: pulseGlow 10s ease-in-out infinite;
        }
        .animate-orbitRotate {
          animation: orbitRotate 200s linear infinite;
        }
        .animate-centerPulse {
          animation: centerPulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TimeOrb;
