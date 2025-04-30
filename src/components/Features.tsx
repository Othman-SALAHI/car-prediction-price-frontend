
import { Cpu, LineChart, Shield, Sparkles, TrendingUp, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "AI-Powered Analysis",
      description: "Our algorithms analyze market trends and historical data to deliver accurate predictions."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Real-time Updates",
      description: "Get the most up-to-date predictions based on current market conditions and trends."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Visual Insights",
      description: "View predictions through intuitive charts and graphs to understand market movements."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Data",
      description: "Your data is protected with enterprise-grade security and encryption protocols."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Fast Processing",
      description: "Get predictions in seconds with our optimized processing infrastructure."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Customizable Models",
      description: "Adjust parameters to tailor predictions to your specific needs and scenarios."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our price prediction tool can transform your decision-making with these powerful capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
