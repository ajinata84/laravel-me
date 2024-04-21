import "../styles/App.css";
import "../styles/index.css";

import Project from "../components/project";
import Contact from "../components/contact";
import Preloader from "../components/preloader";
import MyImage from "../components/myfoto.png";
import gsap from "gsap";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  const nameRef = useRef(null);
  const nameRef2 = useRef(null);
  const landingRef = useRef(null);
  const mainRef = useRef(null);
  const bodyRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start", "end"],
  });

  const bodyScroll = useScroll({
    target: bodyRef,
    offset: ["start end", "end start"],
  });

  const aboutAnim = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const imageAnim = useTransform(scrollYProgress, [0, 1], [0, 400]);

  const height = useTransform(bodyScroll.scrollYProgress, [0, 1], [100, 0]);

  let yPercent = 0;
  let direction = -1;

  const nameAnimation = () => {
    if (yPercent <= -110) {
      yPercent = 0;
    }

    gsap.set(nameRef.current, { yPercent: yPercent });
    gsap.set(nameRef2.current, { yPercent: yPercent });

    yPercent += 0.07 * direction;
    requestAnimationFrame(nameAnimation);
  };

  useEffect(() => {
    requestAnimationFrame(nameAnimation);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="main" ref={mainRef}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <motion.div className="landing" ref={landingRef}>
        <div className="landing-container">
          <div className="heading">
            <div className="heading-container">
              <span></span>
              <div className="tabs">
                <span>Works</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
          <motion.img src={MyImage} alt="my-image" style={{ y: imageAnim }} />
          <motion.div style={{ y: aboutAnim }} className="about">
            <div className="circle">About Me</div>
            <p>
              Helping teams achieve goals in pursuing efficient and scalable
              software development.
            </p>
          </motion.div>
        </div>
        <div className="locomotive">
          <p ref={nameRef}>Prash Trisula Ajinata</p>
          <p ref={nameRef2}>Prash Trisula Ajinata</p>
        </div>
      </motion.div>
      <div className="body" ref={bodyRef}>
        <Project />
      </div>
      <motion.div className="circleOverlay" style={{ height }}>
        <div className="circleEl"></div>
      </motion.div>
      <Contact />
    </main>
  );
}
