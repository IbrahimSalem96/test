import "./accessAndUpdates.css";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";

// Image
import iconNextStep from "../../../../assets/arrowIconNextStep.svg";

// Options for contact and early access
const contactOptions = [
  { value: "Yes", label: "Yes" },
  { value: "Maybe", label: "Maybe" },
  { value: "No", label: "No" },
];

const earlyAccessOptions = [
  { value: "Yes", label: "Yes" },
  { value: "Maybe", label: "Maybe" },
  { value: "No", label: "No" },
];

// Options for how did you hear about us
const sourceOptions = [
  { value: "Social Media", label: "Social Media" },
  { value: "Friend/Referral", label: "Friend/Referral" },
  { value: "Search Engine", label: "Search Engine" },
  { value: "Advertisement", label: "Advertisement" },
  { value: "Other", label: "Other" },
];

// Options for newsletter subscription
const newsletterOptions = [
  { value: "Yes", label: "Yes" },
  { value: "Maybe", label: "Maybe" },
  { value: "No", label: "No" },
];

const whatsAppCommunityOptions = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

function AccessAndUpdates({
  setStepSelect,
  setContactPermission,
  setEarlyAccessSave,
  setReferralSource,
  setSubscribeNewsletter,
}) {
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [contact, setContact] = useState(null);
  const [earlyAccess, setEarlyAccess] = useState(null);
  const [source, setSource] = useState(null);
  const [newsletter, setNewsletter] = useState(null);
  const [whatsAppCommunity, setWhatsAppCommunity] = useState(null);
  const [activeNextStep, setActiveNextStep] = useState(false);

  // Check if all required fields are filled to activate the Next button
  useEffect(() => {
    if (contact && earlyAccess && source && newsletter && whatsAppCommunity) {
      setActiveNextStep(true);
    } else {
      setActiveNextStep(false);
    }
  }, [contact, earlyAccess, source, newsletter, whatsAppCommunity]);

  // Validate the form to ensure all required fields are filled
  const validateForm = () => {
    let tempErrors = {};
    if (!contact) tempErrors.contact = "Contact preference is required.";
    if (!earlyAccess)
      tempErrors.earlyAccess = "Early access preference is required.";
    if (!source) tempErrors.source = "Source of information is required.";
    if (!newsletter)
      tempErrors.newsletter = "Newsletter subscription preference is required.";
    if (!whatsAppCommunity)
      tempErrors.whatsAppCommunity =
        "WhatsApp Community subscription preference is required.";

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

      setStepSelect(5);
    } else {
      console.log("Validation Failed");
    }
  };

  // Handle going back to the previous page
  const handleBackPage = () => {
    setStepSelect(3);
  };

  return (
    <div className="stepField buyingPageQaccessAndUpdates">
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
          placeholder="Select Preference"
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
          placeholder="Select Source"
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
          placeholder="Select Preference"
        />
        {showErrors && errors.newsletter && (
          <span className="error">{errors.newsletter}</span>
        )}
      </div>

      {/* WhatsApp community */}
      <div className="salutationSection">
        <label>
          We are creating a dedicated WhatsApp community to keep you informed
          about available property listings and company updates. Would you like
          to be enrolled in this group?
        </label>
        <Select
          options={whatsAppCommunityOptions}
          value={whatsAppCommunity}
          onChange={setWhatsAppCommunity}
          placeholder="Select"
        />
        {showErrors && errors.whatsAppCommunity && (
          <span className="error">{errors.whatsAppCommunity}</span>
        )}
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
