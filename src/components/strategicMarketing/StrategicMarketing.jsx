import "./strategicMarketing.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Swiper Slider
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Image
import titleIcon from "../../assets/strategicMarketingIcon.svg";
import slider1 from "../../assets/sliderStrategicMarketing/slider1.png";
import slider2 from "../../assets/sliderStrategicMarketing/slider2.png";
import slider3 from "../../assets/sliderStrategicMarketing/slider3.png";

import arrowRight from "../../assets/arrowRight.svg";

const StrategicMarketing = () => {
  const nextSlider = () => {
    const nextButton = document.querySelector(
      ".strategicMarketingSection .slidersDesktop .swiper-button-next"
    );
    if (nextButton) {
      nextButton.click();
    }
  };

  const preSlider = () => {
    const preButton = document.querySelector(
      ".strategicMarketingSection .slidersDesktop .swiper-button-prev"
    );
    if (preButton) {
      preButton.click();
    }
  };

  return (
    <div className="strategicMarketingSection">
      <Container>
        <p className="subTitle">The Strategic</p>

        <div className="titleSection">
          <h2>Strategic Marketing</h2>
          <Image src={titleIcon} alt="image Guaranteed Buyers Only" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> Reach the right buyer at the right price
            without the hassle of working with multiple agents.
          </p>
        </div>

        <div className="arrowSliders">
          <div className="containerBox">
            <div
              className="swiper-button-prevStyle"
              onClick={() => preSlider()}
            >
              <Image src={arrowRight} alt="image slider" />
            </div>
            <div
              className="swiper-button-nextStyle"
              onClick={() => nextSlider()}
            >
              <Image src={arrowRight} alt="image slider" />
            </div>
          </div>
        </div>

        <div className="sliders slidersMobile">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            grabCursor={true}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },

            }}
          >
            <SwiperSlide>
              <div className="contentBox">
                <Image src={slider1} alt="image slider" />
                <p>Our marketing approach is robust and effective</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="contentBox">
                <Image src={slider2} alt="image slider" />
                <p>Leveraging digital and network-based strategies to exceed your expectations</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="contentBox">
                <Image src={slider3} alt="image slider" />
                <p>We collaborate with every agent and invest heavily in digital marketing</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>

      <div className="sliders slidersDesktop">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={false}
          grabCursor={true}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.1,
            },
            1024: {
              slidesPerView: 2.6,
            },
          }}
        >
          <SwiperSlide>
            <div className="contentBox">
              <Image src={slider1} alt="image slider" />
              <p>Our marketing approach is robust and effective</p>
            </div>
          </SwiperSlide>
 

          <SwiperSlide>
            <div className="contentBox">
              <Image src={slider2} alt="image slider" />
              <p>Leveraging digital and network-based strategies to exceed your expectations</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="contentBox">
              <Image src={slider3} alt="image slider" />
              <p>We collaborate with every agent and invest heavily in digital marketing</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default StrategicMarketing;
