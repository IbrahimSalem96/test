import "./sellYourFeesForever.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";


// Image
const SellYourFeesForever = () => {
  return (
    <div className="sellYourFeesForeverSection">
      <div className="mobileView">
        <Container>
          <h2>Enjoy a Lifetime of Savings!</h2>

          <p>
            Register today and secure 
            <span>50% off the market standard commission</span> for life on all
            your property purchases. This exclusive offer is our way of
            welcoming you to a smarter, more cost-effective buying experience.
          </p>
        </Container>
      </div>

      <div className="mobileViewDownSection">
        <h2>Don’t Miss Out—These Offers Won’t Last!</h2>

        <Link to={"/joiningForm"}>Join Now</Link>

        <p>Terms and Conditions apply.</p>
      </div>

      <div className="desktopView">
        <div className="contentBox">
        <h2>Sell Your Property with <br /><span>0 Fees & 0% Comation Forever!</span></h2>

          <p className="descOne">
            Sign up now and take advantage of our 100% fee and commission
            waiver for life. Sell your property without the usual costs, and
            maximize your returns with our genuine and transparent platform.
          </p>

          <h3>Don’t Miss Out—These Offers Won’t Last!</h3>

          <Link to={"/joiningForm"}>Join Now</Link>

          <p className="termsAndConditions">Terms and Conditions apply.</p>
        </div>
      </div>
    </div>
  );
};

export default SellYourFeesForever;
