import "./fixedSellingPriceBuy.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import moneyIcon from "../../assets/dolar.svg";
import fixdPriceCity from "../../assets/fixdPriceCity.svg";


import MarketBasedPricing from "../../assets/MarketBasedPricing.svg"
import PreNegotiated from "../../assets/PreNegotiated.svg"
import HassleFree from "../../assets/HassleFree.svg"


const FixedSellingPriceBuy = () => {
  return (
    <Container>
      <div className="fixedSellingPriceBuySection">
        <p className="subTitle">The Price</p>

        <div className="titleSection">
          <h2>Fixed Selling Price</h2>
          <Image src={moneyIcon} alt="image Fixed Selling Price" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> Say goodbye to the stress of negotiations—enjoy a fair,
            reasonable price from the start, with no hassle.
          </p>
        </div>

        <div className="contentBoxAll">
          <div className="cardItems">
            <div className="contentBox">
              <div className="imageSectiom">
                <Image src={MarketBasedPricing} alt="image label section" />
              </div>
              <div>
                <h2>Market-Based Pricing</h2>
                <p>
                  Each property’s price is aligned with current market trends
                  and its unique features, ensuring it’s fair and reasonable
                  from the outset.
                </p>
              </div>
            </div>

            <div className="contentBox">
              <div className="imageSectiom">
                <Image src={PreNegotiated} alt="image label section" />
              </div>
              <div>
                <h2>Pre-Negotiated</h2>
                <p>
                  Our team has already done the hard work, negotiating directly
                  with sellers to secure a price that benefits both parties.
                </p>
              </div>
            </div>

            <div className="contentBox">
              <div className="imageSectiom">
                <Image src={HassleFree} alt="image label section" />
              </div>
              <div>
                <h2>Hassle-Free</h2>
                <p>
                  With a fixed price, there’s no need for stressful negotiations
                  making your buying experience smoother and more
                  straightforward.
                </p>
              </div>
            </div>
          </div>

          <div className="fullImage">
            <Image src={fixdPriceCity} alt="image label section" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FixedSellingPriceBuy;
