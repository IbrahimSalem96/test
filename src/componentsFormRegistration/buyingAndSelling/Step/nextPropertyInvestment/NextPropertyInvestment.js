import "./nextPropertyInvestment.css";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";

// Image
import iconNextStep from "../../../../assets/arrowIconNextStep.svg";

// Options for primary reason and financing method
const reasonOptions = [
  { value: "Personal use (To live in)", label: "Personal use (To live in)" },
  {
    value: "Investment (For resale/flip)",
    label: "Investment (For resale/flip)",
  },
  {
    value: "Investment (For rental income)",
    label: "Investment (For rental income)",
  },
  { value: "Other", label: "Other" },
];

const financingOptions = [
  { value: "Cash", label: "Cash" },
  { value: "Mortgage", label: "Mortgage" },
  { value: "Other", label: "Other" },
];

const mortgageOptions = [
  {
    value: "Yes, I already have pre-approval",
    label: "Yes, I already have pre-approval",
  },
  {
    value: "No, I don’t have pre-approval and would like your free assistance",
    label: "No, I don’t have pre-approval and would like your free assistance",
  },
  {
    value: "No, I don’t have pre-approval and don’t need assistance",
    label: "No, I don’t have pre-approval and don’t need assistance",
  },
  { value: "Other", label: "Other" },
];

function NextPropertyInvestment({
  setStepSelect,
  setPrimaryReason,
  setFinancingMethod,
  setMortgagePreApproval,
  primaryReason,
  financingMethod,
  mortgagePreApproval,
}) {
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [showMortgageOptions, setShowMortgageOptions] = useState(false);
  const [activeNextStep, setActiveNextStep] = useState(false);

  // Check if all required fields are filled to activate the Next button
  useEffect(() => {
    if (
      primaryReason &&
      financingMethod &&
      (financingMethod.value !== "Mortgage" || mortgagePreApproval)
    ) {
      setActiveNextStep(true);
    } else {
      setActiveNextStep(false);
    }
  }, [primaryReason, financingMethod, mortgagePreApproval]);

  // Ensure mortgage options remain visible if financing method is Mortgage
  useEffect(() => {
    if (financingMethod?.value === "Mortgage") {
      setShowMortgageOptions(true);
    } else {
      setShowMortgageOptions(false);
    }
  }, [financingMethod]);

  // Validate the form to ensure all required fields are filled
  const validateForm = () => {
    let tempErrors = {};
    if (!primaryReason)
      tempErrors.primaryReason = "Reason for buying is required.";
    if (!financingMethod)
      tempErrors.financingMethod = "Financing method is required.";
    if (financingMethod?.value === "Mortgage" && !mortgagePreApproval)
      tempErrors.mortgagePreApproval = "Mortgage status is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    setShowErrors(true);
    if (validateForm()) {
      setPrimaryReason(primaryReason);
      setFinancingMethod(financingMethod);
      setMortgagePreApproval(mortgagePreApproval);

      setStepSelect(6);

      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log("Validation Failed");
    }
  };

  // Handle financing option change and display mortgage options if needed
  const handleFinancingChange = (selectedOption) => {
    setFinancingMethod(selectedOption);
    setMortgagePreApproval(false);
    setShowMortgageOptions(selectedOption?.value === "Mortgage");
  };

  // Handle going back to the previous page
  const handleBackPage = () => {
    setStepSelect(4);
  };

  const customComponents = {
    ClearIndicator: () => null,
  };

  return (
    <div className="stepField buyingAndSellingQnextPropertyInvestment">
      {/* Primary Reason for Buying */}
      <div className="salutationSection">
        <label>What is your primary reason for buying?</label>
        <Select
          closeMenuOnSelect={false}
          options={reasonOptions}
          value={primaryReason}
          onChange={(selectedOptions) => setPrimaryReason(selectedOptions)}
          placeholder="Select Reason"
          components={customComponents}
          isMulti
        />
        {showErrors && errors.primaryReason && (
          <span className="error">{errors.primaryReason}</span>
        )}
      </div>

      {/* Financing Method */}
      <div className="salutationSection">
        <label>How will you be financing the purchase?</label>
        <Select
          options={financingOptions}
          value={financingMethod}
          onChange={handleFinancingChange}
          placeholder="Select Financing Method"
        />
        {showErrors && errors.financingMethod && (
          <span className="error">{errors.financingMethod}</span>
        )}
      </div>

      {/* Mortgage Options (If selected Mortgage) */}
      {showMortgageOptions && (
        <div className="salutationSection">
          <label>
            If using a mortgage, do you already have pre-approval, or would you
            like our free assistance to obtain it?
          </label>
          <Select
            options={mortgageOptions}
            value={mortgagePreApproval}
            onChange={setMortgagePreApproval}
            placeholder="Select Mortgage Status"
          />
          {showErrors && errors.mortgagePreApproval && (
            <span className="error">{errors.mortgagePreApproval}</span>
          )}
        </div>
      )}

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

export default NextPropertyInvestment;
