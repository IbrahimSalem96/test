import "./bannerGenuineSection.css";
import { Image } from "react-bootstrap";

// Image
import bgFull from "../../assets/GENUIVIELogoBg.svg";
 
const BannerGenuineSection = () => {
  return (
    <div className="bannerGenuineSection">
        <Image className="mobileBanner" src={bgFull} alt="background image section" />
     </div>
  );
};

export default BannerGenuineSection;
