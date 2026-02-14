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
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { 
  DESTINATIONS, 
  EXPERIENCES, 
  DIFFERENTIALS, 
  TESTIMONIALS, 
  FAQ, 
  WHATSAPP_LINK, 
  INSTAGRAM_LINK 
} from './constants';

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
    switch (iconName) {
      case 'Users': return <Users className="w-12 h-12 text-gold mb-4" />;
      case 'Waves': return <Waves className="w-12 h-12 text-gold mb-4" />;
      case 'Heart': return <Heart className="w-12 h-12 text-gold mb-4" />;
      case 'Crown': return <Crown className="w-12 h-12 text-gold mb-4" />;
      case 'Anchor': return <Anchor className="w-12 h-12 text-gold mb-4" />;
      default: return <Anchor className="w-12 h-12 text-gold mb-4" />;
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
    <div className="min-h-screen bg-white selection:bg-gold selection:text-white">
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
              className="bg-gold hover:bg-white text-ocean hover:text-ocean px-7 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
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
            alt="Ilhabela Boat Experience" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
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
              <MessageCircle size={28} className="group-hover:animate-pulse" /> Reservar Agora no WhatsApp
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
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Destinos Exclusivos</span>
            <h2 className="text-5xl md:text-6xl font-bold text-ocean mb-6">Roteiro Premium de 5H</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Uma imersão completa nas águas cristalinas de Ilhabela. Conheça as praias mais famosas e os refúgios mais isolados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {DESTINATIONS.map((dest, idx) => (
              <div 
                key={dest.id} 
                className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white hover:shadow-gold/10 transition-all duration-500"
              >
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-ocean/90 text-white px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md">
                    Parada {idx + 1}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-ocean mb-3 group-hover:text-gold transition-colors">{dest.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {dest.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-tighter">
                    <CheckCircle size={20} className="text-gold" /> Águas Cristalinas & Mergulho
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiências Section */}
      <section id="experiencias" className="py-32 bg-ocean text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 -translate-y-1/4">
           <Waves className="w-[800px] h-[800px] rotate-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Experiências Sob Medida</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Cada grupo é único. Por isso, oferecemos diferentes tipos de passeios para atender perfeitamente às suas expectativas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp) => (
              <div 
                key={exp.id} 
                className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-[40px] hover:bg-white/10 hover:border-gold/50 transition-all duration-500 group"
              >
                <div className="bg-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {getIcon(exp.icon)}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gold">{exp.title}</h3>
                <p className="text-white/80 leading-relaxed text-lg mb-10">
                  {exp.description}
                </p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-gold transition-colors text-lg"
                >
                  Consultar Disponibilidade <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Por que nós?</span>
              <h2 className="text-5xl md:text-6xl font-bold text-ocean mb-12">Excelência em cada <span className="text-gold">Nó</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {DIFFERENTIALS.map((diff, i) => (
                  <div key={i} className="flex flex-col gap-5 p-6 rounded-3xl hover:bg-slate-50 transition-colors">
                    <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">
                      {diff.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-ocean mb-2">{diff.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{diff.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-[50px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transform rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1567891777981-99775bb238a1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Simbora Boat" 
                  className="w-full h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-gold p-10 rounded-[40px] text-white shadow-2xl z-20 animate-float hidden md:block">
                <p className="text-6xl font-bold mb-1">100%</p>
                <p className="text-xl font-medium opacity-90 uppercase tracking-widest">Seguro & VIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Instagram Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean mb-4">Galeria Simbora</h2>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-gold font-bold hover:underline flex items-center justify-center gap-2">
              <Instagram size={20} /> @simborapasseiobarco
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-3xl group cursor-pointer shadow-lg">
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Galeria ${i}`} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-10 h-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-ocean mb-6">Relatos de quem viveu</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
                <div>
                  <div className="flex gap-1 mb-8 group-hover:scale-105 transition-transform">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="text-gold fill-gold w-6 h-6" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-10 text-lg leading-relaxed">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-5 border-t border-slate-200 pt-8">
                  <div className="w-16 h-16 bg-ocean text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-ocean text-xl">{t.name}</h5>
                    <p className="text-gray-500 font-medium">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-ocean mb-6">Dúvidas Frequentes</h2>
            <p className="text-gray-600 text-xl">Preparamos as respostas para as perguntas mais comuns.</p>
          </div>

          <div className="space-y-6">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  className="w-full px-10 py-8 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="text-xl font-bold text-ocean text-left leading-tight">{item.question}</span>
                  <div className={`p-2 rounded-full transition-all duration-500 ${activeFaq === i ? 'bg-gold text-white rotate-180' : 'bg-slate-100 text-gold'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-10 py-8 bg-slate-50 border-t border-slate-100">
                    <p className="text-gray-600 text-lg leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-ocean">
          <img 
            src="https://images.unsplash.com/photo-1520520731457-9283dd14aa66?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 scale-110" 
            alt="Beach background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean via-ocean/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">Garanta Seu Lugar no Paraíso</h2>
            <p className="text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl">
              As datas em Ilhabela são concorridas. Reserve agora seu passeio exclusivo e transforme sua viagem em uma memória eterna.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-gold hover:bg-white text-ocean hover:text-ocean px-14 py-7 rounded-full font-bold text-2xl transition-all duration-500 transform hover:scale-110 shadow-[0_30px_60px_-15px_rgba(212,175,55,0.4)]"
              >
                <MessageCircle size={36} className="group-hover:rotate-12 transition-transform" /> Reservar no WhatsApp
              </a>
              <div className="py-4">
                <p className="flex items-center gap-3 text-white text-xl font-semibold mb-2">
                  <CheckCircle className="text-gold w-7 h-7" /> Vagas limitadas por dia.
                </p>
                <p className="text-white/60 pl-10">Confirmação imediata via chat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/10 pb-20">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Anchor className="text-gold w-10 h-10" />
              <span className="text-3xl font-serif font-bold tracking-wider">SIMBORA</span>
            </div>
            <p className="text-white/60 leading-relaxed text-lg mb-8 max-w-sm">
              Especialistas em criar roteiros exclusivos e seguros pelas águas de Caraguatatuba e Ilhabela.
            </p>
            <div className="flex gap-4">
               <a href={INSTAGRAM_LINK} target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-colors">
                  <Instagram size={24} />
               </a>
               <a href={WHATSAPP_LINK} target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-gold transition-colors">
                  <Phone size={24} />
               </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-2xl font-bold mb-8 text-gold">Links Rápidos</h5>
            <ul className="space-y-4 text-white/70 text-lg">
              <li><a href="#roteiro" className="hover:text-gold transition-colors">Roteiro Completo</a></li>
              <li><a href="#experiencias" className="hover:text-gold transition-colors">Nossas Experiências</a></li>
              <li><a href="#diferenciais" className="hover:text-gold transition-colors">Diferenciais VIP</a></li>
              <li><a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-2xl font-bold mb-8 text-gold">Contato</h5>
            <ul className="space-y-6 text-white/80 text-lg">
              <li className="flex items-start gap-4">
                <Phone className="text-gold w-6 h-6 mt-1 flex-shrink-0" /> 
                <div>
                  <p className="font-bold text-white">WhatsApp</p>
                  <p>(12) 99181-0650</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-gold w-6 h-6 mt-1 flex-shrink-0" /> 
                <div>
                  <p className="font-bold text-white">Localização</p>
                  <p>Caraguatatuba, SP</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-2xl font-bold mb-8 text-gold">Simbora Oficial</h5>
            <p className="text-white/70 mb-6 text-lg">Siga nosso dia a dia no paraíso e fique por dentro das novidades.</p>
            <a 
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/5 border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition-all group"
            >
              <Instagram className="group-hover:text-gold transition-colors" /> @simborapasseiobarco
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Simbora Passeio de Barco.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><CheckCircle size={14} /> Navegação Segura</span>
            <span className="flex items-center gap-2"><Crown size={14} /> Atendimento Premium</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 animate-float flex items-center group overflow-hidden max-w-[60px] hover:max-w-[250px]"
      >
        <div className="bg-white/20 p-1 rounded-full flex-shrink-0">
          <MessageCircle size={32} fill="white" />
        </div>
        <span className="font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pl-4 pr-6 text-lg">
          Reserve sua vaga agora!
        </span>
      </a>
    </div>
  );
};

export default App;