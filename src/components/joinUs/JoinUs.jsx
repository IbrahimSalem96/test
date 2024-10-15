import "./joinUs.css";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="joinUsBtn">
      <Link to={"/the-genuine/joiningForm"}>Join Us</Link>
    </div>
  );
};

export default JoinUs;
