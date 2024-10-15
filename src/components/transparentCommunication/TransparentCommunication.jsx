import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import titleIcon from "../../assets/GuaranteedBuyersOnlyIcon.svg";
import TransparentCommunicationAni1 from "../../assets/TransparentCommunicationAni1.png";
import TransparentCommunicationAni2 from "../../assets/TransparentCommunicationAni2.png";
import TransparentCommunicationAni3 from "../../assets/TransparentCommunicationAni3.png";
import "./transparentCommunication.css";

const TransparentCommunication = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); 
            observer.unobserve(entry.target);
          } 
        });
      },
      {
        threshold: 0.1, 
      }
    );

    // Store the current ref in a variable
    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <Container>
      <div className="transparentCommunicationSection" ref={sectionRef}>
        <p className="subTitle">The Guaranteed</p>

        <div className="titleSection">
          <h2>Transparent Communication</h2>
          <Image src={titleIcon} alt="image Transparent Communication" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> Stay informed with consistent updates,
            ensuring transparency throughout the selling process.
          </p>
        </div>

        <div className="list">
          <ul>
            <li>
              Our platform is <span>built</span> on genuine communication.
            </li>
            <li>
              providing you with <span>daily</span> and <span>weekly</span>{" "}
              updates <span>via email</span> and <span>dashboard</span>.
            </li>
            <li>
              This transparency keeps you in the loop on all activities related
              to your property, <span>helping</span> you make informed decisions
              with confidence.
            </li>
          </ul>

          <div className={`animationShowSendImage ${isVisible ? "showAnimation" : ""}`}>
            <Image
              src={TransparentCommunicationAni1}
              alt="section image animation"
            />
            <Image
              src={TransparentCommunicationAni2}
              alt="section image animation"
            />
            <Image
              src={TransparentCommunicationAni3}
              alt="section image animation"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TransparentCommunication;
