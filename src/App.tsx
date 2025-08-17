import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./sections/HomeSection";
import MissionSection from "./sections/MissionSection";
import MilestonesSection from "./sections/MilestonesSection";
import TechSection from "./sections/TechSection";
import ContactSection from "./sections/ContactSection";
import UploadSection from "./sections/UploadSection";
import ModelComparison from "./sections/ModelComparison";
import Footer from "./components/Footer";
import BlogSection from "./sections/BlogSection";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <MissionSection />
        <MilestonesSection />
        <TechSection />
        <BlogSection />
        <div id="model-comparison">
          <ModelComparison />
        </div>
        <UploadSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
