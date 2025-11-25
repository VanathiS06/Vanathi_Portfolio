"use client";

import React, { useRef, useEffect } from "react";
import styles from "./BackgroundAnimation.module.css";

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const lines = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 100 + Math.random() * 200,
      speed: 0.5 + Math.random(),
      angle: Math.random() * Math.PI * 2,
      opacity: 0.05 + Math.random() * 0.1,
    }));

    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        ctx.strokeStyle = `rgba(255,255,255,${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        if (
          line.x < -200 ||
          line.x > width + 200 ||
          line.y < -200 ||
          line.y > height + 200
        ) {
          line.x = Math.random() * width;
          line.y = Math.random() * height;
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default BackgroundAnimation;
