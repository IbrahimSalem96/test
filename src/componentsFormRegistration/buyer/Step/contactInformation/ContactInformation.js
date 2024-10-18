import React, { useState, useEffect } from "react";
import "./contactInformation.css";
import { Image } from "react-bootstrap";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Image imports
import iconNextStep from "../../../../assets/arrowIconNextStep.svg";
import arrowDown from "../../../../assets/arrowDown.svg";

const options = [
  { id: 0, value: "Mr", label: "Mr" },
  { id: 1, value: "Mrs", label: "Mrs" },
  { id: 2, value: "Other", label: "Other" },
];

function ContactInformation({
  setSalutation,
  setFirstName,
  setLastName,
  setMobileNumber,
  setWhatsappNumber,
  setEmail,
  setCheckbox1,
  setCheckbox2,
  setStepSelect,
  salutation,
  firstName,
  lastName,
  mobileNumber,
  whatsappNumber,
  email,
  checkbox1,
  checkbox2,
}) {
  const [formData, setFormData] = useState({
    salutation: salutation,
    firstName: firstName,
    lastName: lastName,
    mobileNumber: mobileNumber,
    whatsappNumber: whatsappNumber,
    email: email,
    consent1: checkbox1,
    consent2: checkbox2,
  });

  const [activeNextStep, setActiveNextStep] = useState(false);
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false); // State to control error visibility

  useEffect(() => {
    // Check if the form is valid and set the button state accordingly
    const isValid =
      formData.salutation &&
      formData.firstName &&
      formData.lastName &&
      formData.mobileNumber &&
      formData.whatsappNumber &&
      formData.email &&
      formData.consent1 &&
      formData.consent2;
    setActiveNextStep(isValid);
  }, [formData]);

  const showPhoneNumber = () => {
    const dropdownArrow = document.querySelector(".selected-flag .arrow");
    if (dropdownArrow) {
      dropdownArrow.click();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.salutation) tempErrors.salutation = "Salutation is required";
    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.mobileNumber)
      tempErrors.mobileNumber = "Mobile number is required";
    if (!formData.whatsappNumber)
      tempErrors.whatsappNumber = "WhatsApp number is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Valid email is required";
    if (!formData.consent1) tempErrors.consent1 = "Consent is required";
    if (!formData.consent2) tempErrors.consent2 = "Consent is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    setShowErrors(true); // Show errors when button is clicked
    if (validateForm()) {

      setSalutation(formData.salutation);
      setFirstName(formData.firstName);
      setLastName(formData.lastName);
      setMobileNumber(formData.mobileNumber);
      setWhatsappNumber(formData.whatsappNumber);
      setEmail(formData.email);
      setCheckbox1(true);
      setCheckbox2(true);

      setStepSelect(2);

      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log("Validation Failed");
    }
  };

  const [countryCodeValidation, setCountryCodeValidation] = useState("+971");
  const [whatsappNumberValidation, setWhatsappNumberValidation] =
    useState("+971");
  const handleCountryChange = (country) => {
    const newCountryCode = country
      ? `+${country.dialCode}`
      : countryCodeValidation;
    setCountryCodeValidation(newCountryCode);
  };

  const handleWhatsappNumberChange = (country) => {
    const newWhatsappNumber = country
      ? `+${country.dialCode}`
      : whatsappNumberValidation;
    setWhatsappNumberValidation(newWhatsappNumber);
  };

  return (
    <div className="stepField buyingAndSellingQcontactInformation">
      <div className="salutationSection">
        <label>Salutation</label>
        <Select
          options={options}
          placeholder="Select"
          value={salutation !== "" ? options[salutation.id] : ""}
          onChange={(selectedOption) =>
            setFormData({ ...formData, salutation: selectedOption })
          }
        />
        {showErrors && errors.salutation && (
          <span className="error">{errors.salutation}</span>
        )}
      </div>

      <div className="flexSection">
        <div className="inputSection">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            autoComplete="name"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {showErrors && errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>

        <div className="inputSection">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            autoComplete="name"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {showErrors && errors.lastName && (
            <span className="error">{errors.lastName}</span>
          )}
        </div>
      </div>

      <div className="flexSection">
        <div className="inputSection phonNmberSection">
          <label>Mobile Number</label>
          <div className="boxContnet">
            <PhoneInput
              name="mobileNumber"
              country={"ae"}
              value={formData.mobileNumber}
              autoComplete="tel"
              onChange={(value) => handlePhoneChange(value, "mobileNumber")}
              onCountryChange={handleCountryChange}
              countryCodeEditable={false}
            />
            <Image
              src={arrowDown}
              alt="arrow down"
              onClick={() => showPhoneNumber()}
            />
          </div>
          {showErrors && errors.mobileNumber && (
            <span className="error">{errors.mobileNumber}</span>
          )}
        </div>

        <div className="inputSection phonNmberSection">
          <label>WhatsApp Number</label>
          <div className="boxContnet">
            <PhoneInput
              name="whatsappNumber"
              country={"ae"}
              value={formData.whatsappNumber}
              onChange={(value) => handlePhoneChange(value, "whatsappNumber")}
              autoComplete="tel"
              onCountryChange={handleWhatsappNumberChange}
              countryCodeEditable={false}
            />
            <Image
              src={arrowDown}
              alt="arrow down"
              onClick={() => showPhoneNumber()}
            />
          </div>
          {showErrors && errors.whatsappNumber && (
            <span className="error">{errors.whatsappNumber}</span>
          )}
        </div>
      </div>

      <div className="inputSection">
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          className="emailSection"
          onChange={handleInputChange}
        />
        {showErrors && errors.email && (
          <span className="error">{errors.email}</span>
        )}
      </div>

      <div className="approvalsSection">
        <label className="custom-checkbox">
          <input
            className="checkbox-input"
            type="checkbox"
            name="consent1"
            checked={formData.consent1}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox"></span>
          <p>
            I understand that my information will remain confidential, will not
            be shared or sold to any third party, and will be managed in
            compliance with THE GENUINE PLATFORM’s Privacy Policy.
          </p>
        </label>
        {showErrors && errors.consent1 && (
          <span className="error">{errors.consent1}</span>
        )}

        <label className="custom-checkbox">
          <input
            className="checkbox-input"
            type="checkbox"
            name="consent2"
            checked={formData.consent2}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox"></span>
          <p>
            By submitting this form, I agree to provide my contact details for
            communication and updates regarding THE GENUINE PLATFORM, and I
            consent to being contacted via email, phone, or other communication
            methods.
          </p>
        </label>
        {showErrors && errors.consent2 && (
          <span className="error">{errors.consent2}</span>
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
      </div>
    </div>
  );
}

export default ContactInformation;
