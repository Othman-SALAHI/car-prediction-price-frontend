
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import PredictionForm from "@/components/PredictionForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
    // Scroll to top when switching views
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setShowForm(false);
    // Scroll to top when switching views
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {showForm ? (
          <PredictionForm onBack={handleBack} />
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        )}
      </main>
      {!showForm && <Footer />}
    </div>
  );
};

export default Index;
