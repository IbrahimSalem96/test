import "./accessToBuyersAgents.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import titleIcon from "../../assets/AccesstoBuyersAgentsIcon.svg";
import commingSoonImage from "../../assets/screenCommingSoon.png";
import iconNumer1 from "../../assets/Validation_ logo.svg";
import iconNumer2 from "../../assets/Validation_ logo1.svg";

const AccessToBuyersAgents = () => {
  return (
    <Container>
      <div className="accessToBuyersAgentsSection">
        <p className="subTitle">The Access</p>

        <div className="titleSection">
          <h2>Access to Buyers & Agents</h2>
          <Image src={titleIcon} alt="image Access to Buyers & Agents" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> No need to juggle multiple agents or recieving
            endless phone calls—let our platform work with all potential buyers.
          </p>
        </div>

        <div className="twoSection">
          <div className="sectionLeft">
            <h2>
              with up to <span>+20,000</span> agents
            </h2>
            <div className="imageHoverSlash">
              <Image
                src={commingSoonImage}
                alt="image Access to Buyers & Agents"
              />
            </div>
          </div>

          <div className="sectionRight">
            <h2>Our platform gives access to both</h2>
            <p>
              To allowing them to virtually and physically view your property
            </p>
            <div className="cardItems">
              <div className="contenCard">
                <div className="imageHover">
                  <Image
                    src={iconNumer1}
                    alt="image Access to Buyers & Agents"
                  />
                </div>
                <h3>Direct Buyers</h3>
                {/* <p>This text is replaceable.</p> */}
              </div>

              <div className="contenCard">
                <div className="imageHover">
                  <Image
                    src={iconNumer2}
                    alt="image Access to Buyers & Agents"
                  />
                </div>
                <h3>Buying agents</h3>
                {/* <p>This text is replaceable.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AccessToBuyersAgents;
