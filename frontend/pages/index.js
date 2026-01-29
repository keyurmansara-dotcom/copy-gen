import Header from "../components/Header";
import Hero from "../components/Hero";
import GeneratorBox from "../components/GeneratorBox";
import FeaturesSection  from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/pricingSection";  
import FAQSection from "../components/FAQSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <GeneratorBox />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
