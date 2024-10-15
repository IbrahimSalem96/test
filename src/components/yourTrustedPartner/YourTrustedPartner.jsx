import "./yourTrustedPartner.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import titleIcon from "../../assets/users.svg";
import towerImage from "../../assets/towerMobile.svg";
import towerImage1 from "../../assets/towerDesktop.svg";
import iconNumer1 from "../../assets/Validation_ logo.svg";
import iconNumer2 from "../../assets/Validation_ logo1.svg";
import iconNumer3 from "../../assets/Validation_ logo2.svg";
import iconNumer4 from "../../assets/Validation_ logo3.svg";
import iconNumer5 from "../../assets/Validation_ logo4.svg";

const YourTrustedPartner = () => {
  return (
    <div className="yourTrustedPartnerSection">
      <Container>
        <p className="subTitle">The Experience</p>

        <div className="titleSection">
          <h2>Your Trusted Partner</h2>
          <Image src={titleIcon} alt="image Your Trusted Partner" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> Feel confident and supported as you achieve
            your real estate goals.
          </p>
        </div>

        <Image
          className="towerImage"
          src={towerImage}
          alt="image tower Mobile"
        />
        <Image
          className="towerImageDesktop"
          src={towerImage1}
          alt="image tower Desktop"
        />

        <div className="list">
          <div className="contnentBox">
            <div className="imageHoverBox">
              <div className="imageHover">
                <Image src={iconNumer1} alt="image number 1" />
              </div>
            </div>

            <p>
              Our management and team are dedicated to one objective{" "}
              <span>helping you succeed</span>.
            </p>
          </div>

          <div className="contnentBox">
            <div className="imageHoverBox">
              <div className="imageHover">
                <Image src={iconNumer2} alt="image number 2" />
              </div>
            </div>

            <p>
              Combine <span>smart technology</span> with human interaction.
            </p>
          </div>

          <div className="contnentBox">
            <div className="imageHoverBox">
              <div className="imageHover">
                <Image src={iconNumer3} alt="image number 3" />
              </div>
            </div>

            <p>
              <span>Provide advice</span> based on facts, ensuring that your
              needs are met.
            </p>
          </div>

          <div className="contnentBox">
            <div className="imageHoverBox">
              <div className="imageHover">
                <Image src={iconNumer4} alt="image number 4" />
              </div>
            </div>
            <p>
              We are <span>committed</span> to exceeding your expectations.
            </p>
          </div>

          <div className="contnentBox">
            <div className="imageHoverBox">
              <div className="imageHover">
                <Image src={iconNumer5} alt="image number 5" />
              </div>
            </div>
            <p>
              We’re here to <span>guide</span> you every step of the way.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default YourTrustedPartner;
