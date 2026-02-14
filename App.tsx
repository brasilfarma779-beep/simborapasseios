
import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Phone, 
  MapPin, 
  CheckCircle,
  MessageCircle,
  Users,
  Waves,
  Heart,
  Crown,
  Anchor,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { 
  DESTINATIONS, 
  EXPERIENCES, 
  DIFFERENTIALS, 
  TESTIMONIALS, 
  FAQ, 
  WHATSAPP_LINK, 
  INSTAGRAM_LINK 
} from './constants.tsx';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    const props = { className: "w-12 h-12 text-gold mb-4" };
    switch (iconName) {
      case 'Users': return <Users {...props} />;
      case 'Waves': return <Waves {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'Crown': return <Crown {...props} />;
      case 'Anchor': return <Anchor {...props} />;
      default: return <Anchor {...props} />;
    }
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1567891777981-99775bb238a1?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-gold selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-ocean/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Anchor className={`w-8 h-8 ${scrolled ? 'text-gold' : 'text-white'} transition-colors group-hover:rotate-12 duration-300`} />
            <span className="text-2xl font-serif font-bold tracking-wider text-white">
              SIMBORA
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#roteiro" className="text-white hover:text-gold transition-colors font-semibold tracking-wide">Roteiro</a>
            <a href="#experiencias" className="text-white hover:text-gold transition-colors font-semibold tracking-wide">Experiências</a>
            <a href="#diferenciais" className="text-white hover:text-gold transition-colors font-semibold tracking-wide">Diferenciais</a>
            <a href="#depoimentos" className="text-white hover:text-gold transition-colors font-semibold tracking-wide">Depoimentos</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-white text-ocean hover:text-ocean px-7 py-3 rounded-full font-bold transition-all duration-300 shadow-lg active:scale-95"
            >
              Reservar Agora
            </a>
          </div>

          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-ocean border-t border-white/10 p-8 flex flex-col gap-6 items-center shadow-2xl animate-fade-in-down">
            <a href="#roteiro" className="text-white text-xl font-semibold" onClick={() => setIsMenuOpen(false)}>Roteiro</a>
            <a href="#experiencias" className="text-white text-xl font-semibold" onClick={() => setIsMenuOpen(false)}>Experiências</a>
            <a href="#diferenciais" className="text-white text-xl font-semibold" onClick={() => setIsMenuOpen(false)}>Diferenciais</a>
            <a href="#depoimentos" className="text-white text-xl font-semibold" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
            <a 
              href={WHATSAPP_LINK} 
              className="bg-gold text-ocean w-full text-center py-4 rounded-full font-bold text-xl shadow-xl active:scale-95 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Falar no WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000" 
            alt="Ilhabela" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Simbora Viver o Melhor Passeio de Barco do <span className="text-gold italic font-serif">Litoral Norte</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Experiências exclusivas para família, amigos e casais explorarem o paraíso de Ilhabela com sofisticação e segurança.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold hover:bg-white text-ocean hover:text-ocean px-12 py-6 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all duration-500 shadow-2xl transform hover:-translate-y-1 active:scale-95"
            >
              <MessageCircle size={28} className="group-hover:animate-pulse" /> Reservar no WhatsApp
            </a>
            <a 
              href="#roteiro"
              className="bg-white/10 hover:bg-white/25 backdrop-blur-xl text-white border border-white/40 px-12 py-6 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1"
            >
              <MapPin size={28} /> Ver Roteiro Completo
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <ChevronDown size={40} />
        </div>
      </section>

      {/* Roteiro Premium Section */}
      <section id="roteiro" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-ocean mb-6">Roteiro Premium de 5H</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Uma imersão completa nas águas cristalinas de Ilhabela. Conheça praias famosas e refúgios isolados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {DESTINATIONS.map((dest, idx) => (
              <div key={dest.id} className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white hover:shadow-gold/10 transition-all duration-500">
                <div className="h-80 overflow-hidden relative">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-ocean/90 text-white px-4 py-2 rounded-full text-xs font-bold">Parada {idx + 1}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-ocean mb-3">{dest.name}</h3>
                  <p className="text-gray-600 mb-6">{dest.description}</p>
                  <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase"><CheckCircle size={20} /> Mergulho e Águas Cristalinas</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiências Section */}
      <section id="experiencias" className="py-32 bg-ocean text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Experiências Simbora</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-[40px] hover:bg-white/10 transition-all duration-500 group">
                {getIcon(exp.icon)}
                <h3 className="text-3xl font-bold mb-4 text-gold">{exp.title}</h3>
                <p className="text-white/80 text-lg mb-10">{exp.description}</p>
                <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center gap-2 text-white font-bold hover:text-gold transition-colors text-lg">
                  Consultar Disponibilidade <ChevronRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold text-ocean mb-12">Excelência em cada <span className="text-gold">Detalhe</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {DIFFERENTIALS.map((diff, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 rounded-3xl hover:bg-slate-50">
                  <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center">{diff.icon}</div>
                  <h4 className="text-xl font-bold text-ocean">{diff.title}</h4>
                  <p className="text-gray-600">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img src="https://images.unsplash.com/photo-1567891777981-99775bb238a1?auto=format&fit=crop&q=80&w=1000" alt="Barco" className="rounded-[50px] shadow-2xl h-[600px] object-cover" />
            <div className="absolute -bottom-10 -left-10 bg-gold p-10 rounded-[40px] text-white shadow-2xl hidden md:block animate-float">
              <p className="text-6xl font-bold">100%</p>
              <p className="text-xl font-medium tracking-widest uppercase">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ocean mb-4">Galeria Simbora</h2>
            <a href={INSTAGRAM_LINK} target="_blank" className="text-gold font-bold flex items-center justify-center gap-2 hover:underline">
              <Instagram size={20} /> @simborapasseiobarco
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-3xl shadow-lg group relative">
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Galeria ${i}`} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-10 h-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-ocean text-center mb-20">Perguntas Frequentes</h2>
          <div className="space-y-6 mb-32">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200">
                <button 
                  className="w-full px-10 py-8 flex justify-between items-center text-left"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="text-xl font-bold text-ocean">{item.question}</span>
                  {activeFaq === i ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-gold" />}
                </button>
                {activeFaq === i && <div className="px-10 pb-8 text-gray-600 text-lg animate-fade-in">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 relative bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1520520731457-9283dd14aa66?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl font-bold text-white mb-8">Reserve Seu Lugar no Paraíso</h2>
          <p className="text-2xl text-white/80 mb-12 max-w-2xl mx-auto">Vagas limitadas por dia. Garanta agora uma experiência inesquecível em Ilhabela.</p>
          <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center gap-4 bg-gold hover:bg-white text-ocean px-14 py-7 rounded-full font-bold text-2xl transition-all shadow-2xl">
            <MessageCircle size={36} /> Reservar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean text-white py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="text-gold w-10 h-10" />
              <span className="text-3xl font-serif font-bold tracking-wider">SIMBORA</span>
            </div>
            <p className="text-white/40">© {new Date().getFullYear()} Simbora Passeio de Barco. Caraguatatuba - SP</p>
          </div>
          <div className="flex gap-8">
            <a href={INSTAGRAM_LINK} target="_blank" className="hover:text-gold transition-colors"><Instagram size={32} /></a>
            <a href={WHATSAPP_LINK} target="_blank" className="hover:text-gold transition-colors"><Phone size={32} /></a>
          </div>
        </div>
      </footer>

      {/* Floating Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle size={32} fill="white" />
        <span className="hidden group-hover:block font-bold pr-2">Reserve Agora!</span>
      </a>
    </div>
  );
};

export default App;
