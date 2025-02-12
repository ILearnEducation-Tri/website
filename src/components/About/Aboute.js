import React, { useState, useEffect, useRef } from "react";
import "./Aboute.css";

function Aboute() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const element = aboutRef.current; // Store ref value in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className={`col-lg-6 about-content ${isVisible ? "text-animate" : ""}`}>
            <h1>Why Us</h1>
            <p className="mt-4">
              I LEARN train and groom students to get employed with much advanced skills required to work anywhere in the world.
            </p>
            <p>
              I LEARN has implemented Teaching - Learning process by which students have more practical knowledge on the subject 
              they learn for a competitive employability and professional capability.
            </p>
            <p>
              I LEARN promotes learning through practical efficiency and result-oriented effective process of creation. I LEARN is 
              committed to impart quality education and excellence in academics through consistently keeping up with developments 
              in the field of teaching and learning. All these factors would help us to achieve "100% meaningful skilling and 
              employability training, which is our ultimate goal."
            </p>
          </div>

          {/* Image */}
          <div className={`col-lg-6 about-image ${isVisible ? "image-animate" : ""}`}>
            <img src="/assets/images/about_us.png" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboute;
