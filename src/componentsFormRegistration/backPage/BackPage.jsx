import "./backPage.css";
import { Image } from "react-bootstrap";
import Swal from "sweetalert2"; // Make sure to import SweetAlert2
import { useNavigate } from "react-router-dom";

// Image
import arrowBack from "../../assets/arrowBack.svg";

const BackPage = ({ stepSelect , setStepSelect }) => {
  const navigate = useNavigate();
 
  const handleAlertBack = () => {
    Swal.fire({
      title: "Are you sure you want to go out?",
      icon: "question",
      confirmButtonText: "Yes",
      cancelButtonText: "Previous step",  
      showCancelButton: stepSelect > 1, 
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/joiningForm");
      } else if (result.isDismissed && stepSelect > 1) {
        if (result.dismiss === Swal.DismissReason.cancel) {
          setStepSelect(stepSelect - 1);
        }
      }
    });
  };
  
  

  return (
    <div className="headerFormSectionFormStep">
      <div className="mobileView">
        <div className="headers">
          <Image src={arrowBack} alt="arrow back" onClick={handleAlertBack} />
        </div>
      </div>

      <div className="desktopView">
        <div className="headers">
          <Image src={arrowBack} alt="arrow back" onClick={handleAlertBack} />
        </div>
      </div>
    </div>
  );
};

export default BackPage;
