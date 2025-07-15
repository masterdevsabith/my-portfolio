"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface ScrollerContextProps {
  children: ReactNode;
}

export default function ScrollerContext({ children }: ScrollerContextProps) {
  useEffect(() => {
    const lenis = new Lenis({
      //   duration: 1.2,
      //   smooth: true,
      //   direction: "vertical",
      //   gestureDirection: "vertical",
      //   smoothTouch: false,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
