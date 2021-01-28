import React, { useRef, useEffect, useState } from "react";
import debounce from "../../lib/utils/debounce";

const Canvas = (props) => {
  const canvasRef = useRef();
  let canvas = null;
  let ctx = null;
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  const colorArray = ["#A1FCDF", "#7FD8BE", "#FCEFEF", "#FCD29F", "#FCAB64"];

  function Circle(x, y, dx, dy, radius, ctx) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;

    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; // accesses colorArray and randomizes circle color

    this.draw = function (ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      this.draw(ctx); // calls draw function
    };
  }

  // Store circles into an array
  let circleArray = [];

  function init(ctx) {
    let multiplier = 650;
    circleArray = [];

    // create for loop for multiple circles with random location/velocties
    for (let i = 0; i < multiplier; i++) {
      let radius = Math.random() * 3 + 1; // minimum radius of 1 due to + 1
      let x = Math.random() * (width - radius * 2) + radius; // randomize starting pos
      let y = Math.random() * (height - radius * 2) + radius;

      let dx = Math.random() - 0.5 * 0.5; // randomize velocity (increase speed by multiplying value)
      let dy = Math.random() - 0.5 * 0.5;

      circleArray.push(new Circle(x, y, dx, dy, radius, ctx));
    }
  }

  // Animation function
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height); // clears canvas so circle does not repeat

    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update(); // For loop will iterate the 100 circles and run the update() for each individual circles.
    }
  }

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", debounce(handleResize, 250));
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    let frameCount = 0;
    let animationFrameId;
    //Our draw came here
    const render = (ctx) => {
      canvas.height = height;
      canvas.width = width;
      ctx.clearRect(0, 0, width, height);
      frameCount++;
      init(ctx);
      animate();
    };
    render(ctx);
  }, [animate]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
