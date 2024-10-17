import "./propertyInvestment.css";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";

// Image
import iconNextStep from "../../../../assets/arrowIconNextStep.svg";

// Options for property type, emirate, and property status
const propertyTypeOptions = [
  { value: "Apartment", label: "Apartment" },
  { value: "Villa", label: "Villa" },
  { value: "Townhouse", label: "Townhouse" },
];

const emirateOptions = [
  { value: "Dubai", label: "Dubai" },
  { value: "Abu Dhabi", label: "Abu Dhabi" },
  { value: "Sharjah", label: "Sharjah" },
];

const customComponents = {
  ClearIndicator: () => null, // Hide the "Close" indicator that appears on open
};

const propertyStatusOptions = [
  { value: "Ready", label: "Ready" },
  { value: "Off-plan", label: "Off-plan" },
];

function PropertyInvestment({
  setStepSelect,
  setPropertyTypeSave,
  setInterestedEmirateSave,
  setPropertyStatusSave,
  setEstimatedBudgetFromSave,
  setEstimatedBudgetToSave,
}) {
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [propertyType, setPropertyType] = useState(null);
  const [emirate, setEmirate] = useState([]);
  const [propertyStatus, setPropertyStatus] = useState([]);
  const [budgetFrom, setBudgetFrom] = useState("");
  const [budgetTo, setBudgetTo] = useState("");
  const [activeNextStep, setActiveNextStep] = useState(false);

  // Check if all required fields are filled to activate the Next button
  useEffect(() => {
    if (
      propertyType &&
      emirate.length > 0 &&
      propertyStatus.length > 0 &&
      budgetFrom &&
      budgetTo
    ) {
      setActiveNextStep(true);
    } else {
      setActiveNextStep(false);
    }
  }, [propertyType, emirate, propertyStatus, budgetFrom, budgetTo]);

  // Validate the form to ensure all required fields are filled
  const validateForm = () => {
    let tempErrors = {};
    if (!propertyType) tempErrors.propertyType = "Property type is required.";
    if (emirate.length === 0)
      tempErrors.emirate = "Emirate selection is required.";
    if (propertyStatus.length === 0)
      tempErrors.propertyStatus = "Property status is required.";
    if (!budgetFrom) tempErrors.budgetFrom = "Budget From is required.";
    if (!budgetTo) tempErrors.budgetTo = "Budget To is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    setShowErrors(true); // Show errors when button is clicked
    if (validateForm()) {
      setPropertyTypeSave(propertyType);
      setInterestedEmirateSave(emirate);
      setPropertyStatusSave(propertyStatus);
      setEstimatedBudgetFromSave(budgetFrom);
      setEstimatedBudgetToSave(budgetTo);

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
    <div className="stepField buyingPageQpropertyInvestment">
      {/* Property Type */}
      <div className="salutationSection">
        <label>What type of property are you interested in?</label>
        <Select
          options={propertyTypeOptions}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="Select Property Type"
        />
        {showErrors && errors.propertyType && (
          <span className="error">{errors.propertyType}</span>
        )}
      </div>

      {/* Emirate */}
      <div className="salutationSection salutationSectionMultiplSelect">
        <label>In which emirate are you interested to buy?</label>
        <Select
          options={emirateOptions}
          value={emirate}
          onChange={setEmirate}
          placeholder="Select Emirate"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.emirate && (
          <span className="error">{errors.emirate}</span>
        )}
      </div>

      {/* Property Status */}
      <div className="salutationSection">
        <label>What is your preferred property status?</label>
        <Select
          options={propertyStatusOptions}
          value={propertyStatus}
          onChange={setPropertyStatus}
          placeholder="Select Property Status"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.propertyStatus && (
          <span className="error">{errors.propertyStatus}</span>
        )}
      </div>

      {/* Budget Range */}
      <div className="flexSection budgetRange">
        <div className="inputSection">
          <label>Estimated investment amount (Budget Range) ?</label>
          <div className="boxSpan">
            <input
              type="number"
              value={budgetFrom}
              onChange={(e) => setBudgetFrom(e.target.value)}
              placeholder="From"
              maxLength={12}
            />
            <span>AED</span>
          </div>
          {showErrors && errors.budgetFrom && (
            <span className="error">{errors.budgetFrom}</span>
          )}
        </div>

        <div className="inputSection">
          <div className="boxSpan">
            <input
              type="number"
              value={budgetTo}
              onChange={(e) => setBudgetTo(e.target.value)}
              placeholder="To"
              maxLength={12}
            />
            <span>AED</span>
          </div>
          {showErrors && errors.budgetTo && (
            <span className="error">{errors.budgetTo}</span>
          )}
        </div>
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

export default PropertyInvestment;
