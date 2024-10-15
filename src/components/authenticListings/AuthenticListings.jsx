import React, { useEffect, useRef, useState } from "react";
import "./authenticListings.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import titleIcon from "../../assets/titleIconAuthenticListings.svg";
import bannerSection from "../../assets/bannerAuthenticListings.png";

import successIcon from "../../assets/success.svg";
import closeIcon from "../../assets/close.svg";

const AuthenticListings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // مرجع للعنصر

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // قم بتعيين الحالة عند رؤية العنصر
          observer.unobserve(entry.target); // توقف عن مراقبة العنصر
        }
      });
    });

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection); // ابدأ مراقبة العنصر
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection); // توقف عن المراقبة عند إلغاء التركيب
      }
    };
  }, []);

  return (
    <div className="authenticListingsSection">
      <Container>
        <p className="subTitle">The Authentic</p>

        <div className="titleSection">
          <h2>100% Authentic Listings</h2>
          <Image src={titleIcon} alt="image Fixed Selling Price" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> No more wasting time on fake or duplicate listings—every
            property is genuine.
          </p>
        </div>
      </Container>

      <div className="fullImage">
        <Image src={bannerSection} alt="image banner section" />
      </div>

      <Container>
        <div
          className="cardItems"
          ref={sectionRef} 
          id="showAnimationCard"
        >
          <div className={`${isVisible ? 'contentBox animationShowSlow' : 'contentBox'}`}>
            <div className="imageSectiom">
              <Image src={successIcon} alt="image label section" />
            </div>
            <div>
              <h2>List 1</h2>
            </div>
          </div>

          <div className={`${isVisible ? 'contentBox animationShowSlow' : 'contentBox'}`}>
            <div className="imageSectiom">
              <Image src={successIcon} alt="image label section" />
            </div>
            <div>
              <h2>List 2</h2>
            </div>
          </div>

          <div className={`${isVisible ? 'contentBox closeSection animationShowSlow' : 'closeSection contentBox'}`}>
            <div className="imageSectiom">
              <Image src={closeIcon} alt="image label section" />
            </div>
            <div>
              <h2>List 3</h2>
            </div>
          </div>

          <div className={`${isVisible ? 'contentBox animationShowSlow' : 'contentBox'}`}>
            <div className="imageSectiom">
              <Image src={successIcon} alt="image label section" />
            </div>
            <div>
              <h2>List 4</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthenticListings;
