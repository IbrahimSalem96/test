import "./headerForm.css";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Image
import arrowBack from "../../../assets/arrowBack.svg";

const HeaderForm = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="headerFormSection">
      <div className="mobileView">
        <div className="headers">
          <Image src={arrowBack} alt="arrow back" onClick={handleBackClick} />
        </div>
      </div>

      <div className="desktopView">
        <div className="headers">
          <Image src={arrowBack} alt="arrow back" onClick={handleBackClick} />
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
