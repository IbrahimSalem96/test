import "./nextContactInformation.css";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import getCountries from "react-select-country-list";
import "react-phone-input-2/lib/style.css";

// Image
import iconNextStep from "../../../../assets/arrowIconNextStep.svg";

const languages = [
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "de", label: "German" },
  { value: "zh", label: "Chinese" },
  { value: "ru", label: "Russian" },
  { value: "pt", label: "Portuguese" },
  { value: "it", label: "Italian" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "hi", label: "Hindi" },
  { value: "bn", label: "Bengali" },
  { value: "pl", label: "Polish" },
  { value: "nl", label: "Dutch" },
  { value: "tr", label: "Turkish" },
  { value: "th", label: "Thai" },
  { value: "sv", label: "Swedish" },
  { value: "da", label: "Danish" },
  { value: "fi", label: "Finnish" },
  { value: "no", label: "Norwegian" },
  { value: "hu", label: "Hungarian" },
  { value: "ro", label: "Romanian" },
  { value: "cs", label: "Czech" },
  { value: "sk", label: "Slovak" },
  { value: "vi", label: "Vietnamese" },
  { value: "el", label: "Greek" },
  { value: "he", label: "Hebrew" },
  { value: "ur", label: "Urdu" },
  { value: "sw", label: "Swahili" },
];

function NextContactInformation({
  setStepSelect,
  setCountryOfResidence,
  setPreferredLanguage,
}) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const countries = getCountries().getData();
  const [activeNextStep, setActiveNextStep] = useState(false);

  const handleChangeCountry = (selectedOption) => {
    setSelectedCountry(selectedOption);
    // console.log("Selected country:", selectedOption);
  };

  const handleChangeLanguage = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    // console.log("Selected language:", selectedOption);
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!selectedCountry)
      tempErrors.country = "Country of residence is required.";
    if (!selectedLanguage)
      tempErrors.language = "Preferred language is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    setShowErrors(true); // Show errors when button is clicked
    if (validateForm()) {
      setCountryOfResidence(selectedCountry);
      setPreferredLanguage(selectedLanguage);

      setStepSelect(3);
    } else {
      console.log("Validation Failed");
    }
  };

  const customComponents = {
    ClearIndicator: () => null,
  };
  

  const handleBackPage = () => {
    setStepSelect(1);
  };

  // Use useEffect to check the validity of the form and set the button state accordingly
  useEffect(() => {
    const isValid = selectedCountry && selectedLanguage;
    setActiveNextStep(isValid);
  }, [selectedCountry, selectedLanguage]); // Trigger effect when selectedCountry or selectedLanguage changes

  return (
    <div className="stepField buyingAndSellingQnextContactInformation">
      <div className="salutationSection">
        <label>Country of Residence</label>
        <Select
          options={countries}
          value={selectedCountry}
          onChange={handleChangeCountry}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
          placeholder="Select a country..."
          name="countryOfResidence"
          autoComplete="Country"
          isMulti
          components={customComponents}
        />
        <p className="labelSelectMultiOptions">
          You can choose more than one option.
        </p>
        {showErrors && errors.country && (
          <span className="error">{errors.country}</span>
        )}
      </div>

      <div className="salutationSection">
        <label>Preferred Language</label>
        <Select
          options={languages}
          value={selectedLanguage}
          onChange={handleChangeLanguage}
          placeholder="Select a language..."
          isMulti
          components={customComponents}
        />
        <p className="labelSelectMultiOptions">
          You can choose more than one option.
        </p>
        {showErrors && errors.language && (
          <span className="error">{errors.language}</span>
        )}
      </div>

      <div className="btnSection">
        <div
          className={activeNextStep ? "btnNext activeNext" : "btnNext"}
          onClick={handleSubmit}
        >
          <p>Continue</p>
          <Image src={iconNextStep} alt="next step" />
        </div>

        <div className="btnback" onClick={handleBackPage}>
          <p>Back</p>
          <Image src={iconNextStep} alt="next step" />
        </div>
      </div>
    </div>
  );
}

export default NextContactInformation;
