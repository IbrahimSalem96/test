import "./joiningFormSection.css";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

// Image
import arrowNextForm from "../../assets/arrowNextForm.svg";
import buyForm from "../../assets/JoiningFormBuyer.svg";
import JoiningFormSeller from "../../assets/JoiningFormSeller.svg";
import JoiningFormpurchasing from "../../assets/JoiningFormpurchasing.svg";
import JoiningFormAgent from "../../assets/JoiningFormAgent.svg";
import { useState , useEffect} from "react";

const JoiningFormSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const showActive = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.cardItems')) { 
      setActiveIndex(null);  
    }
  };

 useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <div className="joiningFormSection">
      <div className="mobileView">
        <Container>
          <div className="titleSection">
            <h2>Joining Form</h2>
            <p>Register Now and Unlock Exclusive Benefits!</p>
          </div>

          <div className="cardItems">
            <div className="cardItems">
              {[
                {
                  title: "Buyer",
                  img: buyForm,
                  link: "/the-genuine/registration/buyer",
                  description: "Open Buyer Form",
                },
                {
                  title: "Seller",
                  img: JoiningFormSeller,
                  link: "/the-genuine/registration/seller",
                  description: "Open Seller Form",
                },
                {
                  title: "Buyer and Seller",
                  img: JoiningFormpurchasing,
                  link: "/the-genuine/registration/buying-and-selling",
                  description: "Open Buyer & Seller Form",
                },
                {
                  title: "Agent",
                  img: JoiningFormAgent,
                  link: "/the-genuine/registration/agent",
                  description: "Open Agent Form",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={
                    activeIndex === index
                      ? "contentBox activeSection"
                      : "contentBox"
                  }
                  onClick={() => showActive(index)}
                >
                  <div className="notHover">
                    <p className="title">Joining Form</p>
                    <Image
                      className="mainImageSection"
                      src={item.img}
                      alt="image section"
                    />
                    <p className="title">{item.title}</p>
                    <p className="btnFormSection">{item.description}</p>
                  </div>

                  <div className="hoverSection">
                    <p>
                      <span>Enjoy a Lifetime of Savings!</span>
                    </p>

                    <p className="sectionCenter">
                      Register today and secure
                      <span> 50% off the market standard commission </span> for
                      life on all your property purchases. This exclusive offer
                      is our way of welcoming you to a smarter, more
                      cost-effective buying experience.
                    </p>

                    <p className="sectionDown">
                      <span>
                        Don't Miss Out—These Offers Won't Last! Terms and
                        Conditions apply.
                      </span>
                    </p>

                    <p className="termsAndConditions">
                      Terms and Conditions apply.
                    </p>

                    <div className="btnSectionNext">
                      <Link to={item.link}>{item.description}</Link>
                      <Image
                        className="mainImageSection"
                        src={arrowNextForm}
                        alt="arrow next page"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="desktopView">
        <div className="titleSection">
          <h2>Joining Form</h2>
          <p>Register Now and Unlock Exclusive Benefits!</p>
        </div>

        <div className="cardItems">
          <div className="contentBox">
            <div className="notHover">
              <p className="title">Joining Form</p>
              <Image
                className="mainImageSection"
                src={buyForm}
                alt="image section"
              />
              <p className="title">Buyer</p>
              <Link
                to={"/the-genuine/registration/buyer"}
                className="btnFormSection"
              >
                Open Buyer Form
              </Link>
            </div>

            <div className="hoverSection">
              <p>
                <span>Enjoy a Lifetime of Savings!</span>
              </p>

              <p className="sectionCenter">
                Register today and secure
                <span> 50% off the market standard commission </span> for life
                on all your property purchases. This exclusive offer is our way
                of welcoming you to a smarter, more cost-effective buying
                experience.
              </p>

              <p className="sectionDown">
                <span>
                  Don't Miss Out—These Offers Won't Last! Terms and Conditions
                  apply.
                </span>
              </p>

              <p className="termsAndConditions">Terms and Conditions apply.</p>
            </div>
          </div>

          <div className="contentBox">
            <div className="notHover">
              <p className="title">Joining Form</p>
              <Image
                className="mainImageSection"
                src={JoiningFormSeller}
                alt="image section"
              />
              <p className="title">Seller</p>
              <Link
                to={"/the-genuine/registration/seller"}
                className="btnFormSection"
              >
                Open Seller Form
              </Link>
            </div>

            <div className="hoverSection">
              <p>
                <span>Sell Your Property with Zero Fees—Forever!</span>
              </p>

              <p className="sectionCenter">
                Sign up now and take advantage of our
                <span>100% fee and commission waiver</span> for life. Sell your
                property without the usual costs, and maximize your returns with
                our genuine and transparent platform.
              </p>

              <p className="sectionDown">
                <span>Dont Miss Out—These Offers Wont Last!</span>
              </p>

              <p className="termsAndConditions">Terms and Conditions apply.</p>
            </div>
          </div>

          <div className="contentBox twoColumnsHover">
            <div className="notHover">
              <p className="title">Joining Form</p>
              <Image
                className="mainImageSection"
                src={JoiningFormpurchasing}
                alt="image section"
              />
              <p className="title">Open Buyer & Seller Form</p>
              <Link
                to={"/the-genuine/registration/buying-and-selling"}
                className="btnFormSection"
              >
                Open Buyer & Seller Form
              </Link>
            </div>

            <div className="hoverSection leftSectionHover">
              <p>
                <span>Enjoy a Lifetime of Savings!</span>
              </p>

              <p className="sectionCenter">
                Register today and secure
                <span> 50% off the market standard commission </span> for life
                on all your property purchases. This exclusive offer is our way
                of welcoming you to a smarter, more cost-effective buying
                experience.
              </p>

              <p className="sectionDown">
                <span>
                  Don't Miss Out—These Offers Won't Last! Terms and Conditions
                  apply.
                </span>
              </p>

              <p className="termsAndConditions">Terms and Conditions apply.</p>
            </div>

            <div className="hoverSection rightSectionHover">
              <p>
                <span>Sell Your Property with Zero Fees—Forever!</span>
              </p>

              <p className="sectionCenter">
                Sign up now and take advantage of our
                <span>100% fee and commission waiver</span> for life. Sell your
                property without the usual costs, and maximize your returns with
                our genuine and transparent platform.
              </p>

              <p className="sectionDown">
                <span>Dont Miss Out—These Offers Wont Last!</span>
              </p>

              <p className="termsAndConditions">Terms and Conditions apply.</p>
            </div>
          </div>

          <div className="contentBox">
            <div className="notHover">
              <p className="title">Joining Form</p>
              <Image
                className="mainImageSection"
                src={JoiningFormAgent}
                alt="image section"
              />
              <p className="title">Agent</p>
              <Link
                to={"/the-genuine/registration/agent"}
                className="btnFormSection"
              >
                Open Agent Form
              </Link>
            </div>

            <div className="hoverSection">
              <p>
                <span>Join to The Genuine now for zero fees forever! </span>
              </p>

              <p className="sectionCenter">
                Access our property listings and schedule viewings within hours.
                Share commissions, bring your buyers, and close more deals. Join
                us today and grow your business at no cost!
              </p>

              <p className="sectionDown">
                <span>Don’t Miss Out—These Offers Won’t Last!</span>
              </p>

              <p className="termsAndConditions">Terms and Conditions apply.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoiningFormSection;
