import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "power3.out",
  scrollStart = "top 80%",
  scrollEnd = "top 20%",
  stagger = 0.03,
  as: Tag = "h2" // Flexible heading level
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span 
        className="inline-block will-change-transform" 
        key={index}
        aria-hidden="true"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".inline-block");
    
    // Reset initial state
    gsap.set(chars, {
      opacity: 0,
      y: "1em",
      rotateX: 45,
      transformStyle: "preserve-3d"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller: scrollContainerRef?.current || window,
        start: scrollStart,
        end: scrollEnd,
        toggleActions: "play none none reverse"
      }
    });

    tl.to(chars, {
      duration: animationDuration,
      opacity: 1,
      y: 0,
      rotateX: 0,
      ease: ease,
      stagger: stagger
    });

    return () => tl.kill();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <Tag 
      ref={containerRef} 
      className={`overflow-hidden ${containerClassName}`}
    >
      <span className={`inline-block ${textClassName}`}>
        {/* Screen reader accessible version */}
        <span className="sr-only">{children}</span>
        {/* Animated visual version */}
        <span aria-hidden="true">{splitText}</span>
      </span>
    </Tag>
  );
};

export default ScrollFloat;