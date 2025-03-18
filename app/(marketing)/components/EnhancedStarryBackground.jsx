"use client";
import React, { useEffect, useRef } from "react";

const EnhancedStarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star properties
    const stars = [];
    const shootingStars = [];
    const starCount = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000
    );

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * 0.03 + 0.01,
        pulseFactor: 0,
      });
    }

    // Initialize a few special points with dotted lines
    const specialPoints = [
      { x: canvas.width * 0.2, y: canvas.height * 0.2 },
      { x: canvas.width * 0.35, y: canvas.height * 0.25 },
      { x: canvas.width * 0.65, y: canvas.height * 0.15 },
      { x: canvas.width * 0.8, y: canvas.height * 0.3 },
      { x: canvas.width * 0.2, y: canvas.height * 0.7 },
      { x: canvas.width * 0.85, y: canvas.height * 0.75 },
    ];

    // Occasionally create a shooting star
    const createShootingStar = () => {
      const chance = Math.random();
      if (chance < 0.01 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          len: Math.random() * 80 + 40,
          speed: Math.random() * 10 + 10,
          angle: Math.PI / 4 + (Math.random() * Math.PI) / 8,
          opacity: 1,
        });
      }
    };

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw regular stars
      stars.forEach((star) => {
        star.pulseFactor += star.pulse;
        const currentOpacity = star.opacity + Math.sin(star.pulseFactor) * 0.3;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();
      });

      // Draw special points with dotted lines
      specialPoints.forEach((point) => {
        // Draw glowing point
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          10
        );
        gradient.addColorStop(0, "rgba(255, 215, 0, 1)");
        gradient.addColorStop(0.5, "rgba(255, 215, 0, 0.3)");
        gradient.addColorStop(1, "rgba(255, 215, 0, 0)");

        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw dotted line
        const lineHeight = canvas.height * 0.2;
        ctx.strokeStyle = "rgba(139, 92, 246, 0.3)";
        ctx.setLineDash([2, 7]);
        ctx.beginPath();
        ctx.moveTo(point.x, point.y + 8);
        ctx.lineTo(point.x, point.y + lineHeight);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw and update shooting stars
      ctx.lineWidth = 2;
      shootingStars.forEach((star, index) => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.01;

        if (star.opacity <= 0) {
          shootingStars.splice(index, 1);
          return;
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.len,
          star.y - Math.sin(star.angle) * star.len
        );
        ctx.stroke();
      });

      createShootingStar();
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-[#37014F] to-gray-900 flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Canvas for animated stars */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Main content */}
      <div className="text-center px-4 z-10 relative">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 text-transparent bg-clip-text">
          There are millions of dollars
          <br />
          falling through the cracks
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Everyone has bad data. Financial leaders need to step up and fix it.
        </p>
      </div>
    </div>
  );
};

export default EnhancedStarryBackground;
