import "./theExperienceSection.css";
import { Image } from "react-bootstrap";

// Swiper Slider
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Image
import arrowRight from "../../assets/arrowRight.svg";
import imageSlider1 from "../../assets/TheExperienceSection/slider1.svg";
import imageSlider2 from "../../assets/TheExperienceSection/slider2.svg";

import iconTilteSlider1 from "../../assets/TheExperienceSection/TailoredExperienceIconTitle.svg";
import iconTilteSlider2 from "../../assets/TheExperienceSection/PersonalizedExperienceIconTitle.svg";
import iconTilteSlider3 from "../../assets/TheExperienceSection/TechDrivenExperienceIconTitlte.svg";

const TheExperienceSection = () => {
  const nextSlider = () => {
    const nextButton = document.querySelector(
      ".theExperienceSection .swiper-button-next"
    );
    if (nextButton) {
      nextButton.click();
    }
  };

  const preSlider = () => {
    const preButton = document.querySelector(
      ".theExperienceSection  .swiper-button-prev"
    );
    if (preButton) {
      preButton.click();
    }
  };

  return (
    <div className="theExperienceSection">
      <div className="sliders">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          grabCursor={true}
          navigation={true}
        >
          <SwiperSlide>
            <div className="contentBox">
              <div className="imageLeftSlider">
                <Image src={imageSlider1} alt="Image slider" />
              </div>

              <div className="boxShadow">
                <div className="sectionTop">
                  <span>The Experience</span>
                  <h2>
                    Tailored Experience
                    <Image src={iconTilteSlider1} alt="image title" />
                  </h2>
                  <p>
                    Choose between a tech-driven or human-touch experience,
                    based on your preference
                  </p>
                </div>

                <div className="sectionCenter">
                  <span>The Personalized</span>
                  <h2>
                    Personalized Experience
                    <Image src={iconTilteSlider2} alt="image title" />
                  </h2>
                  <p>
                    Our dedicated team is here to provide personalized
                    interactions, ensuring that your journey is comfortable and
                    aligned with your needs.
                  </p>
                </div>

                <div className="sectionDown">
                  <span>Benefit</span>
                  <p className="upSpan">
                    Enjoy a classic, human-touch experience tailored to your
                    preferences.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="contentBox">
              <div className="imageLeftSlider">
                <Image src={imageSlider2} alt="Image slider" />
              </div>

              <div className="boxShadow">
                <div className="sectionTop" style={{ visibility: "hidden" }}>
                  <span>The Experience</span>
                  <h2>Tailored Experience</h2>
                  <p>
                    Choose between a tech-driven or human-touch experience,
                    based on your preference
                  </p>
                </div>

                <div className="sectionCenter">
                  <span>The Tech-Driven</span>
                  <h2>
                    Tech-Driven Experience
                    <Image src={iconTilteSlider3} alt="image title" />
                  </h2>
                  <p>
                    Our platform leverages advanced technology to streamline
                    your experience, making it efficient and user-friendly, so
                    you can focus on what matters most.
                  </p>
                </div>

                <div className="sectionDown">
                  <span>Benefit</span>
                  <p className="upSpan">
                    Opt for a modern, tech-savvy approach that enhances your
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="arrowSliders">
        <div className="containerBox">
          <div className="swiper-button-prevStyle" onClick={() => preSlider()}>
            <Image src={arrowRight} alt="image slider" />
          </div>
          <div className="swiper-button-nextStyle" onClick={() => nextSlider()}>
            <Image src={arrowRight} alt="image slider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheExperienceSection;
