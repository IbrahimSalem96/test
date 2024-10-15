import "./buyingWithTheGunuine.css";
import { Container, Image } from "react-bootstrap";

// Image
import bgSectionLeft from "../../assets/buyingWithTheGunuineSection.svg";

const BuyingWithTheGunuine = () => {
  return (
    <Container>
      <div className="buyingWithTheGunuineSection">
        <div className="flexContent">
          <div className="leftSection">
            <Image src={bgSectionLeft} alt="backgroun image section" />
          </div>
          <div className="rightSection">
            <h2>Buying with The Gunuine</h2>
            <p>
              Buying with The Genuine offers a transparent, hassle-free real
              estate experience with verified pricing, fixed selling prices,
              authentic listings, expert consultations, and tailored support to
              meet your needs.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BuyingWithTheGunuine;
