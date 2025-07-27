import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#000000" },
        },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          move: {
            direction: "top",
            enable: true,
            outModes: { default: "out" },
            speed: 1,
          },
          number: { value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
