import "./smartViewing.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from "react";

// Image
import titleIcon from "../../assets/smartViewing.svg";

import iconNumer1 from "../../assets/Validation_ logo.svg";
import iconNumer2 from "../../assets/Validation_ logo1.svg";
import iconNumer3 from "../../assets/Validation_ logo3.svg";
import iconNumer4 from "../../assets/Validation_ logo4.svg";
import Line from "../../assets/lineDash.svg";
import pointer from "../../assets/PointLine.svg";



const SmartViewing = () => {
    const [goRigthSectin, setGoRigthSectin] = useState(false);

    const goRightSection = () => {
        if(goRigthSectin === false){
            setGoRigthSectin(!goRigthSectin)
        }
    }


  return (
    <Container>
      <div className="smartViewingSection">
        <p className="subTitle">The Viewing</p>

        <div className="titleSection">
          <h2>Smart Viewing</h2>
          <Image src={titleIcon} alt="image Fixed Selling Price" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> Hassle-free property viewings at your convenience <span>no more
            endless calls</span> or scheduling conflicts.
          </p>
        </div>

        <div className="cardItems">
            <div className="contenCard">
              <div className="imageSectiom">
                <Image src={iconNumer1} alt="image label section" />
              </div>
              <p>Once you have identified a property you are interested in</p>
            </div>

            <div className="contenCard">
              <div className="imageSectiom">
                <Image src={iconNumer2} alt="image label section" />
              </div>
              <p>In seconds</p>
            </div>

            <div className="contenCard">
              <div className="imageSectiom">
                <Image src={iconNumer3} alt="image label section" />
              </div>
              <p>Simply select our smart viewing option.</p>
            </div>

            <div className="contenCard">
              <div className="imageSectiom">
                <Image src={iconNumer4} alt="image label section" />
              </div>
              <p>Schedule a viewing at your convenience</p>
            </div>
          </div>

          <div className="scrollPointImage">
            <Image className="Line" src={Line} alt="image line" />
            <Image className={ goRigthSectin ? "pointer goRight" : "pointer "} src={pointer} alt="image pointer" onClick={() => goRightSection()}/>
          </div>
      </div>
    </Container>
  );
};

export default SmartViewing;
