"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  return (
    <ReactLenis root options={{ 
      lerp: 0.05, 
      duration: 2.5, 
      smoothWheel: true,
      wheelMultiplier: 1.2,
    }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
