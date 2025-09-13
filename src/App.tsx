import React from 'react';
import { Shield, Smartphone, Fingerprint, CreditCard, Key, Eye, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const products = [
  {
    id: 'i40',
    name: 'Serrure Intelligente I40',
    price: '4,000',
    image: '/WhatsApp Image 2025-09-11 at 15.47.21 (6).jpeg',
    features: ['Face ID', 'Empreinte', 'NFC', 'App', 'Mot de passe', 'Clé']
  },
  {
    id: 'i30',
    name: 'Serrure Intelligente I30',
    price: '3,500',
    image: '/WhatsApp Image 2025-09-11 at 15.47.22.jpeg',
    features: ['Face ID', 'Empreinte', 'NFC', 'App', 'Mot de passe', 'Clé']
  },
  {
    id: 'k10',
    name: 'Serrure Intelligente K10',
    price: '3,500',
    image: '/WhatsApp Image 2025-09-11 at 15.47.21 (4).jpeg',
    features: ['Face ID', 'Empreinte', 'NFC', 'App', 'Mot de passe', 'Clé']
  },
  {
    id: 'x5-cam',
    name: 'Serrure Intelligente X5 CAM',
    price: '1,950',
    image: '/WhatsApp Image 2025-09-11 at 15.47.21 (5).jpeg',
    features: ['Empreinte', 'NFC', 'App', 'Mot de passe', 'Clé']
  },
  {
    id: 'm1-pro',
    name: 'Serrure Intelligente M1 Pro',
    price: '2,400',
    image: '/WhatsApp Image 2025-09-11 at 15.47.22.jpeg',
    features: ['Face ID', 'Empreinte', 'NFC', 'App', 'Mot de passe', 'Clé']
  },
  {
    id: 'i10',
    name: 'Serrure Intelligente I10',
    price: '2,900',
    image: '/WhatsApp Image 2025-09-11 at 15.47.21 (6).jpeg',
    features: ['Face ID', 'Empreinte', 'NFC', 'App', 'Mot de passe', 'Clé']
  },
  {
    id: 'x5-ultra',
    name: 'Serrure Intelligente X5 Ultra',
    price: '1,650',
    image: '/WhatsApp Image 2025-09-11 at 15.47.22 (1).jpeg',
    features: ['Empreinte', 'NFC', 'App', 'Mot de passe', 'Clé']
  },
  {
    id: 'i29',
    name: 'Serrure Intelligente I29',
    price: '3,200',
    image: '/WhatsApp Image 2025-09-11 at 15.47.22.jpeg',
    features: ['Face ID', 'Empreinte', 'NFC', 'App', 'Mot de passe', 'Clé']
  }
];

const FeatureIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'Face ID':
      return <Eye className="w-6 h-6" />;
    case 'Empreinte':
      return <Fingerprint className="w-6 h-6" />;
    case 'NFC':
      return <CreditCard className="w-6 h-6" />;
    case 'App':
      return <Smartphone className="w-6 h-6" />;
    case 'Mot de passe':
      return <Shield className="w-6 h-6" />;
    case 'Clé':
      return <Key className="w-6 h-6" />;
    default:
      return <Shield className="w-6 h-6" />;
  }
};

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const whatsappMessage = `Bonjour, je suis intéressé(e) par la ${product.name} au prix de ${product.price} DH. Pouvez-vous me donner plus d'informations ?`;
  const whatsappUrl = `https://wa.me/212660245937?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-cyan-500/30 border border-gray-700 group hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700">
      <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          NOUVEAU
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-all duration-300 group-hover:transform group-hover:translate-x-1">
        {product.name}
      </h3>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {product.features.map((feature) => (
          <div key={feature} className="flex items-center gap-1 bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
            <FeatureIcon type={feature} />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors duration-300">{product.price}</span>
          <span className="text-white ml-1">DH</span>
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Installation incluse + 1 an garantie</p>
        </div>
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-6 py-3 rounded-xl font-semibold transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 flex items-center gap-2 hover:rotate-1 active:scale-95"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          Acheter
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-orange-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000 animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000 animate-float-slow"></div>
          <div className="absolute top-10 right-1/4 w-32 h-32 bg-green-500/10 rounded-full blur-2xl animate-pulse animation-delay-3000 animate-float"></div>
          <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl animate-pulse animation-delay-4000 animate-float-reverse"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8 transform transition-all duration-1000 animate-fade-in animate-glow">
            <div className="inline-block p-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl shadow-2xl mb-6 hover:shadow-orange-500/50 transition-all duration-500 hover:scale-105 animate-pulse-glow">
              <div className="text-4xl font-bold text-black animate-text-shimmer">DOMO28</div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-400 bg-clip-text text-transparent animate-fade-in animation-delay-500 animate-gradient-x">
            SÉCURITÉ INTELLIGENTE
          </h1>
              <h3 className="text-xl font-bold mb-3">WhatsApp Principal</h3>
              <a 
                href="https://wa.me/212669154235" 
                className="text-green-400 hover:text-green-300 text-lg font-semibold transition-colors duration-300 block mb-2"
              >
                +212 669 154 235
              </a>
              <p className="text-sm text-gray-400">Serrures & Caméras</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">WhatsApp Support</h3>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-1000">
            Serrures intelligentes de nouvelle génération à Casablanca
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-lg animate-fade-in animation-delay-1500">
            <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span>Installation Professionnelle</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
              <MapPin className="w-6 h-6 text-orange-400" />
              <span>Casablanca, Maroc</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Nos Produits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez notre gamme complète de serrures intelligentes avec installation incluse et garantie d'un an
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
            Technologies Avancées
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: 'Reconnaissance Faciale', desc: 'Technologie Face ID de pointe' },
              { icon: Fingerprint, title: 'Empreinte Digitale', desc: 'Scan biométrique ultra-rapide' },
              { icon: CreditCard, title: 'Carte NFC', desc: 'Accès sans contact sécurisé' },
              { icon: Smartphone, title: 'Application Mobile', desc: 'Contrôle à distance total' },
              { icon: Shield, title: 'Mot de Passe', desc: 'Code PIN personnalisable' },
              { icon: Key, title: 'Clé Traditionnelle', desc: 'Sauvegarde mécanique' }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="w-16 h-16 text-cyan-400 mx-auto mb-6 group-hover:text-orange-400 transition-colors duration-500" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
            Contactez-Nous
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
              <a 
                href="https://wa.me/212660245937" 
                className="text-blue-400 hover:text-blue-300 text-lg font-semibold transition-colors duration-300 block mb-2"
              >
                +212 660 245 937
              </a>
              <p className="text-sm text-gray-400">Service Client</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Localisation</h3>
              <p className="text-gray-300">Casablanca, Maroc</p>
              <p className="text-sm text-gray-400 mt-2">Grandes et petites quantités</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/domo_28/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-pink-500/25"
            >
              <Instagram className="w-8 h-8 text-white" />
            </a>
            
            <a
              href="https://web.facebook.com/people/Domo28/61567384930999/?mibextid=wwXIfr&rdid=modFYCdPdPy6SIrQ&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1ATX1va69M%2F%3F_rdc%3D1%26_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Facebook className="w-8 h-8 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block p-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl">
              <div className="text-2xl font-bold text-black">DOMO28</div>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 DOMO28 - Sécurité Intelligente. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500">
            Installation professionnelle • Garantie 1-2 ans • Service après-vente
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;