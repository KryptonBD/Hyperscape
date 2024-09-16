import { FeatureSection } from "./components/FeatureSection";
import { HeroSection } from "./components/Herosection";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </>
  );
};
