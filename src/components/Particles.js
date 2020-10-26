import React from "react";
import Particles from "react-particles-js";

const MultipleImageParticles = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: { enable: false },
          move: {
            speed: 1,
            out_mode: "out",
          },
          shape: {
            type: ["image", "circle"],
            image: [
              {
                src: "/favicon.ico",
                height: 20,
                width: 23,
              },
              {
                src: "/k8s.2d579d24.svg",
                height: 20,
                width: 20,
              },
            ],
          },
          color: { value: "#CCC" },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
      }}
    />
  );
};

export default MultipleImageParticles;
