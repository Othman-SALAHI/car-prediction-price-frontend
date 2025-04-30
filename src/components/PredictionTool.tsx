
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { LineChart, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PredictionTool = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    productType: "",
    currentPrice: "",
    marketTrend: "stable",
    seasonality: "none",
    quantity: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.productType || !formData.currentPrice || !formData.quantity) {
      toast({
        title: "Validation Error",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
      toast({
        title: "Prediction Generated",
        description: "Your price prediction has been successfully generated.",
      });
    }, 1500);
  };

  return (
    <section id="prediction-tool" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Price Prediction Tool</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Try our prediction tool to get an estimate of future prices based on your inputs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Fill in the details to get a price prediction</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="productType">Product Type</Label>
                  <Input 
                    id="productType" 
                    name="productType"
                    placeholder="e.g. Electronics, Clothing, Real Estate" 
                    value={formData.productType}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="currentPrice">Current Price ($)</Label>
                  <Input 
                    id="currentPrice" 
                    name="currentPrice"
                    type="number" 
                    placeholder="Enter current price" 
                    value={formData.currentPrice}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="marketTrend">Market Trend</Label>
                  <Select
                    value={formData.marketTrend}
                    onValueChange={(value) => handleSelectChange("marketTrend", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select market trend" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rising">Rising (Bull Market)</SelectItem>
                      <SelectItem value="stable">Stable</SelectItem>
                      <SelectItem value="declining">Declining (Bear Market)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="seasonality">Seasonality</Label>
                  <Select
                    value={formData.seasonality}
                    onValueChange={(value) => handleSelectChange("seasonality", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select seasonality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="high">High Season</SelectItem>
                      <SelectItem value="low">Low Season</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input 
                    id="quantity" 
                    name="quantity"
                    type="number" 
                    placeholder="Enter quantity" 
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Generate Prediction"} 
                  {!loading && <ChevronRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className={`shadow-lg border-0 ${!showResult ? 'bg-white/50' : 'bg-white'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                Prediction Results
              </CardTitle>
              <CardDescription>
                {showResult 
                  ? "Here's your predicted price range based on the inputs"
                  : "Complete the form to see prediction results"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showResult ? (
                <div className="h-[350px] flex flex-col items-center justify-center text-center p-8">
                  <LineChart className="h-16 w-16 text-gray-300 mb-4" />
                  <p className="text-gray-500">Fill in the parameters on the left and click "Generate Prediction" to see results</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Predicted Price Range</h3>
                    <div className="mt-2 p-4 bg-green-50 border border-green-100 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Low</span>
                        <span className="text-gray-600">High</span>
                      </div>
                      <div className="relative h-6 mt-2 bg-green-100 rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 left-[20%] right-[20%] h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                        ></div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="font-medium">${(parseFloat(formData.currentPrice) * 0.9).toFixed(2)}</span>
                        <span className="font-medium">${(parseFloat(formData.currentPrice) * 1.1).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Confidence Level</p>
                      <p className="text-lg font-medium">85%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Predicted Change</p>
                      <p className="text-lg font-medium text-green-600">+5.2%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time Frame</p>
                      <p className="text-lg font-medium">30 days</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Market Volatility</p>
                      <p className="text-lg font-medium">Medium</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Factors Influencing Prediction</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Seasonal demand increase</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                        <span>Current market trend direction</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-amber-500 rounded-full mr-2"></div>
                        <span>Historical price patterns</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PredictionTool;
