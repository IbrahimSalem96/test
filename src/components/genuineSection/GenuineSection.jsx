import "./genuineSection.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Swiper Slider
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Image
import titleIcon from "../../assets/GenuineLogoTitle.svg";
import slider1 from "../../assets/GenuineSlide/slider1.svg";
import slider2 from "../../assets/GenuineSlide/slider2.svg";
import slider3 from "../../assets/GenuineSlide/slider3.svg";
import slider4 from "../../assets/GenuineSlide/slider4.svg";
import arrowRight from "../../assets/arrowRight.svg";

const GenuineSection = () => {
  const nextSlider = () => {
    const nextButton = document.querySelector(
      ".genuineSectionSection .swiper-button-next"
    );
    if (nextButton) {
      nextButton.click();
    }
  };

  const preSlider = () => {
    const preButton = document.querySelector(
      ".genuineSectionSection  .swiper-button-prev"
    );
    if (preButton) {
      preButton.click();
    }
  };

  return (
    <div className="genuineSectionSection">
      <Container>
        <p className="subTitle">The Genuine</p>

        <div className="titleSection">
          <h2>Genuine</h2>
          <Image src={titleIcon} alt="image Your Trusted Partner" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> Sell your property through a platform grounded
            in authenticity, transparency, and trust—where every step of the
            process reflects our unwavering commitment to being genuine.
          </p>
        </div>
      </Container>

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
              <div className="boxShadow">
                <Image src={slider1} alt="image slider" />
                <p className="title">Transparent Processes</p>
                <p className="descBox">
                  We maintain full transparency in our pricing, listings, and
                  processes, so you always know exactly what to expect
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="contentBox">
              <div className="boxShadow">
                <Image src={slider2} alt="image slider" />
                <p className="title">Authentic Interactions</p>
                <p className="descBox">
                Our team operates with honesty and integrity, ensuring that every communication is straightforward and truthful
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="contentBox">
              <div className="boxShadow">
                <Image src={slider3} alt="image slider" />
                <p className="title">Transparent Processes</p>
                <p className="descBox">
                Our dedicated support team is always on hand to assist you, providing clear and accurate information every step of the way
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="contentBox">
              <div className="boxShadow">
                <Image
                  className="fullSlider"
                  src={slider4}
                  alt="image slider"
                />
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

export default GenuineSection;
