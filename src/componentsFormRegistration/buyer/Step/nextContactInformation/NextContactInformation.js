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
  countryOfResidence,
  preferredLanguage,
}) {
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const countries = getCountries().getData();
  const [activeNextStep, setActiveNextStep] = useState(false);

  const handleChangeCountry = (selectedOption) => {
    setCountryOfResidence(selectedOption);
  };

  const handleChangeLanguage = (selectedOption) => {
    setPreferredLanguage(selectedOption);
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!countryOfResidence)
      tempErrors.country = "Country of residence is required.";
    if (!preferredLanguage)
      tempErrors.language = "Preferred language is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    setShowErrors(true); // Show errors when button is clicked
    if (validateForm()) {
      setCountryOfResidence(countryOfResidence);
      setPreferredLanguage(preferredLanguage);

      setStepSelect(3);

      window.scrollTo({ top: 0, behavior: "smooth" });
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
    const isValid = countryOfResidence && preferredLanguage;
    setActiveNextStep(isValid);
  }, [countryOfResidence, preferredLanguage]); // Trigger effect when selectedCountry or selectedLanguage changes

  return (
    <div className="stepField buyingAndSellingQnextContactInformation">
      <div className="salutationSection">
        <label>Country of Residence</label>
        <Select
          closeMenuOnSelect={false}
          options={countries}
          value={countryOfResidence}
          onChange={handleChangeCountry}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
          placeholder="Select a country..."
          name="countryOfResidence"
          autoComplete="Country"
          isMulti
          components={customComponents}
        />
        {showErrors && errors.country && (
          <span className="error">{errors.country}</span>
        )}
      </div>

      <div className="salutationSection">
        <label>Preferred Language</label>
        <Select
          closeMenuOnSelect={false}
          options={languages}
          value={preferredLanguage}
          onChange={handleChangeLanguage}
          placeholder="Select a language..."
          isMulti
          components={customComponents}
        />
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
