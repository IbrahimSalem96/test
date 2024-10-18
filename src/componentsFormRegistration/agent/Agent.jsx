import "./agent.css";
import Bar from "./Bar.js";
import { BackPage } from "../index";

import {
  ContactInformation,
  AccessAndUpdates,
  AlmostThere,
  NextContactInformation,
} from "./Step/index.js";

import { FooterForm } from "../index.js";
import { useState } from "react";

import request from "../../utils/request.js";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// Image

const Agent = () => {
  const [stepSelect, setStepSelect] = useState(1);
  const navigate = useNavigate();

  //Step 1
  const [salutation, setSalutation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  //step 2
  const [countryOfResidence, setCountryOfResidence] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");

  //Step 3
  const [contactPermission, setContactPermission] = useState("");
  const [earlyAccessSave, setEarlyAccessSave] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [subscribeNewsletter, setSubscribeNewsletter] = useState("");
  const [subscribeNewsletterConfirm, setSubscribeNewsletterConfirm] = useState("");
  const [whatsAppGroup, setWhatsAppGroup] = useState("");

  //Step 4
  const [comments, setComments] = useState("");

  //Send Data
  //Send Data
  const sendDataAll = async () => {
    try {
      const requestData = {
        salutation: salutation.value,
        firstname: firstName,
        lastname: lastName,
        mobilenumber: mobileNumber,
        whatsappnumber: whatsappNumber,
        email: email,
        checkbox1: checkbox1,
        checkbox2: checkbox2,
        countryofresidence: countryOfResidence.map((country) => country.label),
        preferredlanguage: preferredLanguage.map((lang) => lang.label),
        contactpermission: contactPermission.value,
        comments: comments,
        subscribenewsletter: subscribeNewsletter.value,
        subscribenewsletterconfirm: subscribeNewsletterConfirm.value,
        referralsource: referralSource.label,
        earlyaccess: earlyAccessSave.value,
        whatsappgroup: whatsAppGroup.value, 
      };

      await axios.post(`${request.defaults.baseURL}agent`, requestData);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your request has been submitted successfully!",
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        didOpen: () => {
          const footerElement = Swal.getFooter();
          footerElement.innerHTML =
            '<a href="/" style="color: #3085d6; text-decoration: none;">Go to Home Page</a>';

          footerElement
            .querySelector("a")
            .addEventListener("click", (event) => {
              event.preventDefault();
              navigate("/");
              Swal.close();
            });

          const closeButton = Swal.getCloseButton();
          closeButton.addEventListener("click", () => {
            navigate("/");
          });
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "A problem occurred, please try again.",
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        didOpen: () => {
          const footerElement = Swal.getFooter();
          footerElement.innerHTML =
            '<a href="/registration/buying-and-selling" style="color: #3085d6; text-decoration: none;">Try again</a>';

          footerElement
            .querySelector("a")
            .addEventListener("click", (event) => {
              event.preventDefault();
              setStepSelect(1);
              Swal.close();
            });

          const closeButton = Swal.getCloseButton();
          closeButton.addEventListener("click", () => {
            // navigate("/");
          });
        },
      });
    }
  };

  return (
    <>
      <BackPage stepSelect={stepSelect} setStepSelect={setStepSelect} />
      <div className="buyingAndSellingSection agentPage">
        <Bar stepSelect={stepSelect} />

        <div className="setionFormBox">
          {stepSelect === 1 ? (
            <ContactInformation
              setSalutation={setSalutation}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setMobileNumber={setMobileNumber}
              setWhatsappNumber={setWhatsappNumber}
              setEmail={setEmail}
              setCheckbox1={setCheckbox1}
              setCheckbox2={setCheckbox2}
              setStepSelect={setStepSelect}
              salutation={salutation}
              firstName={firstName}
              lastName={lastName}
              mobileNumber={mobileNumber}
              whatsappNumber={whatsappNumber}
              email={email}
              checkbox1={checkbox1}
              checkbox2={checkbox2}
            />
          ) : (
            " "
          )}
          {stepSelect === 2 ? (
            <NextContactInformation
              setStepSelect={setStepSelect}
              setCountryOfResidence={setCountryOfResidence}
              setPreferredLanguage={setPreferredLanguage}
              countryOfResidence={countryOfResidence}
              preferredLanguage={preferredLanguage}
            />
          ) : (
            " "
          )}

          {stepSelect === 3 ? (
            <AccessAndUpdates
              setStepSelect={setStepSelect}
              setContactPermission={setContactPermission}
              setEarlyAccessSave={setEarlyAccessSave}
              setReferralSource={setReferralSource}
              setSubscribeNewsletter={setSubscribeNewsletter}
              setSubscribeNewsletterConfirm={setSubscribeNewsletterConfirm}
              setWhatsAppGroup={setWhatsAppGroup}
              contactPermission={contactPermission}
              earlyAccessSave={earlyAccessSave}
              referralSource={referralSource}
              subscribeNewsletter={subscribeNewsletter}
              subscribeNewsletterConfirm={subscribeNewsletterConfirm}
              whatsAppGroup={whatsAppGroup}
            />
          ) : (
            " "
          )}

          {stepSelect === 4 ? (
            <AlmostThere
              setStepSelect={setStepSelect}
              comments={comments}
              setComments={setComments}
              sendDataAll={sendDataAll}
            />
          ) : (
            " "
          )}
        </div>
      </div>
      <FooterForm />
    </>
  );
};

export default Agent;
