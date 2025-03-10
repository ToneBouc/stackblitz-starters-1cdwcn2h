import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, BarChart3, Database, FileText, Target, Users, Scan, Bot, LineChart, Upload } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="bg-xlkey-bg">
      {/* Hero Section */}
      <section className="bg-xlkey-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl max-w-3xl">
            Découvrez nos services d'agriculture de précision conçus pour optimiser votre exploitation agricole grâce à des technologies de pointe.
          </p>
        </div>
      </section>

      {/* XL-NUMÉRISATION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-xlkey-dark mb-4">XL-NUMÉRISATION</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprendre les besoins de votre entreprise et construire une infrastructure numérique adaptée
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 icon-container">
                <FileText className="h-8 w-8 text-xlkey-dark icon-hover" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-xlkey-dark">Élaboration d'un plan stratégique</h3>
              <p className="text-gray-600">
                Nous analysons vos besoins spécifiques et élaborons un plan stratégique pour la numérisation de votre exploitation agricole.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 icon-container">
                <Plane className="h-8 w-8 text-xlkey-dark icon-hover" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-xlkey-dark">Survol des champs avec un LiDAR</h3>
              <p className="text-gray-600">
                Nous planifions et exécutons des vols de drone pour collecter des données précises sur vos cultures et terrains agricoles.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 icon-container">
                <Database className="h-8 w-8 text-xlkey-dark icon-hover" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-xlkey-dark">Centralisation de vos données</h3>
              <p className="text-gray-600">
                Nous centralisons toutes vos données agricoles dans une plateforme sécurisée et simple d'accès pour faciliter leur analyse.
              </p>
            </div>
          </div>
          
          <div className="bg-xlkey-light bg-opacity-20 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-xlkey-dark">Objectif</h3>
            <p className="text-gray-700">
              Comprendre les besoins de votre entreprise et construire une infrastructure numérique adaptée pour valoriser et transformer toutes vos données. Cette infrastructure sera évolutive et pourra accueillir d'autres types de données et d'analyses, selon l'évolution de vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* XL-PERFORMANCE Service */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-xlkey-dark mb-4">XL-PERFORMANCE <span className="text-2xl font-bold text-xlkey-accent">+</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un suivi précis et continu de vos cultures grâce à notre technologie et nos experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center step-card">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 step-icon transition-all duration-300">
                <Plane className="h-8 w-8 text-xlkey-dark" />
              </div>
              <h3 className="font-semibold mb-2 text-xlkey-dark">Étape 1</h3>
              <p className="text-gray-600">Collecte de données par drone</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center step-card">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 step-icon transition-all duration-300">
                <Scan className="h-8 w-8 text-xlkey-dark" />
              </div>
              <h3 className="font-semibold mb-2 text-xlkey-dark">Étape 2</h3>
              <p className="text-gray-600">Classification des images</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center step-card">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 step-icon transition-all duration-300">
                <Target className="h-8 w-8 text-xlkey-dark" />
              </div>
              <h3 className="font-semibold mb-2 text-xlkey-dark">Étape 3</h3>
              <p className="text-gray-600">Délimitation des zones</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center step-card">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 step-icon transition-all duration-300">
                <Users className="h-8 w-8 text-xlkey-dark" />
              </div>
              <h3 className="font-semibold mb-2 text-xlkey-dark">Étape 4</h3>
              <p className="text-gray-600">Discussion avec votre équipe</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center step-card">
              <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 step-icon transition-all duration-300">
                <BarChart3 className="h-8 w-8 text-xlkey-dark" />
              </div>
              <h3 className="font-semibold mb-2 text-xlkey-dark">Étape 5</h3>
              <p className="text-gray-600">Suivi des problématiques</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-xlkey-light hover:bg-opacity-20">
            <h3 className="text-xl font-semibold mb-4 text-xlkey-dark">Objectif</h3>
            <p className="text-gray-700 mb-6">
              Assurer un suivi précis et continu des cultures à l'aide de drones équipés de capteurs multispectraux, thermiques et RGB. En exploitant ces données, notre équipe d'experts identifie les zones problématiques, propose des recommandations ciblées et suit l'évolution des interventions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-xlkey-bg p-6 rounded-lg transition-all duration-300 hover:bg-xlkey-light hover:bg-opacity-30">
                <h4 className="font-semibold mb-2 text-xlkey-dark">Avantages</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Détection précoce des problèmes (maladies, stress hydrique, carences, compaction, autres)</li>
                  <li>Optimisation de l'utilisation des ressources</li>
                  <li>Suivi de l'évolution des cultures dans le temps</li>
                  <li>Cartographie précise des zones problématiques</li>
                </ul>
              </div>
              
              <div className="bg-xlkey-bg p-6 rounded-lg transition-all duration-300 hover:bg-xlkey-light hover:bg-opacity-30">
                <h4 className="font-semibold mb-2 text-xlkey-dark">Technologies utilisées</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Drones équipés d'une caméra RGB haute résolution</li>
                <li>Capteurs multispectraux</li>
                  <li>Caméras thermiques</li>
                  <li>Logiciels d'analyse d'images et de cartographie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Solutions */}
      <section className="py-16 bg-xlkey-light bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-xlkey-dark mb-4">Nos Solutions XL</h2>
            <div className="w-24 h-1 bg-xlkey-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 solutions pour stocker, traiter et interagir avec vos données
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* XL-DROP */}
            <div className="h-80 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <div className="bg-xlkey-light bg-opacity-30 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                    <Upload className="h-10 w-10 text-xlkey-dark" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-xlkey-dark text-center">XL-DROP</h3>
                  <p className="text-gray-600 text-center">
                    Solution de transfert automatisé
                  </p>
                </div>
                <div className="flip-card-back bg-xlkey-dark p-6 rounded-lg shadow-md flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">XL-DROP</h3>
                  <p className="text-gray-200 text-center mb-4">
                  Facilement convertir, normaliser et archiver vos données agricoles.
                  </p>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Conversion des données </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Normalisation des données</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Archivage sécurisé et accessible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* XL-DRONE */}
            <div className="h-80 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <div className="bg-xlkey-light bg-opacity-30 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                    <Plane className="h-10 w-10 text-xlkey-dark" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-xlkey-dark text-center">XL-DRONE</h3>
                  <p className="text-gray-600 text-center">
                    Traitement complet de vos données de drone
                  </p>
                </div>
                <div className="flip-card-back bg-xlkey-dark p-6 rounded-lg shadow-md flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">XL-DRONE</h3>
                  <p className="text-gray-200 text-center mb-4">
                  Nous traitons vos données de drone.
                  </p>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Traitement d'images RGB</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Multispectrale et Thermale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Détection des anomalies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* XL-ANALYTICS */}
            <div className="h-80 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <div className="bg-xlkey-light bg-opacity-30 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                    <LineChart className="h-10 w-10 text-xlkey-dark" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-xlkey-dark text-center">XL-ANALYTICS</h3>
                  <p className="text-gray-600 text-center">
                    Analyse sur mesure de vos données
                  </p>
                </div>
                <div className="flip-card-back bg-xlkey-dark p-6 rounded-lg shadow-md flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">XL-ANALYTICS</h3>
                  <p className="text-gray-200 text-center mb-4">
                    Analyse approfondie pour répondre à vos questions complexes.
                  </p>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Rapports personnalisés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Modèles prédictifs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Recommandations avancées</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* XL-ASSIST */}
            <div className="h-80 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <div className="bg-xlkey-light bg-opacity-30 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                    <Bot className="h-10 w-10 text-xlkey-dark" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-xlkey-dark text-center">XL-ASSIST</h3>
                  <p className="text-gray-600 text-center">
                    Assistant virtuel intelligent
                  </p>
                </div>
                <div className="flip-card-back bg-xlkey-dark p-6 rounded-lg shadow-md flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">XL-ASSIST</h3>
                  <p className="text-gray-200 text-center mb-4">
                    Explorer et interpréter facilement vos données.
                  </p>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Interface intuitive</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Alertes personnalisées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xlkey-accent mr-2">✓</span>
                      <span>Suggestions d'actions basées sur l'IA</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                to="/contact" 
                className="bg-xlkey-dark text-white hover:bg-xlkey-accent px-6 py-3 rounded-md font-medium transition-all duration-300 whitespace-nowrap flex items-center"
              >
                Nous contacter
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-xlkey-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à optimiser votre exploitation agricole?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nos solutions d'agriculture de précision peuvent transformer votre exploitation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-xlkey-accent text-white hover:bg-opacity-90 px-8 py-4 rounded-md font-medium text-lg inline-block transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Demander un devis gratuit
            </Link>
            <Link 
              to="/drones" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-xlkey-dark px-8 py-4 rounded-md font-medium text-lg inline-block transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Découvrir nos drones
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;