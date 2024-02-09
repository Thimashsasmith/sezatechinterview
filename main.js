let circle = document.querySelector(".circle");
let frames = document.querySelectorAll(".frame");
//Lerp (Linear intERPolation)
const lerp = (x, y, a) => x * (1 - a) + y * a;

//circle move with cursor
window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY
  });
});

frames.forEach((frame) => {
  //frame mousemove
  frame.addEventListener("mousemove", function (dets) {
    let dims = frame.getBoundingClientRect();
    //console.log(dims);

    let xstart = dims.x;
    let xend = dims.x + dims.width;

    let zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    //console.log(lerp(-25, 25, zeroOne));

    gsap.to(circle, {
      scale: 6
    });

    gsap.to(frame.children, {
      color: "#fff",
      duration: 0.4,
      y: "-5vw"
    });

    gsap.to(frame, {
      x: lerp(-25, 25, zeroOne)
    });
  });

  //frame mouseleave
  frame.addEventListener("mouseleave", function (dets) {
    gsap.to(circle, {
      scale: 1
    });

    gsap.to(frame.children, {
      color: "#fff",
      duration: 0.4,
      y: 0
    });

    gsap.to(frame, {
      x: 0
    });
  });
});
