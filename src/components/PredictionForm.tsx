
import React, { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { toast } from "sonner";
import axios from 'axios';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Car, Gauge, Calendar, Fuel } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PredictionFormProps {
  onBack: () => void;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onBack }) => {
  const { toast: uiToast } = useToast();
  
  const [marques, setMarques] = useState<string[]>([]);
  const [gears, setGears] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedMarque, setSelectedMarque] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedGear, setSelectedGear] = useState<string>('');
  const [selectedFuel, setSelectedFuel] = useState<string>('');
  const [premierMain, setPremierMain] = useState<string>('1');
  const [kilometrage, setKilometrage] = useState<string>('');
  const [annee, setAnnee] = useState<string>('');
  const [cv, setCv] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    // Fetch marques
    axios.get('http://127.0.0.1:5001/v1/details/marques')
      .then(res => setMarques(Array.isArray(res.data) ? res.data : []))
      .catch(err => {
        console.error("Error fetching marques:", err);
        toast.error("Erreur lors du chargement des marques");
      });

    // Fetch gears
    axios.get('http://127.0.0.1:5001/v1/details/gear')
      .then(res => setGears(Array.isArray(res.data) ? res.data : []))
      .catch(err => {
        console.error("Error fetching gears:", err);
        toast.error("Erreur lors du chargement des transmissions");
      });
  }, []);

  const handleMarqueChange = (value: string) => {
    setSelectedMarque(value);
    setSelectedModel('');
    
    if (value) {
      axios.get(`http://127.0.0.1:5001/v1/details/${value}/models`)
        .then(res => setModels(Array.isArray(res.data) ? res.data : []))
        .catch(err => {
          console.error("Error fetching models:", err);
          toast.error("Erreur lors du chargement des modèles");
        });
    } else {
      setModels([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedMarque || !selectedModel || !selectedGear || !selectedFuel || 
        !kilometrage || !annee || !cv) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);

    const payload = {
      selectedGear: selectedGear,
      selectedFuel: selectedFuel,
      marques: selectedMarque,
      models: selectedModel,
      premierMain: premierMain,
      kilometrage: parseFloat(kilometrage),
      annee: parseInt(annee),
      cv: parseInt(cv)
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setResult(response.data.price);
      toast.success("Prédiction réussie!");
    } catch (error) {
      console.error("Prediction failed:", error);
      toast.error("Échec de la prédiction. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <Button 
        onClick={onBack} 
        variant="outline" 
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Retour
      </Button>
      
      <Card className="glass-card border-none shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Prédiction de Prix</CardTitle>
          <CardDescription>Estimez la valeur de votre voiture en quelques clics</CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="marque" className="flex items-center gap-2">
                  <Car className="h-4 w-4" /> Marque
                </Label>
                <Select 
                  value={selectedMarque} 
                  onValueChange={handleMarqueChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une marque" />
                  </SelectTrigger>
                  <SelectContent>
                    {marques.map((marque, idx) => (
                      <SelectItem key={idx} value={marque}>
                        {marque}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="model" className="flex items-center gap-2">
                  <Car className="h-4 w-4" /> Modèle
                </Label>
                <Select 
                  value={selectedModel} 
                  onValueChange={setSelectedModel}
                  disabled={!selectedMarque || models.length === 0}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un modèle" />
                  </SelectTrigger>
                  <SelectContent>
                    {models.map((model, idx) => (
                      <SelectItem key={idx} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gear" className="flex items-center gap-2">
                  <Gauge className="h-4 w-4" /> Transmission
                </Label>
                <Select 
                  value={selectedGear} 
                  onValueChange={setSelectedGear}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    {gears.map((gear, idx) => (
                      <SelectItem key={idx} value={gear}>
                        {gear}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fuel" className="flex items-center gap-2">
                  <Fuel className="h-4 w-4" /> Carburant
                </Label>
                <Select 
                  value={selectedFuel} 
                  onValueChange={setSelectedFuel}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Essence">Essence</SelectItem>
                    <SelectItem value="Diesel">Diesel</SelectItem>
                    <SelectItem value="Hybride">Hybride</SelectItem>
                    <SelectItem value="Électrique">Électrique</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="annee" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Année
                </Label>
                <Input
                  id="annee"
                  type="number"
                  placeholder="2020"
                  value={annee}
                  onChange={(e) => setAnnee(e.target.value)}
                  min="1950"
                  max="2025"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="kilometrage">Kilométrage (km)</Label>
                <Input
                  id="kilometrage"
                  type="number"
                  placeholder="50000"
                  value={kilometrage}
                  onChange={(e) => setKilometrage(e.target.value)}
                  min="0"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cv">Puissance (CV)</Label>
                <Input
                  id="cv"
                  type="number"
                  placeholder="6"
                  value={cv}
                  onChange={(e) => setCv(e.target.value)}
                  min="1"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="premierMain">Premier Main</Label>
                <Select 
                  value={premierMain} 
                  onValueChange={setPremierMain}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Premier propriétaire?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Oui</SelectItem>
                    <SelectItem value="0">Non</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-4">
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? "Calcul en cours..." : "Prédire le prix"}
            </Button>
            
            {result !== null && (
              <div className="w-full mt-4 p-4 bg-secondary/10 rounded-lg text-center">
                <p className="text-lg font-medium">Prix estimé:</p>
                <p className="text-3xl font-bold text-primary">{result.toLocaleString()} DHS</p>
              </div>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default PredictionForm;
