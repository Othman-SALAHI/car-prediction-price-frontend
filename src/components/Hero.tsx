
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToTool = () => {
    const element = document.getElementById('prediction-tool');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-accent text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYyaDR2MmgtNHptMCAxNmgtMnYtOGgydjhoLTR2MmgxMHYtMmgtNnYtMnoiLz48cGF0aCBkPSJNMjAgMTJoMnYxMmgtMnYtMTJ6bS0uNiAxN2gydjVoLTJ2LTV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Smart Price Prediction <br/>
              <span className="text-accent-foreground">Made Simple</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
              Get accurate price predictions powered by machine learning. Whether you're a business owner or consumer, make informed decisions with PriceWhisperer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                variant="secondary"
                className="font-semibold" 
                onClick={scrollToTool}
              >
                Try It Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl"></div>
              <div className="glass-card p-6 animate-float">
                <div className="bg-white/90 p-4 rounded-lg shadow-sm">
                  <div className="h-40 w-full bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-primary text-lg font-semibold">Price Prediction Chart</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-primary/10 rounded-full w-3/4"></div>
                    <div className="h-4 bg-primary/10 rounded-full w-full"></div>
                    <div className="h-4 bg-primary/10 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features">
            <ArrowDownCircle className="text-white/80 h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
