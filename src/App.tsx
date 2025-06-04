import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { HeroSection } from "./components/HeroSection";
import { HowWorksSection } from "./components/HowWorksSection";
import { TopDestinationSection } from "./components/TopDestinationSection";

import { PackageCarousel } from "./components/PackageCarousel";
import { DoYouHaveAnQuestionSection } from "./components/DoYouHaveAnQuestionSection";
import { ConnectUs } from "./components/ConnectUs";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <HeroSection />
        <WhyChooseUsSection />
        <HowWorksSection />
        <TopDestinationSection />
        <PackageCarousel />
        <DoYouHaveAnQuestionSection />
        <ConnectUs />
        <hr className="text-gray-300" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
