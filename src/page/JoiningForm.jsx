// Image

import {
  HeaderForm,
  JoiningFormSection,
  FooterForm,
} from "../componentsFormRegistration/index";

const JoiningForm = () => {
  return (
    <>
      <div className="joiningFormSection">
        <HeaderForm />

        <JoiningFormSection />

        <FooterForm />
      </div>
    </>
  );
};

export default JoiningForm;
