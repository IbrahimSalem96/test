import "./scrollDown.css";
import { Image } from "react-bootstrap";
 
// Image
import scrollDownImage from "../../assets/scrollDownImage.svg";

const ScrollSown = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const footerElement = document.getElementById("footerID");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scrollDownSection">
      <a href="#footerID" className="clickDown" onClick={handleScroll}>
        <p>Scroll Down</p>
        <Image src={scrollDownImage} alt="scrool Down Image" />
      </a>
    </div>
  );
};

export default ScrollSown;
