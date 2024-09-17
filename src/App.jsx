import { FeatureSection } from "./components/FeatureSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/Herosection";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonial";
import { Workflow } from "./components/Workflow";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};
