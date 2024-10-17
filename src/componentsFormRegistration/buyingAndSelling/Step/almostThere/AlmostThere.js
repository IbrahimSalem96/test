import "./almostThere.css";
import { Image } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";

import iconNextStep from "../../../../assets/arrowIconNextStep.svg";

function AlmostThere({ setStepSelect, setComments, comments,  sendDataAll }) {
 
 
  // Handle navigation to the previous page
  const handleBackPage = () => {
    setStepSelect(6);
  };

  return (
    <div className="stepField buyingAndSellingQAlmostThere">
      <div className="inputSection">
        <label>Please write down any comments or feedback if applicable</label>
        <textarea
          name="additionalFeedback"
          placeholder="Write your feedback"
          className="feedbackSection"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>

      <div className="btnSection">
        <div className="btnNext activeNext" onClick={() => sendDataAll()}>
          <p>Finish</p>
          <Image src={iconNextStep} alt="Finish" />
        </div>

        <div className="btnback" onClick={handleBackPage}>
          <p>Back</p>
          <Image src={iconNextStep} alt="next step" />
        </div>
      </div>
    </div>
  );
}

export default AlmostThere;
