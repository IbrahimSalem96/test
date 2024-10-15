import "./agent.css";
import Container from "react-bootstrap/Container";

const Bar = ({ stepSelect }) => {
  return (
    <>
      <Container>
        <div className="mobileSection">
          <div className="barStepMobile">
            <ul>
              <li className={stepSelect >= 1 ? "aciveStep activeSelect" : " "}>
                <p>Contact Information</p>
              </li>
              <li className={stepSelect >= 3 ? "aciveStep activeSelect" : " "}>
                <p>Access and Updates</p>
              </li>
              <li className={stepSelect >= 4 ? "aciveStep activeSelect" : " "}>
                <p>Almost There</p>
              </li>
            </ul>
          </div>

          <div className="titleSection">
            <h2>Joining Form</h2>
            <p>Register Now and Unlock Exclusive Benefits!</p>
          </div>
        </div>
      </Container>

      <div className="desktopSection">
        <div className="titleSection">
          <h2>Joining Form</h2>
          <p>Register Now and Unlock Exclusive Benefits!</p>
        </div>

        <div className="barStepMobile">
          <ul>
            <li className={stepSelect >= 1 ? "aciveStep activeSelect" : " "}>
              <p>Contact Information</p>
            </li>
            <li
              className={
                stepSelect >= 2
                  ? "smallRadius one aciveStep activeSmallRadius"
                  : "smallRadius one"
              }
            ></li>
            <li className={stepSelect >= 3 ? "aciveStep activeSelect" : " "}>
              <p>Access and Updates</p>
            </li>
            <li className={stepSelect >= 4 ? "aciveStep activeSelect" : " "}>
              <p>Almost There</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Bar;
