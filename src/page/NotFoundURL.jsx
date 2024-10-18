import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import '../css/pages/notFoundUrl.css';
import { Link } from "react-router-dom";

import LogoNotFoundPage from '../assets/NotFoundPage.svg';

const NotFoundURL = () => {
  const navigate = useNavigate();

  return (
    <div className="notFoundPage">
      <div className="sectionImagesLogo">
        <Image className="imageNotFound" src={LogoNotFoundPage} alt="Logo image" />
      </div>
      <div className="message-box">
        <h1>404</h1>
        <p>Page not found</p>
        <div className="buttons-con">
          <div className="action-link-wrap">
            {/* Use onClick to navigate back */}
            <button onClick={() => navigate(-1)} className="link-button">
              Go Back
            </button>
            {/* Link to home page */}
            <Link to="/" className="link-button">
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundURL;
