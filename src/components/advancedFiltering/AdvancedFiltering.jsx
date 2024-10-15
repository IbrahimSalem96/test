import "./advancedFiltering.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import titleIcon from "../../assets/advancedFilteringIcon.svg";

// import fullImage from "../../assets/sectionAdvancedFiltering";

const AdvancedFiltering = () => {
  return (
    <Container>
      <div className="advancedFilteringSection">
        <p className="subTitle">The Filtering </p>

        <div className="titleSection">
          <h2>Advanced Filtering</h2>
          <Image src={titleIcon} alt="image Fixed Selling Price" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> Effortlessly find properties that match your
            exact criteria with our sophisticated filtering system.
          </p>
        </div>

        <div className="sectionImag"></div>
      </div>
    </Container>
  );
};

export default AdvancedFiltering;
