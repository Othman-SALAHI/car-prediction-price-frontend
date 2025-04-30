import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <Navbar onGetStarted={handleGetStarted} onBack={handleBack} />
      <main className="flex-grow">
        {showForm ? (
                      <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full absolute"
                    >
                      <PredictionForm onBack={handleBack} />
                    </motion.div>
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        )}
      </main>
      {!showForm && <Footer />}
    </div>
  );
};

export default Index;
