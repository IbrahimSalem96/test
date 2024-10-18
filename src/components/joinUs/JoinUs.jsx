import "./joinUs.css";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="joinUsBtn">
      <Link to={"/joiningForm"}>Join Us</Link>
    </div>
  );
};

export default JoinUs;
