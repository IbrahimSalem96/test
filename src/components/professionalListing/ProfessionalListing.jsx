import "./ProfessionalListing.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import listPointers from "../../assets/shape.svg";
import iconNumer1 from "../../assets/Validation_ logo.svg";
import iconNumer2 from "../../assets/Validation_ logo1.svg";
import iconNumer3 from "../../assets/Validation_ logo2.svg";
import iconNumer4 from "../../assets/Validation_ logo3.svg";
import iconNumer5 from "../../assets/Validation_ logo4.svg";

const ProfessionalListing = () => {
  return (
    <Container>
      <div className="professionalListingSection">
        <p className="subTitle">The Listing</p>

        <div className="titleSection">
          <h2>Professional Listing</h2>
          <Image src={listPointers} alt="image Effortless Self-Listing" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> No need to juggle multiple agents or recieving
            endless phone calls—let our platform work with all potential buyers.
          </p>
        </div>

        <div className="cardItem">
          <div className="sizeBox">
            <div className="contentBox">
              <div className="imageHover">
                <Image src={iconNumer1} alt="number of item 1" />
              </div>
              <h3>Handles listing</h3>
              <p>Our professional team handles every detail of your listing</p>
            </div>

            <div className="contentBox">
              <div className="imageHover">
                <Image src={iconNumer2} alt="number of item 2" />
              </div>
              <h3>Creating content</h3>
              <p>
                From highlighting key features to creating compelling media
                content
              </p>
            </div>

            <div className="contentBox">
              <div className="imageHover">
                <Image src={iconNumer3} alt="number of item 3" />
              </div>{" "}
              <h3>Easy for buyers</h3>
              <p>Healthier Recipes, from food & nutrition experts</p>
            </div>

            <div className="contentBox">
              <div className="imageHover">
                <Image src={iconNumer4} alt="number of item 4" />
              </div>{" "}
              <h3>High-quality photos</h3>
              <p>Healthier Recipes, from food & nutrition experts</p>
            </div>

            <div className="contentBox">
              <div className="imageHover">
                <Image src={iconNumer5} alt="number of item 5" />
              </div>{" "}
              <h3>Faster sales</h3>
              <p>Facilitating quicker decisions and faster sales</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfessionalListing;
