import { useState } from "react";
import ModalScroll from "./ModalScroll";
import { motion, useAnimationControls } from "framer-motion";
import markdownit from "markdown-it";

import works from "../works";

import "./style.css";
import MyStyle from "./MarkdownStyle";

const slideUp = {
  hidden: {
    height: "0vh",
  },
  visible: {
    height: "100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
  },
};

const overlayAnim = {
  hidden: {
    opacity: [1, 0],
    height: "100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
  },
  visible: {
    opacity: [0, 1],
    height: "100vh",
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
  },
};

export default function index() {
  const [viewState, setView] = useState({ active: false, index: 0 });
  const [drawerOpen, setDrawer] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);

  const drawerControl = useAnimationControls();

  const pMeta = works;
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
  });

  const triggerDrawer = () => {
    setDrawer(!drawerOpen);
    if (drawerOpen) {
      drawerControl.start("hidden");
    } else {
      drawerControl.start("visible");
    }
  };

  return (
    <div className="project-section">
      <p className="quote">
        I want to always stand out from the others, no matter what i do.
      </p>
      <p className="pins">PINNED WORKS</p>
      {pMeta.map((v, i) => (
        <div
          key={i}
          className="project"
          onMouseEnter={() => setView({ active: true, index: i })}
          onMouseLeave={() => setView({ active: false, index: i })}
          onClick={() => {
            setContentIndex(i);
            drawerControl.start("visible");
            triggerDrawer();
          }}
        >
          <h2>{v.title}</h2>
          <p>{v.type}</p>
        </div>
      ))}
      <ModalScroll meta={pMeta} viewState={viewState} />
      <motion.div
        key={"overlaykey"}
        hidden={drawerOpen ? false : true}
        className="overlay"
        variants={overlayAnim}
        animate={drawerControl}
        initial="hidden"
        onClick={() => {
          triggerDrawer();
        }}
      ></motion.div>
      <motion.div
        variants={slideUp}
        className="drawer"
        animate={drawerControl}
        initial="hidden"
      >
        <div className="drawer-content">
          <MyStyle
            className="md-display"
            dangerouslySetInnerHTML={{
              __html: md.render(pMeta[contentIndex].content),
            }}
          ></MyStyle>
        </div>
      </motion.div>
    </div>
  );
}
