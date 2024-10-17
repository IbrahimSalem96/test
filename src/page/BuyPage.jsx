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
  JoinUs,
  SellYourFeesForever,
  Footer,
} from "../components/index";

const buyingAndSelling = () => {
  return (
    <>
      <div className="SellPageBox">
        <Header />
        <JoinUs />

        <ScrollSown />

        <BuyingWithTheGunuine />

        <TrustedVerifiedPricing />

        <FixedSellingPriceBuy />

        <SmartViewing />

        <AuthenticListings />

        <AdvancedFiltering />

        <SellYourFeesForever />

        <TheExperienceSection />

        <GenuineSection />

        <Footer />
      </div>
    </>
  );
};

export default buyingAndSelling;
