import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, BarChart3, Database, Leaf, FileText, Target, Users, Upload, Sprout, Camera, Cpu, Satellite, Smartphone, Bot, LineChart, ShoppingBag } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-xlkey-bg">
      {/* Hero Section */}
      <section className="relative bg-xlkey-dark text-xlkey-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Drone surveying agricultural field" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-xlkey-accent">ADOPTEZ</span>
              <br />
              L'AGRICULTURE DE PRÉCISION 
            </h1>
            <p className="text-xl mb-8">
              Optimisez votre exploitation agricole grâce à nos solutions de numérisation et d'analyse par drone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="bg-xlkey-white text-xlkey-dark hover:bg-xlkey-accent hover:text-xlkey-dark px-6 py-3 rounded-md font-medium transition-all duration-300"
              >
                Nos Services
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-xlkey-white text-xlkey-white hover:bg-xlkey-accent hover:border-xlkey-accent hover:text-xlkey-dark px-6 py-3 rounded-md font-medium transition-all duration-300"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-xlkey-dark mb-3">NOTRE MISSION</h2>
            <div className="w-16 h-1 bg-xlkey-accent mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-xlkey-light bg-opacity-10 p-5 rounded-lg border-l-4 border-xlkey-accent mb-6">
              <p className="text-lg italic text-xlkey-dark">
                Aider les producteurs à exploiter pleinement le potentiel des technologies et des données.
              </p>
            </div>
            
            <p className="text-gray-700 mb-6 text-center">
              Chez XLKey, chaque donnée est une opportunité. Nous en faisons un puissant levier pour accélérer votre réussite en agriculture de précision. Avec une approche combinant intelligence artificielle, technologie avancée et expertise terrain, nous transformons vos données agricoles en résultats concrets.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-xlkey-light bg-opacity-20 p-3 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-xlkey-dark">85%</h4>
                <p className="text-sm text-gray-600">Précision de détection</p>
              </div>
              <div className="bg-xlkey-accent bg-opacity-20 p-3 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-xlkey-dark">30%</h4>
                <p className="text-sm text-xlkey-dark">Baisse des </p>
                <p className="text-sm text-xlkey-dark">intrants</p>
              </div>
              <div className="bg-xlkey-light bg-opacity-20 p-3 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-xlkey-dark">20%</h4>
                <p className="text-sm text-gray-600">Hausse des rendements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Principaux Services */}
      <section className="py-16 bg-xlkey-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-xlkey-dark mb-4">NOS PRINCIPAUX SERVICES</h2>
            <div className="w-20 h-1 bg-xlkey-accent mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Aujourd'hui, numérisez vos données et identifiez vos anomalies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* XL-NUMÉRISATION */}
            <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10 transform hover:-translate-y-2">
              <div className="bg-xlkey-light bg-opacity-30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 icon-container">
                <FileText className="h-8 w-8 text-xlkey-dark icon-hover" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-xlkey-dark">XL-NUMÉRISATION</h3>
              <p className="text-gray-600 mb-6">
                Nous prenons connaissance des besoins de votre entreprise et construisons une infrastructure numérique adaptée pour la gestion et l'analyse de toutes vos données présentes et futures.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-xlkey-accent mr-2 mt-1">✓</div>
                  <p className="text-gray-700">Élaboration d'un plan stratégique personnalisé</p>
                </div>
                <div className="flex items-start">
                  <div className="text-xlkey-accent mr-2 mt-1">✓</div>
                  <p className="text-gray-700">Survol de tous les champs avec un LiDAR</p>
                </div>
                <div className="flex items-start">
                  <div className="text-xlkey-accent mr-2 mt-1">✓</div>
                  <p className="text-gray-700">Centralisation et normalisation de vos données</p>
                </div>
              </div>
              <div className="mt-8">
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-xlkey-dark font-medium hover:text-xlkey-accent transition-colors duration-300"
                >
                  En savoir plus
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* XL-PERFORMANCE + */}
            <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10 transform hover:-translate-y-2">
              <div className="bg-xlkey-light bg-opacity-30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 icon-container">
                <Plane className="h-8 w-8 text-xlkey-dark icon-hover" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-xlkey-dark">XL-PERFORMANCE <span className="text-2xl font-bold text-xlkey-accent">+</span></h3>
              <p className="text-gray-600 mb-6">
                Assurez un suivi précis et continu de vos cultures à l'aide de drones équipés de capteurs multispectraux, thermiques et RGB.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-xlkey-accent mr-2 mt-1">✓</div>
                  <p className="text-gray-700">Détection des anomalies</p>
                </div>
                <div className="flex items-start">
                  <div className="text-xlkey-accent mr-2 mt-1">✓</div>
                  <p className="text-gray-700">Discussions et recommandation ciblées</p>
                </div>
                <div className="flex items-start">
                  <div className="text-xlkey-accent mr-2 mt-1">✓</div>
                  <p className="text-gray-700">Suivi de l'évolution des anomalies et des cultures</p>
                </div>
              </div>
              <div className="mt-8">
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-xlkey-dark font-medium hover:text-xlkey-accent transition-colors duration-300"
                >
                  En savoir plus
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Outils d'Analyses */}
      <section className="py-16 bg-xlkey-light bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <div className="flex items-center justify-center">
              <h2 className="text-3xl font-bold text-xlkey-dark mb-4">NOS OUTILS D'ANALYSES</h2>
              <span className="ml-3 px-2 py-1 bg-xlkey-accent text-xlkey-dark text-xs font-semibold rounded-md transform -translate-y-2">À VENIR</span>
            </div>
            <div className="w-16 h-1 bg-xlkey-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 solutions pour stocker, traiter et interagir avec vos données
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* XL-DROP */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10 group">
              <div className="bg-xlkey-light bg-opacity-30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-xlkey-accent group-hover:bg-opacity-20 transition-all duration-300">
                <Upload className="h-8 w-8 text-xlkey-dark group-hover:text-xlkey-dark transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-xlkey-dark text-center">XL-DROP</h3>
              <p className="text-gray-600 text-center">
                Solution de transfert automatisé pour facilement convertir, normaliser et archiver vos données
              </p>
            </div>
            
            {/* XL-DRONE */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10 group">
              <div className="bg-xlkey-light bg-opacity-30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-xlkey-accent group-hover:bg-opacity-20 transition-all duration-300">
                <Plane className="h-8 w-8 text-xlkey-dark group-hover:text-xlkey-dark transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-xlkey-dark text-center">XL-DRONE</h3>
              <p className="text-gray-600 text-center">
                Utilisez votre drone et déposez vos données, nous assurons le traitement complet.
              </p>
            </div>
            
            {/* XL-ANALYTICS */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10 group">
              <div className="bg-xlkey-light bg-opacity-30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-xlkey-accent group-hover:bg-opacity-20 transition-all duration-300">
                <LineChart className="h-8 w-8 text-xlkey-dark group-hover:text-xlkey-dark transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-xlkey-dark text-center">XL-ANALYTICS</h3>
              <p className="text-gray-600 text-center">
                Analyse sur mesure et approfondie de vos données pour répondre à vos questions les plus complexes
              </p>
            </div>
            
            {/* XL-ASSIST */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10 group">
              <div className="bg-xlkey-light bg-opacity-30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-xlkey-accent group-hover:bg-opacity-20 transition-all duration-300">
                <Bot className="h-8 w-8 text-xlkey-dark group-hover:text-xlkey-dark transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-xlkey-dark text-center">XL-ASSIST</h3>
              <p className="text-gray-600 text-center">
                Assistant virtuel intelligent pour explorer et interpréter facilement vos données agricoles.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-xl font-semibold mb-2 text-xlkey-dark">Une solution clés en main</h3>
                <p className="text-gray-600">
                  Nos outils fonctionnent en synergie pour vous offrir une solution complète d'agriculture de précision. De la collecte de données à l'analyse et aux recommandations, nous vous accompagnons à chaque étape, en valorisant pleinement l'implication humaine et l'expertise terrain dans notre démarche.
                </p>
              </div>
              <Link 
                to="/services" 
                className="bg-xlkey-dark text-xlkey-white hover:bg-xlkey-accent hover:text-xlkey-dark px-6 py-3 rounded-md font-medium transition-all duration-300 whitespace-nowrap flex items-center"
              >
                Découvrir nos services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vente de Drones Section */}
      <section className="py-16 bg-black text-xlkey-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">VENTE DE DRONE</h2>
            <div className="w-20 h-1 bg-xlkey-accent mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Équipez-vous avec le meilleur drone agricole sur le marché
            </p>
          </div>
          
          <div className="flex flex-col items-center mb-12">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%] h-0">
                <video 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/ef2967cd-77c6-4038-a11a-9ec79e8385e5.webm"
                  title="Drone Agricole"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">DJI AGRAS T50 - Drone Agricole de Précision</h3>
              <p className="text-gray-300 mb-6">
                Le DJI AGRAS T50 optimise la pulvérisation et l'épandage avec une capacité de 40 L en pulvérisation et 50 kg en épandage. Puissant, stable et intelligent, il permet des opérations sécuritaires, rapides et efficaces, réduisant le temps de travail et optimisant les plages d'application dans les champs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#3a4659] p-4 rounded-lg">
                  <h4 className="font-semibold text-xlkey-white mb-1">Réservoir liquide</h4>
                  <p className="text-gray-300">40 litres</p>
                </div>
                <div className="bg-[#3a4659] p-4 rounded-lg">
                  <h4 className="font-semibold text-xlkey-white mb-1">Réservoir d'épandage</h4>
                  <p className="text-gray-300">75 L (50 kg)</p>
                </div>
                <div className="bg-[#3a4659] p-4 rounded-lg">
                  <h4 className="font-semibold text-xlkey-white mb-1">Poids max. décollage</h4>
                  <p className="text-gray-300">92-103 kg</p>
                </div>
                <div className="bg-[#3a4659] p-4 rounded-lg">
                  <h4 className="font-semibold text-xlkey-white mb-1">Vitesse maximale</h4>
                  <p className="text-gray-300">36 km/h</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/drones" 
                  className="bg-xlkey-white text-xlkey-dark hover:bg-xlkey-accent hover:text-xlkey-dark px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center"
                >
                  En savoir plus
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-xlkey-accent text-xlkey-dark hover:bg-opacity-90 px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Demander un devis
                </Link>
              </div>
            </div>
            
            <div className="bg-[#3a4659] p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-xlkey-white">Avantages clés</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-xlkey-accent bg-opacity-30 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="h-5 w-5 text-xlkey-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-xlkey-white">Double fonction</h5>
                    <p className="text-gray-300">Pulvérisation et épandage avec le même appareil pour une polyvalence maximale</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xlkey-accent bg-opacity-30 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="h-5 w-5 text-xlkey-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-xlkey-white">Technologie avancée</h5>
                    <p className="text-gray-300">Radar omnidirectionnel et caméra FPV pour un vol sécurisé et une application ultra-précise</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xlkey-accent bg-opacity-30 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="h-5 w-5 text-xlkey-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-xlkey-white">Grande capacité</h5>
                    <p className="text-gray-300">Réservoir de 50 L et largeur de pulvérisation optimisée pour une couverture rapide des grandes surfaces.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-xlkey-dark text-xlkey-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à valoriser pleinement vos données?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nos solutions d'agriculture de précision peuvent transformer votre exploitation.
          </p>
          <Link 
            to="/contact" 
            className="bg-xlkey-accent text-xlkey-dark hover:bg-opacity-90 px-8 py-4 rounded-md font-medium text-lg inline-block transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;