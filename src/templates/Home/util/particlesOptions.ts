export const particlesOptions = <any>{
  background: {
    color: {
      value: "#e",
    },
  },
  fpsLimit: 120,

  particles: {
    number: {
      value: 200,
      density: {
        enable: false,
      },
    },
    line_linked: {
      color: {
        value: "#222222",
      },
      enable: true,
      distance: 100,
      opacity: 0.4,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 0.6,
      straight: false,
    },
    opacity: {
      anim: {
        enable: true,
        opacity_min: 0.05,
        speed: 2,
        sync: false,
      },
      value: 0.4,
    },
  },
  detectRetina: true,
};
