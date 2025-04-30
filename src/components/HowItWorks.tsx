
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Input Parameters",
      description: "Enter your key data points such as product specifics, market conditions, and other relevant factors."
    },
    {
      number: "02",
      title: "AI Processing",
      description: "Our machine learning models analyze your inputs against historical data and current market trends."
    },
    {
      number: "03",
      title: "Generate Prediction",
      description: "Receive a comprehensive price prediction with confidence intervals and supporting data visualizations."
    },
    {
      number: "04",
      title: "Make Decisions",
      description: "Use the insights to make informed pricing decisions, negotiations, or investment choices."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process delivers accurate price predictions in just four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-accent to-primary/20 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block text-accent h-6 w-6" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
