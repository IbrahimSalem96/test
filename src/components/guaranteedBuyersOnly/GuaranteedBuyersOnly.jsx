import "./guaranteedBuyersOnly.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import titleIcon from "../../assets/GuaranteedBuyersOnlyIcon.svg";
import tableShow from "../../assets/GuaranteedBuyersOnlySection.svg";

const GuaranteedBuyersOnly = () => {
  return (
    <Container>
      <div className="guaranteedBuyersOnlySection">
        <p className="subTitle">The Guaranteed</p>

        <div className="titleSection">
          <h2>Guaranteed Buyers Only</h2>
          <Image src={titleIcon} alt="image Guaranteed Buyers Only" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> Save time and effort by engaging only with
            serious, qualified buyers—speeding up the selling process and
            minimizing uncertainty.
          </p>
        </div>

        <div className="contentBoxFlex">
          <Image className="imageTable" src={tableShow} alt="image table" />

          <div className="listPlatform">
            <h2>Our platform ensures that as a seller :</h2>
            <ul>
              <li>
                <span>Only</span> deal with buyers who are genuinely ready to
                purchase.
              </li>
              <li>
                Buyers are <span>vetted</span> before making offers.
              </li>
              <li>
                A <span>10% deposit</span> cheque is required from buyers.
              </li>
              <li>
                All <span>necessary documents</span> are submitted via our app.
              </li>
              <li>
                This process ensures <span>trustworthy transactions</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GuaranteedBuyersOnly;
