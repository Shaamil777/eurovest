"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GsapInit() {
  const pathname = usePathname();
  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);

    const wowElements = gsap.utils.toArray('.wow');

    wowElements.forEach((el) => {
      // Parse delay from data-wow-delay (e.g. ".3s" -> 0.3)
      let delay = 0;
      const wowDelay = el.getAttribute('data-wow-delay');
      if (wowDelay) {
        delay = parseFloat(wowDelay.replace('s', ''));
        if (isNaN(delay)) delay = 0;
      }

      // Determine initial state based on classes
      let startState = { opacity: 0, y: 50, x: 0 };
      
      if (el.classList.contains('img-custom-anim-left')) {
        startState = { opacity: 0, x: -50, y: 0 };
      } else if (el.classList.contains('img-custom-anim-right')) {
        startState = { opacity: 0, x: 50, y: 0 };
      }

      // GSAP Animation using ScrollTrigger
      gsap.fromTo(el, 
        startState,
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Trigger when element is 85% from top of viewport
            toggleActions: "play none none none" // Play once
          }
        }
      );
      
      // Since nextjs-bundle.css might have set visibility: hidden for .wow
      // Let's ensure it's visible so GSAP can fade opacity
      el.style.visibility = 'visible';
    });
    
    // Custom tp-clip-anim and tp-anim-img
    const clipElements = gsap.utils.toArray('.tp-clip-anim');
    clipElements.forEach((el) => {
      const animImg = el.querySelector('.tp-anim-img');
      if (animImg) {
        gsap.fromTo(animImg,
          { opacity: 0, scale: 1.2 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });
    
    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [pathname]);

  return null;
}
