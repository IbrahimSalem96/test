import "../css/pages/commingSoon.css";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// Image
import logoSite from "../assets/LogoSite.svg";
import burgerMenu from "../assets/barSoMobile.svg";
import facebookIcon from "../assets/Facebook.svg";
import LinkedinIcon from "../assets/LinkedinFill.svg";
import instagramIcon from "../assets/Instagram.svg";
// import cityBack from "../assets/city_back.svg";

import { useState, useEffect } from "react";

const ComingSoon = () => {
  const [socialMediaIcon, setSocialMediaIcon] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const showBurgerMenu = () => {
    setSocialMediaIcon(!socialMediaIcon);
  };

  useEffect(() => {
    const targetDate = new Date("2024-12-15T00:00:00");  
    const timer = setInterval(() => {
      const now = new Date();  
      const difference = targetDate - now;  

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

 
      setTimeRemaining({ days, hours, minutes });

      
      if (difference < 0) {
        clearInterval(timer);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
      }
    }, 1000);  

    return () => clearInterval(timer); 
  }, []);

  return (
    <>
      <div className="commingSoonPageBox">
        <Container>
          <div className="ContnetPage">
            <div className="burgerMenu">
              <Image
                onClick={() => showBurgerMenu()}
                src={burgerMenu}
                alt="Logo Site"
              />

              <div
                className={`socialMediaIcon flex-column ${
                  socialMediaIcon ? "active" : ""
                }`}
              >
                <Link
                  to="https://www.instagram.com/thegenuine.ae/"
                  target="_blank"
                >
                  <Image src={instagramIcon} alt="Instagram icon" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/thegenuine/"
                  target="_blank"
                >
                  <Image src={LinkedinIcon} alt="Linkedin icon" />
                </Link>
                <Link
                  to="https://www.facebook.com/TheGenuine.Ae"
                  target="_blank"
                >
                  <Image src={facebookIcon} alt="Facebook icon" />
                </Link>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center flex-column contentTex gap-3">
            <Image className="LogoSite" src={logoSite} alt="Logo Site" />

            <h1>
              Dubai's Smart Solution <br /> for Real Estate Buying and Selling{" "}
            </h1>

            <div className="btnLinkBuyAndSell">
              <Link to="/buy">Buy</Link>
              <Link to="/sell">Sell</Link>
            </div>

            <h3>Join Now Before Launching and Unlock Exclusive Benefits!</h3>

            <div className="btnLinkBuyAndSell">
              <Link to="/joiningForm" className="joinNowStyle">
                Join Now
              </Link>
            </div>

            <div className="comingSoonCount">
              <h2>Coming Soon</h2>

              <div className="count">
                <div className="fixedForEveryone NumberOfDaysRemaining">
                  <span>
                    {String(timeRemaining.days).padStart(2, "0").charAt(0)}
                  </span>
                  <span>
                    {String(timeRemaining.days).padStart(2, "0").charAt(1) ||
                      "0"}
                  </span>
                </div>
                <span>:</span>
                <div className="fixedForEveryone NumberOfHoursRemaining">
                  <span>
                    {String(timeRemaining.hours).padStart(2, "0").charAt(0)}
                  </span>
                  <span>
                    {String(timeRemaining.hours).padStart(2, "0").charAt(1) ||
                      "0"}
                  </span>
                </div>
                <span>:</span>
                <div className="fixedForEveryone NumberOfMinutesRemaining">
                  <span>
                    {String(timeRemaining.minutes).padStart(2, "0").charAt(0)}
                  </span>
                  <span>
                    {String(timeRemaining.minutes).padStart(2, "0").charAt(1) ||
                      "0"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* <Image className="imageDownSite" src={cityBack} alt="bg city Site" /> */}

        <div className="socialMediaIconDesktop">
          <p>Follow us</p>
          <Link to="https://www.instagram.com/thegenuine.ae/" target="_blank">
            <Image src={instagramIcon} alt="Instagram icon" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/thegenuine/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin icon" />
          </Link>
          <Link to="https://www.facebook.com/TheGenuine.Ae" target="_blank">
            <Image src={facebookIcon} alt="Facebook icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
