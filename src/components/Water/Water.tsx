"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Water.module.scss";

export default function Water() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const frameCount = 192;

  const currentFrameRef = useRef(0);

  const [canvasSize, setCanvasSize] = useState({
    width: 1920,
    height: 1080,
    cssWidth: 1920,
    cssHeight: 1080,
  });

  const calculateCanvasSize = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const originalAspectRatio = 16 / 9;

    let cssWidth = vw;
    let cssHeight = vw / originalAspectRatio;

    if (cssHeight > vh) {
      cssHeight = vh;
      cssWidth = vh * originalAspectRatio;
    }

    const canvasWidth = Math.floor(cssWidth * window.devicePixelRatio);
    const canvasHeight = Math.floor(cssHeight * window.devicePixelRatio);

    return {
      width: canvasWidth,
      height: canvasHeight,
      cssWidth: cssWidth,
      cssHeight: cssHeight,
    };
  }, []);

  useEffect(() => {
    setCanvasSize(calculateCanvasSize());

    const handleResize = () => {
      setCanvasSize(calculateCanvasSize());
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [calculateCanvasSize]);

  useEffect(() => {
    const loadImages = async () => {
      const images: HTMLImageElement[] = [];

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const paddedNumber = i.toString().padStart(3, "0");
        img.src = `/imgs/water/water_${paddedNumber}.jpg`;

        img.onload = (_) => {
          images[i] = img;

          if (images.filter(Boolean).length === frameCount) {
            framesRef.current = images;
          }
        };

        img.onerror = () => {
          console.error(`Erro ao carregar imagem water_${paddedNumber}.jpg`);
        };
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!canvasRef.current) return;

    ScrollTrigger.create({
      trigger: "#marquee04",
      start: "top-=150 top",
      endTrigger: "#courses",
      end: "top-=100 top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const frameIndex = Math.floor(progress * (frameCount - 1));
        currentFrameRef.current = Math.max(
          0,
          Math.min(frameCount - 1, frameIndex)
        );
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [frameCount]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    canvas.style.setProperty("width", `${canvasSize.cssWidth}px`);
    canvas.style.setProperty("height", `${canvasSize.cssHeight}px`);

    const render = () => {
      const frameToShow = currentFrameRef.current;
      const currentImg = framesRef.current[frameToShow];

      if (currentImg) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(currentImg, 0, 0, canvas.width, canvas.height);
      }

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [canvasSize]);

  return (
    <section className={styles.water}>
      <div className={styles.waterContainer}>
        <canvas ref={canvasRef} className={styles.waterCanvas} />
      </div>
    </section>
  );
}
