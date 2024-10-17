import "./effortlessSelfListing.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Image
import listPointers from "../../assets/shape.svg";
import list1 from "../../assets/1bgList.svg";
import list2 from "../../assets/2bgList.svg";
import list3 from "../../assets/3bgList.svg";
import list4 from "../../assets/4bgList.svg";

const EffortlessSelfListing = () => {
  return (
    <Container>

      <div className="effortlessSelfListingSection">
        <p className="subTitle">The Listing</p>

        <div className="titleSection">
          <h2>Effortless Self-Listing</h2>
          <Image src={listPointers} alt="image Effortless Self-Listing" />
        </div>

        <div className="descSection">
          <p>
            <span>Benefit</span> Say goodbye to the hassle of finding the right
            agent and making countless phone calls—take control and list your
            property yourself in just a few clicks.
          </p>
        </div>

        <div className="selfListing">
          <div className="contentBox">
            <Image src={list1} alt="image Self Listing 1" />
            <p>Simply select the selling option</p>
          </div>

          <div className="contentBox">
            <Image src={list2} alt="image Self Listing 2" />
            <p>Upload your proof documents</p>
          </div>

          <div className="contentBox">
            <Image src={list3} alt="image Self Listing 3" />
            <p>Set your final selling price</p>
          </div>

          <div className="contentBox">
            <Image src={list4} alt="image Self Listing 4" />
            <p>And you're done</p>
          </div>
        </div>

        <div className="descSection descDownSection">
          <p>
            Our team will then validate your listing , Provide a comprehensive
            report and agreement And offer advice on price adjustments to set
            the final fixed price.
          </p>
        </div>
      </div>
      </Container>

  );
};

export default EffortlessSelfListing;
