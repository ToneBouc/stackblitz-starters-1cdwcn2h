import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      try {
        emailjs.init("jLNS0oCQr_2FhYP3n");
        const result = await emailjs.sendForm(
          'service_qqvvxzp',
          'template_qqvvxzp',
          form.current,
          'jLNS0oCQr_2FhYP3n'
        );
        
        console.log('Email sent successfully:', result.text);
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        setFormData({
          user_name: '',
          user_email: '',
          phone: '',
          company: '',
          message: '',
        });
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.');
      }
    }
  };

  return (
    <div className="bg-xlkey-bg">
      {/* Hero Section */}
      <section className="bg-xlkey-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl max-w-3xl">
            Vous avez des questions sur nos services d'agriculture de précision ? Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-xlkey-dark mb-6">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-xlkey-light group-hover:scale-110">
                    <Phone className="h-6 w-6 text-xlkey-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xlkey-dark">Téléphone</h3>
                    <p className="text-gray-600 group-hover:text-xlkey-dark transition-colors duration-300">+1 581 994-9172</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-xlkey-light group-hover:scale-110">
                    <Mail className="h-6 w-6 text-xlkey-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xlkey-dark">Email</h3>
                    <p className="text-gray-600 group-hover:text-xlkey-dark transition-colors duration-300">info@xlkey.ca</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-xlkey-light bg-opacity-30 p-3 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-xlkey-light group-hover:scale-110">
                    <MapPin className="h-6 w-6 text-xlkey-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xlkey-dark">Adresse</h3>
                    <p className="text-gray-600 group-hover:text-xlkey-dark transition-colors duration-300">
                      1336 1 Rue, Sainte-Marie,<br /> Quebec G6E 3H3<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-xlkey-dark mb-6">Horaires d'ouverture</h2>
                <div className="bg-xlkey-light bg-opacity-20 p-6 rounded-lg transition-all duration-300 hover:bg-xlkey-light hover:bg-opacity-30 hover:shadow-md">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-xlkey-dark">Lundi - Vendredi</h3>
                      <p className="text-gray-600">8h00 - 18h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-xlkey-dark mb-6">Envoyez-nous un message</h2>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-xlkey-dark mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-xlkey-light rounded-md focus:ring-xlkey-accent focus:border-xlkey-accent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-xlkey-dark mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-xlkey-light rounded-md focus:ring-xlkey-accent focus:border-xlkey-accent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-xlkey-dark mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-xlkey-light rounded-md focus:ring-xlkey-accent focus:border-xlkey-accent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-xlkey-dark mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-xlkey-light rounded-md focus:ring-xlkey-accent focus:border-xlkey-accent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-xlkey-dark mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-xlkey-light rounded-md focus:ring-xlkey-accent focus:border-xlkey-accent transition-all duration-300"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-xlkey-dark hover:bg-xlkey-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-xlkey-accent transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;