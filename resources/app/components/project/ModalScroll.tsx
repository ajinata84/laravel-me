import { useEffect, useRef } from "react";
import "./modal.css";

import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnim = {
  initial: { scale: 1, x: "-50%", y: "-50%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

interface ModalScrollProps {
  viewState: {
    active: boolean;
    index: number;
  };

  meta: {
    title: string;
    type: string;
    img: string;
  }[];
}

export default function ModalScroll(props: ModalScrollProps) {
  const { active, index } = props.viewState;

  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(containerRef.current, "left", {
      duration: 0.7,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(containerRef.current, "top", {
      duration: 0.7,
      ease: "power3",
    });

    const moveCursorX = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const moveCursorLabelX = gsap.quickTo(labelRef.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(labelRef.current, "top", {
      duration: 0.4,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      moveContainerX(pageX);
      moveContainerY(pageY);
      moveCursorLabelX(pageX);
      moveCursorLabelY(pageY);
      moveCursorX(pageX);
      moveCursorY(pageY);
    });
  });

  return (
    <div>
      <motion.div
        ref={containerRef}
        variants={scaleAnim}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="container"
      >
        <div className="slider" style={{ top: index * -100 + "%" }}>
          {props.meta.map((v, i) => (
            <div className="sv" key={i}>
              <img src={v.img} alt={v.title} width={300} height={0} />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="cursor"
        ref={cursorRef}
        variants={scaleAnim}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        onClick={() => console.log('hiu')}

      ></motion.div>
      <motion.div
        className="cursorlabel"
        ref={labelRef}
        variants={scaleAnim}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        
      >
        View
      </motion.div>
    </div>
  );
}
