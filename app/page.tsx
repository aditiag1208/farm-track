'use client';

import { useState } from 'react';
import { Leaf, Menu, X, Tractor, Users, Package, Store, Smile, ArrowRight, FileText, Cpu, LocateFixed, QrCode, User, Building, Truck, Mail, Phone, MapPin } from 'lucide-react';

// Combined Logo Component
const FarmTrackLogo = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="p-2 bg-green-200 rounded-full text-green-800">
        <Leaf size={24} />
    </div>
    <span className="text-2xl font-bold text-gray-800">Farm Track</span>
  </div>
);

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Features', 'Login', 'Contact'];

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <FarmTrackLogo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-600 transition-colors duration-300">{link}</a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-800 z-50">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40`}>
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-600 transition-colors">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};


// Hero Section Component
const HeroSection = () => (
  <section id="home" className="relative h-[90vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-xl">
        Transforming Agriculture with Blockchain Transparency
      </h1>
      <p className="text-lg md:text-2xl font-light mb-8 max-w-3xl drop-shadow-lg">
        Fair Pricing | Traceability | Trust from Farm to Consumer
      </p>
      <a href="#login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-2xl">
        Get Started
      </a>
    </div>
  </section>
);

// About Section Component
const AboutSection = () => {
    const supplyChainSteps = [
        { icon: <Tractor size={32} className="text-green-600"/>, label: 'Farmer' },
        { icon: <Users size={32} className="text-blue-600"/>, label: 'FPO' },
        { icon: <Package size={32} className="text-orange-600"/>, label: 'Wholesaler' },
        { icon: <Store size={32} className="text-purple-600"/>, label: 'Retailer' },
        { icon: <Smile size={32} className="text-pink-600"/>, label: 'Consumer' },
    ];

    return (
        <section id="about" className="py-16 bg-blue-50/50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Farm Track creates an unbreakable, transparent link from the farm to your table. Every step is recorded on the blockchain, ensuring trust and fairness for all.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                    {supplyChainSteps.map((step, index) => (
                        <div key={step.label} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                            <div className="flex flex-col items-center p-4 text-center">
                                <div className="bg-white p-4 rounded-full shadow-lg mb-3 border border-gray-100">
                                    {step.icon}
                                </div>
                                <span className="font-semibold text-gray-700 text-sm">{step.label}</span>
                            </div>
                            {index < supplyChainSteps.length - 1 && (
                                <>
                                    <ArrowRight size={24} className="text-gray-300 hidden md:block mx-2" />
                                    <div className="h-8 w-px bg-gray-300 md:hidden my-2"></div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Login Portal Section Component
const LoginPortal = () => {
    const portals = [
      { icon: <User size={56} />, title: 'Farmer Portal', color: 'bg-green-500 hover:bg-green-600' },
      { icon: <Building size={56} />, title: 'Officer Portal', color: 'bg-blue-500 hover:bg-blue-600' },
      { icon: <Truck size={56} />, title: 'Distributor Portal', color: 'bg-orange-500 hover:bg-orange-600' },
      { icon: <Store size={56} />, title: 'Retailer Portal', color: 'bg-purple-500 hover:bg-purple-600' },
    ];

    return (
        <section id="login" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Access Your Portal</h2>
                    <p className="text-lg text-gray-600 mt-2">Login based on your role in the supply chain.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {portals.map((portal) => (
                        <a key={portal.title} href="#" className={`flex flex-col items-center justify-center p-8 rounded-xl text-white shadow-lg transition-transform transform hover:-translate-y-2 ${portal.color}`}>
                            <div className="mb-4">{portal.icon}</div>
                            <span className="font-bold text-2xl">{portal.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Features Section Component
const FeaturesSection = () => {
    const featureList = [
      { icon: <FileText size={40} className="text-blue-500" />, title: 'Digital Crop Passport', description: 'Every crop gets a unique digital identity, tracking its journey from seed to shelf.' },
      { icon: <Cpu size={40} className="text-blue-500" />, title: 'AI-based Grading', description: 'Automated, unbiased quality assessment ensures fair pricing and high standards.' },
      { icon: <LocateFixed size={40} className="text-blue-500" />, title: 'Real-time Tracking', description: 'Monitor your produce with live updates at every stage, from farm to the final destination.' },
      { icon: <QrCode size={40} className="text-blue-500" />, title: 'QR Code Transparency', description: 'Consumers can scan a QR code to view the entire history of their food product.' },
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Core Features</h2>
                    <p className="text-lg text-gray-600 mt-2">Empowering every stage of the supply chain.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featureList.map((feature) => (
                        <div key={feature.title} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            <div className="mb-5">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <FarmTrackLogo className="justify-center md:justify-start" />
            <p className="text-gray-400 mt-4 max-w-sm mx-auto md:mx-0">
              Bringing transparency and trust to the agricultural supply chain using blockchain technology.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#login" className="text-gray-400 hover:text-white transition-colors">Portals</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={20} className="text-blue-400" />
                <span className="text-gray-400">contact@farmtrack.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={20} className="text-blue-400" />
                <span className="text-gray-400">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={20} className="text-blue-400" />
                <span className="text-gray-400">AgriTech Park, Global</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Farm Track. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};


// Main Page Component that assembles all sections
export default function HomePage() {
  return (
    <main className="bg-white font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <LoginPortal />
      <Footer />
    </main>
  );
}

