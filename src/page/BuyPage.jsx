// Image

import {
  Header,
  BuyingWithTheGunuine,
  TrustedVerifiedPricing,
  FixedSellingPriceBuy,
  SmartViewing,
  AdvancedFiltering,
  AuthenticListings,
  GenuineSection,
  TheExperienceSection,
  ScrollSown,
  Footer,
} from "../components/index";

const buyingAndSelling = () => {
  return (
    <>
      <div className="SellPageBox">
        <Header />

        <ScrollSown />

        <BuyingWithTheGunuine />

        <TrustedVerifiedPricing />

        <FixedSellingPriceBuy />

        <SmartViewing />

        <AuthenticListings />

        <AdvancedFiltering />

        <TheExperienceSection />

        <GenuineSection />

        <Footer />
      </div>
    </>
  );
};

export default buyingAndSelling;
