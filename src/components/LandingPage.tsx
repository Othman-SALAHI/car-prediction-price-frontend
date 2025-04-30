
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  BarChart3, 
  Lightbulb, 
  TrendingUp, 
  Clock
} from "lucide-react";
import landingBg from '@/assets/landing_bg.jpg';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-section text-white relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${landingBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
            Estimez le Prix de Votre Voiture
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Notre outil de prédiction utilise l'intelligence artificielle pour vous fournir une estimation précise en quelques secondes.
          </p>
          <Button 
            onClick={onGetStarted} 
            size="lg" 
            className="text-lg group"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Pourquoi Utiliser Notre Outil</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl card-gradient shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Précision Optimale</h3>
              <p className="text-muted-foreground">
                Nos algorithmes s'appuient sur des milliers de données pour fournir des estimations précises.
              </p>
            </div>
            
            <div className="p-6 rounded-xl card-gradient shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapide et Efficace</h3>
              <p className="text-muted-foreground">
                Obtenez votre estimation en quelques secondes, sans attente ni délai.
              </p>
            </div>
            
            <div className="p-6 rounded-xl card-gradient shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BarChart3 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Données à Jour</h3>
              <p className="text-muted-foreground">
                Notre base de données est régulièrement mise à jour pour refléter les tendances actuelles du marché.
              </p>
            </div>
            
            <div className="p-6 rounded-xl card-gradient shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Facile à Utiliser</h3>
              <p className="text-muted-foreground">
                Interface intuitive qui vous guide pas à pas dans le processus d'estimation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à découvrir la valeur de votre voiture?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Notre outil vous permet d'obtenir une estimation précise pour prendre les meilleures décisions.
          </p>
          <Button 
            onClick={onGetStarted} 
            variant="secondary" 
            size="lg"
            className="text-lg"
          >
            Estimer maintenant
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Price Prediction Tool. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
