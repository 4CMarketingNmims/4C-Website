'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {

  const heroRef = useRef(null);
  const glowRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        defaults:{
          ease:"power4.out"
        }
      });

      tl.from(heroRef.current,{
        opacity:0,
        duration:.4
      })

      .from(
        glowRef.current,
        {
          scale:.65,
          opacity:0,
          duration:1.8
        },
        0
      )

      .from(
        logoRef.current,
        {
          y:50,
          opacity:0,
          scale:.85,
          duration:1
        },
        .2
      )

      .from(
        headingRef.current.children,
        {
          opacity:0,
          y:70,
          stagger:.1,
          duration:.8
        },
        .45
      )

      .from(
        subtitleRef.current,
        {
          opacity:0,
          y:30,
          duration:.7
        },
        .95
      )

      .from(
        badgeRef.current,
        {
          opacity:0,
          y:20,
          duration:.6
        },
        1.15
      )

      .from(
        scrollRef.current,
        {
          opacity:0,
          y:15,
          duration:.5
        },
        1.3
      );

      gsap.to(glowRef.current,{
        scale:1.08,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut",
        duration:6
      });

      gsap.to(logoRef.current,{
        y:-10,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut",
        duration:3
      });

      gsap.to(scrollRef.current,{
        y:10,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut",
        duration:1.2
      });

    },heroRef);

    return ()=>ctx.revert();

  },[]);

  return (

<section
className={styles.hero}
ref={heroRef}
>

<div className={styles.grid}></div>

<div className={styles.noise}></div>

<div
className={styles.glow}
ref={glowRef}
/>

<div className={styles.container}>

<div
className={styles.logoWrapper}
ref={logoRef}
>

<Image
src="/4c-logo.png"
alt="4C NMIMS"
width={220}
height={220}
priority
className={styles.logo}
/>

</div>

<div
className={styles.heading}
ref={headingRef}
>

<h2>THE OFFICIAL</h2>

<h1>MARKETING COMMITTEE</h1>

<h3>OF NMIMS MPSTME</h3>

</div>

<p
className={styles.subtitle}
ref={subtitleRef}
>

Where future marketers create,
compete and lead.

</p>

<div
className={styles.badge}
ref={badgeRef}
>

<span>ESTABLISHED</span>

<strong>2008</strong>

</div>

</div>

<div
className={styles.scroll}
ref={scrollRef}
>

<div className={styles.scrollLine}></div>

<span>SCROLL TO DISCOVER</span>

</div>

</section>

  );

}
