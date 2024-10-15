import "./accessAndUpdates.css";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";

// Image
import iconNextStep from "../../../../assets/arrowIconNextStep.svg";

// Options for contact and early access
const contactOptions = [
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];

const earlyAccessOptions = [
  { value: true, label: "Yes, I would like early access" },
  { value: false, label: "No, thank you" },
];

// Options for how did you hear about us
const sourceOptions = [
  { value: "Social Media", label: "Social Media" },
  { value: "Friend", label: "Friend" },
  { value: "Advertisement", label: "Advertisement" },
  { value: "Other", label: "Other" },
];

// Options for newsletter subscription
const newsletterOptions = [
  { value: false, label: "Yes, I would like to subscribe" },
  { value: true, label: "No, thank you" },
];

const newsletterConfirmOptions = [
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];

function AccessAndUpdates({
  setStepSelect,
  setContactPermission,
  setEarlyAccessSave,
  setReferralSource,
  setSubscribeNewsletter,
  setSubscribeNewsletterConfirm,
}) {
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [contact, setContact] = useState(false);
  const [earlyAccess, setEarlyAccess] = useState(false);
  const [source, setSource] = useState(null);
  const [newsletter, setNewsletter] = useState(false);
  const [newsletterConfirm, setNewsletterConfirm] = useState(false);
  const [activeNextStep, setActiveNextStep] = useState(false);

  // Check if all required fields are filled to activate the Next button
  useEffect(() => {
    if (contact && earlyAccess && source && newsletter) {
      setActiveNextStep(true);
    } else {
      setActiveNextStep(false);
    }
  }, [contact, earlyAccess, source, newsletter]);

  // Validate the form to ensure all required fields are filled
  const validateForm = () => {
    let tempErrors = {};
    if (!contact) tempErrors.contact = "Contact preference is required.";
    if (!earlyAccess)
      tempErrors.earlyAccess = "Early access preference is required.";
    if (!source) tempErrors.source = "Source of information is required.";
    if (!newsletter)
      tempErrors.newsletter = "Newsletter subscription preference is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    setShowErrors(true);
    if (validateForm()) {
      setContactPermission(contact);
      setEarlyAccessSave(earlyAccess);
      setReferralSource(source);
      setSubscribeNewsletter(newsletter);
      setSubscribeNewsletterConfirm(newsletterConfirm);

      
      setStepSelect(4);
    } else {
      console.log("Validation Failed");
    }
  };

  // Handle going back to the previous page
  const handleBackPage = () => {
    setStepSelect(2);
  };

  return (
    <div className="stepField">
      {/* Contact Preference */}
      <div className="salutationSection">
        <label>Our platform is launching soon! May we contact you?</label>
        <Select
          options={contactOptions}
          value={contact}
          onChange={setContact}
          placeholder="Select Preference"
        />
        {showErrors && errors.contact && (
          <span className="error">{errors.contact}</span>
        )}
      </div>

      {/* Early Access Preference */}
      <div className="salutationSection">
        <label>Would you like early access to our platform?</label>
        <Select
          options={earlyAccessOptions}
          value={earlyAccess}
          onChange={setEarlyAccess}
          placeholder="Select"
        />
        {showErrors && errors.earlyAccess && (
          <span className="error">{errors.earlyAccess}</span>
        )}
      </div>

      {/* How Did You Hear About Us */}
      <div className="salutationSection">
        <label>How did you hear about us?</label>
        <Select
          options={sourceOptions}
          value={source}
          onChange={setSource}
          placeholder="Select"
        />
        {showErrors && errors.source && (
          <span className="error">{errors.source}</span>
        )}
      </div>

      {/* Newsletter Subscription Preference */}
      <div className="salutationSection">
        <label>
          Would you like to subscribe to our newsletter for the latest updates
          and offers?
        </label>
        <Select
          options={newsletterOptions}
          value={newsletter}
          onChange={setNewsletter}
          placeholder="Select"
        />
        {showErrors && errors.newsletter && (
          <span className="error">{errors.newsletter}</span>
        )}
      </div>

      <div className="salutationSection">
        <label>
          Would you like to confirm that we will share with you all our
          available properties for selling on daily and weekly basis?
        </label>
        <Select
          options={newsletterConfirmOptions}
          value={newsletterConfirm}
          onChange={setNewsletterConfirm}
          placeholder="Select"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="btnSection">
        {/* Next Step Button */}
        <div
          className={activeNextStep ? "btnNext activeNext" : "btnNext"}
          onClick={handleSubmit}
        >
          <p>Continue</p>
          <Image src={iconNextStep} alt="next step" />
        </div>

        {/* Back Button */}
        <div className="btnback" onClick={handleBackPage}>
          <p>Back</p>
          <Image src={iconNextStep} alt="next step" />
        </div>
      </div>
    </div>
  );
}

export default AccessAndUpdates;
