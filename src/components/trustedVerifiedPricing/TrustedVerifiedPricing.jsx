import "./trustedVerifiedPricing.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import verifiedIcon from "../../assets/verified2.png";
import Validation from "../../assets/validationIcon.svg";
import PriceComparisonIcon from "../../assets/PriceComparisonIcon.svg";
import ValuationReportsIcon from "../../assets/ValuationReportsIcon.svg";
import FeatureSummaryIcon from "../../assets/FeatureSummaryIcon.svg";

const EffortlessSelfListing = () => {
  return (
    <Container>
      <div className="trustedVerifiedPricingSection">
        <p className="subTitle">Why trust us?</p>

        <div className="titleSection">
          <h2>Trusted & Verified Pricing</h2>
          <Image src={verifiedIcon} alt="image trusted & Verified Pricing" />
        </div>

        <div className="cardItems">
          <div className="contentBox">
            <div className="imageSectiom">
              <Image src={Validation} alt="image label section" />
            </div>
            <h2>Validation</h2>
            <p>
              Every listing is vetted by our team of real estate experts before
              being posted.
            </p>
          </div>

          <div className="contentBox">
            <div className="imageSectiom">
              <Image src={PriceComparisonIcon} alt="image label section" />
            </div>
            <h2>Price Comparison</h2>
            <p>
              We compare current prices with historical data from the past three
              months of similar sales.
            </p>
          </div>

          <div className="contentBox">
            <div className="imageSectiom">
              <Image src={ValuationReportsIcon} alt="image label section" />
            </div>
            <h2>Valuation Reports</h2>
            <p>
              Receive a detailed valuation report from a trusted third-party
              provider, ensuring you get a fair market price.
            </p>
          </div>

          <div className="contentBox">
            <div className="imageSectiom">
              <Image src={FeatureSummaryIcon} alt="image label section" />
            </div>
            <h2>Feature Summary</h2>
            <p>
              A concise summary of any premium, unique features that may
              influence the market value.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EffortlessSelfListing;
