import "./communication.css";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";

// Image
import iconNextStep from "../../../../assets/arrowIconNextStep.svg";

// Options for communication methods, days, and times
const methodOptions = [
  { value: "Email", label: "Email" },
  { value: "Phone", label: "Phone" },
  { value: "Message on WhatsApp", label: "Message on WhatsApp" },
];

const daysOptions = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
];

const timesOptions = [
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
];

const customComponents = {
  ClearIndicator: () => null,
};

function Communication({
  setStepSelect,
  setPreferredMethodSave,
  setPreferredDaysSave,
  setPreferredTimesSave,
}) {
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [preferredMethod, setPreferredMethod] = useState(null);
  const [preferredDays, setPreferredDays] = useState([]);
  const [preferredTimes, setPreferredTimes] = useState([]);
  const [activeNextStep, setActiveNextStep] = useState(false);

  // Check if all required fields are filled to activate the Next button
  useEffect(() => {
    if (
      preferredMethod &&
      preferredDays.length > 0 &&
      preferredTimes.length > 0
    ) {
      setActiveNextStep(true);
    } else {
      setActiveNextStep(false);
    }
  }, [preferredMethod, preferredDays, preferredTimes]);

  // Validate the form to ensure all required fields are filled
  const validateForm = () => {
    let tempErrors = {};
    if (!preferredMethod)
      tempErrors.preferredMethod =
        "Preferred method of communication is required.";
    if (preferredDays.length === 0)
      tempErrors.preferredDays = "Preferred communication days are required.";
    if (preferredTimes.length === 0)
      tempErrors.preferredTimes = "Preferred communication times are required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    setShowErrors(true); // Show errors when button is clicked
    if (validateForm()) {
      setPreferredMethodSave(preferredMethod);
      setPreferredDaysSave(preferredDays);
      setPreferredTimesSave(preferredTimes);

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
      {/* Preferred Method of Communication */}
      <div className="salutationSection">
        <label>Select Your Preferred Method of Communication:</label>
        <Select
          options={methodOptions}
          value={preferredMethod}
          onChange={setPreferredMethod}
          placeholder="Select Method"
        />
        {showErrors && errors.preferredMethod && (
          <span className="error">{errors.preferredMethod}</span>
        )}
      </div>

      {/* Preferred Communication Days */}
      <div className="salutationSection">
        <label>Preferred Communication Days:</label>
        <Select
          options={daysOptions}
          value={preferredDays}
          onChange={setPreferredDays}
          placeholder="Select Days"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.preferredDays && (
          <span className="error">{errors.preferredDays}</span>
        )}
      </div>

      {/* Preferred Communication Times */}
      <div className="salutationSection">
        <label>Preferred Communication Times:</label>
        <Select
          options={timesOptions}
          value={preferredTimes}
          onChange={setPreferredTimes}
          placeholder="Select Times"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.preferredTimes && (
          <span className="error">{errors.preferredTimes}</span>
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

export default Communication;
