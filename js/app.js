// 3D Scroll

let zSpacing = -1000,
  lastPos = zSpacing / 5,
  $frames = document.getElementsByClassName("frame"),
  frames = Array.from($frames),
  zVals = [];

const li = document.getElementsByClassName("links");
const sec = document.getSelection("section");
window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastPos - top;
  lastPos = top;
  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5.5;
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`,
      opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
    if (zVals[0] <= 120 && zVals[0] <= 689) {
      for (let item of li) {
        item.classList.remove("active");
      }
      li[0].classList.add("active");
    } else if (zVals[0] >= 690 && zVals[0] <= 1656) {
      for (let item of li) {
        item.classList.remove("active");
      }
      li[1].classList.add("active");
    } else if (zVals[0] >= 1656 && zVals[0] <= 2613) {
      for (let item of li) {
        item.classList.remove("active");
      }
      li[2].classList.add("active");
    }
    else if (zVals[0] >= 2614 && zVals[0] <= 3120) {
      for (let item of li) {
        item.classList.remove("active");
      }
      li[3].classList.add("active");
    }
    else if (zVals[0] >= 3614 && zVals[0] <= 4120) {
      for (let item of li) {
        item.classList.remove("active");
      }
      li[4].classList.add("active");
    }
    else if (zVals[0] >= 4656 && zVals[0] <= 5120) {
      for (let item of li) {
        item.classList.remove("active");
      }
      li[5].classList.add("active");
    }
    else if (zVals[0] >= 6656 && zVals[0] <= 8120) {
      for (let item of li) {
        item.classList.remove("active");
      }
      li[6].classList.add("active");
    }
  });

  // while(--len && window.screenTop + 97 <sec[len].offsetTop){
  //   li.forEach(ltx => ltx.classList.remove("active"));
  //
  //   console.log(le[len])
  // }
};

window.scrollTo(0, 1);

function activeMenu() {}
activeMenu();

window.addEventListener("scroll", activeMenu);

// Audio

let soundButton = document.querySelector(".soundbutton"),
  audio = document.querySelector(".audio");

soundButton.addEventListener("click", (e) => {
  soundButton.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  soundButton.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};
// particles js
particlesJS("particles-js", {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: "#889bf5" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 100, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
