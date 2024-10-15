import "./FixedSellingPrice.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import moneyIcon from "../../assets/monyeIcon.svg";
import moneyGuy from "../../assets/money-guy.png";
import giveMoney from "../../assets/giveMoney.svg";
import withoutTheGenuineLogo from "../../assets/withoutTheGenuineLogo.svg";

const FixedSellingPrice = () => {
  return (
    <div className="fixedSellingPriceSection">
      <Container>
        <p className="subTitle">The Price</p>

        <div className="titleSection">
          <h2>Fixed Selling Price</h2>
          <Image src={moneyIcon} alt="image Fixed Selling Price" />
        </div>

        <div className="descSection">
          <p>
            Avoid the stress of lowball offers and devalued property—set a fair
            price from the start and attract the right buyer.
          </p>
        </div>

        <div className="descImage">
          <div className="withoutTheGenuine">
            <Image src={giveMoney} alt="image Fixed Selling Price" />
            <p>Without The GENUINE</p>
          </div>

          <div className="withoutTheGenuine">
            <Image src={moneyGuy} className="bigSizeImage" alt="image Fixed Selling Price" />
            <p>
              With The GENUINE
              <Image
                src={withoutTheGenuineLogo}
                alt="image Fixed Selling Price"
              />
            </p>
          </div>
        </div>
        <div className="descDown">
          <p>
            In a market where fluctuating prices are common, our platform stands
            out by promoting a unique, fixed-price approach. This strategy
            eliminates inappropriate pricing tactics by agents or buyers,
            ensuring a genuine, transparent transaction. Your price is set based
            on thorough market analysis, valuation report and expert advice,
            helping you secure the right deal with confidence.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FixedSellingPrice;
