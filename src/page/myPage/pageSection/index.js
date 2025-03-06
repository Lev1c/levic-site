import { useRef, useEffect, useState, useContext } from "react";
import { ThemeContext } from "../index";

const Hello = () => {
  const { theme } = useContext(ThemeContext);

  const color = theme === "dark" ? "black" : "white";

  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    function drawBackground() {
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        canvas.width * 0.1,
        centerX,
        centerY,
        canvas.width * 0.8
      );
      gradient.addColorStop(0, color);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function createStar() {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const angle = Math.atan2(y - centerY, x - centerX);

      return {
        x,
        y,
        angle,
        speed: Math.random() * 3 + 1,
        size: Math.random() * 2 + 0.5,
        color: [
          "#ffffff",
          "rgb(43, 43, 43)",
          "rgb(114, 114, 114)",
          "rgb(192, 192, 192)",
        ][Math.floor(Math.random() * 4)],
        lifeTime: Date.now() + 4000,
      };
    }

    stars.current = Array.from({ length: 300 }).map(createStar);

    let animationFrameId;

    const animate = () => {
      drawBackground();

      stars.current.forEach((star, index) => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        if (
          star.x < -50 ||
          star.x > canvas.width + 50 ||
          star.y < -50 ||
          star.y > canvas.height + 50 ||
          Date.now() > star.lifeTime
        ) {
          stars.current[index] = createStar();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId); // Останавливаем анимацию при смене темы
    };
  }, [theme]);
  return (
    <div
      className="back-hello container"
      style={{ height: window.innerHeight }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      />
      <div className="back-block">
        <div className="back-block-text">
          <span className="back-block-tag">&lt;h1&gt;</span>
          <p className="back-block-text__title">Hi, i’m</p>
          <p className="back-block-text__title">Web-developer</p>
          <span className="back-block-tag">&lt;/h1&gt;</span>
        </div>
        <div className="back-block-text">
          <span className="back-block-tag">&lt;p&gt;</span>
          <p className="back-block-text__text">Front-end developer </p>
          <span className="back-block-tag">&lt;/p&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Hello;
