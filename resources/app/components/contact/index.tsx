import "./style.css";
import { useRef } from "react";

export default function index() {
  const sectionRef = useRef(null);

  return (
    <div className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <h1>Let's work</h1>
        <h1>together</h1>
        <div className="chip-container">
          <div className="chip">ajinata89@gmail.com</div>
          <div className="chip">+62 851 05686313</div>
        </div>
        <div className="socials-container">
          <p>Socials</p>
          <br />
          <div className="socials-list">
            <a href="https://www.instagram.com/ajinata84/">Instagram</a>
            <a href="https://github.com/ajinata84">Github</a>
            <a href="https://www.linkedin.com/in/prash-trisula-ajinata-111010224/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
