import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, ShoppingBag, Award, Zap, Shield, Clock, Wrench, Download, FileText, Users } from 'lucide-react';

const DronePage = () => {
  return (
    <div className="bg-xlkey-bg">
      {/* Hero Section */}
      <section className="relative bg-xlkey-dark text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
            alt="Drone agricole en vol" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DRONES AGRICOLES <span className="text-xlkey-accent">DJI AGRAS T50</span>
            </h1>
            <p className="text-xl mb-8">
              Révolutionnez votre exploitation agricole avec les drones de pulvérisation et d'épandage de précision les plus avancés du marché.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-xlkey-accent text-white hover:bg-white hover:text-xlkey-dark px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Demander un devis
              </Link>
              <a 
                href="#specifications" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-xlkey-dark hover:border-white px-6 py-3 rounded-md font-medium transition-all duration-300"
              >
                Voir les spécifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation du Drone */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-xlkey-dark mb-6">DJI AGRAS T50 - Le Drone Agricole de Référence</h2>
              <p className="text-gray-600 mb-6">
                Le DJI AGRAS T50 optimise la pulvérisation et l'épandage avec une capacité de 40 L en pulvérisation et 50 kg en épandage. Puissant, stable et intelligent, il permet des opérations sécuritaires, rapides et efficaces, réduisant le temps de travail et optimisant les plages d'application dans les champs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-xlkey-light bg-opacity-30 p-2 rounded-full flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5 text-xlkey-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xlkey-dark">Performance exceptionnelle</h4>
                    <p className="text-gray-600">Couvre jusqu'à 30 acres par heure.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xlkey-light bg-opacity-30 p-2 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-xlkey-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xlkey-dark">Robustesse à toute épreuve</h4>
                    <p className="text-gray-600">Certification IP67 pour résister aux conditions agricoles les plus difficiles.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xlkey-light bg-opacity-30 p-2 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-5 w-5 text-xlkey-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xlkey-dark">Technologie de pointe</h4>
                    <p className="text-gray-600">Système de pulvérisation et d'épandage intelligent avec ajustement automatique du débit.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="bg-xlkey-dark text-white hover:bg-xlkey-accent px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center"
              >
                Demander une démonstration
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-xlkey-light bg-opacity-10 rounded-lg p-2">
                <img 
                  src="https://i.ytimg.com/vi/G8gjm2HALEM/maxresdefault.jpg" 
                  alt="Drone DJI AGRAS T50" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute top-4 right-4 bg-xlkey-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Nouveau
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications Techniques */}
      <section id="specifications" className="py-16 bg-xlkey-light bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-xlkey-dark mb-4">Spécifications Techniques</h2>
            <div className="w-24 h-1 bg-xlkey-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des caractéristiques conçues pour maximiser l'efficacité et la précision de vos opérations agricoles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10">
              <div className="flex items-center mb-4">
                <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-xlkey-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-xlkey-dark">Réservoir liquide</h3>
              </div>
              <p className="text-3xl font-bold text-xlkey-accent">40 L</p>
              <p className="text-gray-600 mt-2">Réservoir en plastique HDPE ultra-résistant</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10">
              <div className="flex items-center mb-4">
                <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-xlkey-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-xlkey-dark">Couverture</h3>
              </div>
              <p className="text-3xl font-bold text-xlkey-accent">30 acres/h</p>
              <p className="text-gray-600 mt-2">Efficacité maximale pour les grandes exploitations</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10">
              <div className="flex items-center mb-4">
                <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-xlkey-dark" />
                </div>
                <h3 className="text-xl font-semibold text-xlkey-dark">Poids max. décollage</h3>
              </div>
              <p className="text-3xl font-bold text-xlkey-accent">92-103 kg</p>
              <p className="text-gray-600 mt-2">92 kg pulvérisation / 103 kg épandage</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10">
              <div className="flex items-center mb-4">
                <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-xlkey-dark" />
                </div>
                <h3 className="text-xl font-semibold text-xlkey-dark">Résistance au vent</h3>
              </div>
              <p className="text-3xl font-bold text-xlkey-accent">6 m/s</p>
              <p className="text-gray-600 mt-2">Protection contre les conditions difficiles</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-xlkey-dark mb-6">Caractéristiques techniques</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Poids à vide</span>
                  <span className="text-xlkey-dark">39,9 kg (sans batterie)</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Poids avec batterie</span>
                  <span className="text-xlkey-dark">52 kg</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Empattement diagonal max.</span>
                  <span className="text-xlkey-dark">2 200 mm</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Dimensions (bras et hélices dépliés)</span>
                  <span className="text-xlkey-dark">2 800 x 3 085 x 820 mm</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Précision du vol stationnaire</span>
                  <span className="text-xlkey-dark">± 10 cm (avec D-RTK)</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Rayon de vol max. configurable</span>
                  <span className="text-xlkey-dark">2 000 m</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Capacité réservoir d'épandage</span>
                  <span className="text-xlkey-dark">75 L (50 kg)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Largeur d'épandage</span>
                  <span className="text-xlkey-dark">8 m</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-xlkey-dark mb-6">Système de pulvérisation</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-xlkey-light bg-opacity-30 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="h-5 w-5 text-xlkey-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xlkey-dark">Système à double atomisation</h4>
                    <p className="text-gray-600">Équipé de 2 gicleurs modèle LX8060SZ pour une application uniforme.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xlkey-light bg-opacity-30 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="h-5 w-5 text-xlkey-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xlkey-dark">Taille des gouttelettes</h4>
                    <p className="text-gray-600">50 à 500 μm pour une application précise selon les besoins.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xlkey-light bg-opacity-30 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="h-5 w-5 text-xlkey-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xlkey-dark">Largeur de pulvérisation effective</h4>
                    <p className="text-gray-600">4 à 11 m (à une hauteur de 3 m au-dessus des cultures).</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xlkey-light bg-opacity-30 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="h-5 w-5 text-xlkey-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xlkey-dark">Débit maximal</h4>
                    <p className="text-gray-600">16 L/min (2 buses) ou 24 L/min (4 buses).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Connexes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-xlkey-dark mb-4">Services Connexes</h2>
            <div className="w-24 h-1 bg-xlkey-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement complet pour une prise en main optimale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10 text-center">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-xlkey-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-xlkey-dark">Livraison et mise en service</h3>
              <p className="text-gray-600">
                Livraison directement sur votre exploitation et mise en service complète par nos techniciens.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10 text-center">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-xlkey-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-xlkey-dark">Formation complète</h3>
              <p className="text-gray-600">
                Formation de 2 jours pour 2 opérateurs, couvrant tous les aspects de l'utilisation et de la maintenance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10 text-center">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-xlkey-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-xlkey-dark">Support technique prioritaire</h3>
              <p className="text-gray-600">
                Assistance technique dédiée et intervention rapide en cas de problème pour minimiser les temps d'arrêt.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-10 text-center">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-xlkey-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-xlkey-dark">Garantie de 2 ans extensible</h3>
              <p className="text-gray-600">
                Garantie complète de 2 ans avec possibilité d'extension à 3 ou 5 ans pour une tranquillité d'esprit totale.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-xlkey-light bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                <Download className="h-10 w-10 text-xlkey-dark" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-xlkey-dark">Documentation complète</h3>
                <p className="text-gray-600 mb-4">
                  Accédez à toute la documentation technique du DJI AGRAS T50 ainsi qu'à nos guides d'utilisation personnalisés.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-xlkey-dark hover:text-xlkey-accent transition-colors duration-300"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Fiche technique (PDF)
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-xlkey-dark hover:text-xlkey-accent transition-colors duration-300"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Manuel d'utilisation (PDF)
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-xlkey-dark hover:text-xlkey-accent transition-colors duration-300"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Guide de maintenance (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-xlkey-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Prêt à révolutionner votre exploitation agricole?</h2>
              <p className="text-xl mb-8">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment le DJI AGRAS T50 peut transformer vos opérations agricoles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="bg-xlkey-accent text-white hover:bg-white hover:text-xlkey-dark px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Demander un devis
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-xlkey-dark px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Organiser une démonstration
                </Link>
              </div>
            </div>
            
            <div className="bg-xlkey-light bg-opacity-20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Financement disponible</h3>
              <p className="mb-6">
                Nous proposons plusieurs solutions de financement adaptées à votre situation :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-xlkey-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paiement en plusieurs fois sans frais</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-xlkey-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Crédit-bail sur 3 à 5 ans</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-xlkey-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Location longue durée avec option d'achat</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-xlkey-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accompagnement pour les demandes de subventions</span>
                </li>
              </ul>
              <p className="mt-6 text-sm">
                * Sous réserve d'acceptation de votre dossier. Nos conseillers sont à votre disposition pour étudier la solution la plus adaptée à votre situation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DronePage;