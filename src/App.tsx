import { motion } from 'motion/react';
import { Search, Menu, MapPin, Play, Heart, ChevronRight, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/10 text-white' : 'bg-transparent text-white'
      }`}
    >
      <div id="logo-container" className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center">
            <img src="/logo.png" alt="El-Shadai Logo" className="w-full h-full object-contain" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.querySelector('.logo-fallback')?.classList.remove('hidden');
            }} />
            <div className="logo-fallback hidden w-10 h-10 rounded-full bg-brand-copper p-0.5">
               <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="text-brand-black font-bold text-xs">ES</span>
               </div>
            </div>
        </div>
        <div>
          <div className="font-bold text-xl tracking-tighter uppercase leading-none font-display">El-Shadai</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-brand-copper font-bold">AIC Church</div>
        </div>
      </div>

      <div id="nav-actions" className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em]">
        <a href="#" className="hover:text-brand-copper transition-colors">Watch</a>
        <a href="#" className="hover:text-brand-copper transition-colors">Locations</a>
        <a href="#" className="hover:text-brand-copper transition-colors">Connect</a>
        <a href="#" className="hover:text-brand-copper transition-colors">Events</a>
        <button id="give-btn" className="bg-brand-copper text-white px-6 py-2 rounded-full hover:bg-brand-copper-light transition-colors">
          Give
        </button>
      </div>

      <div id="nav-icons" className="flex items-center gap-4">
        <Search className="w-4 h-4 cursor-pointer hover:text-brand-copper transition-colors" />
        <Menu className="w-5 h-5 cursor-pointer md:hidden" />
        <div className="hidden md:block">
           <Menu className="w-5 h-5 cursor-pointer hover:text-brand-copper transition-colors" />
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
          alt="El-Shadai Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-brand-black" />
      </div>

      <div id="hero-content" className="relative z-10 text-center text-white px-4 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="flex justify-center mb-10"
        >
           <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-brand-copper/30 p-2 relative flex items-center justify-center">
              <img src="/logo.png" alt="Logo Hero" className="w-full h-full object-contain relative z-20" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.logo-hero-fallback')?.classList.remove('hidden');
              }} />
              <div className="logo-hero-fallback hidden w-full h-full rounded-full border border-brand-copper/50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                 <span className="text-brand-copper font-display text-4xl md:text-6xl font-bold italic">ES</span>
              </div>
           </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter uppercase font-display"
        >
          Seja <span className="text-brand-copper italic">Bem-Vindo</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <button id="first-time-btn" className="bg-white text-brand-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-copper hover:text-white transition-all w-full md:w-auto shadow-2xl">
            Primeira Vez?
          </button>
          <button id="latest-message-btn" className="bg-brand-copper text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-copper-light transition-all w-full md:w-auto flex items-center justify-center gap-3 shadow-2xl">
            Última Mensagem <Play className="w-4 h-4 fill-current" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { title: "Localizações", icon: MapPin, desc: "Encontre um campus próximo a você" },
    { title: "Assista Online", icon: Play, desc: "Junte-se a nós ao vivo todo domingo" },
    { title: "Dízimos e Ofertas", icon: Heart, desc: "Apoie nossa missão e ministério" },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-brand-black text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="mb-8 p-8 rounded-full border border-white/10 bg-white/5 group-hover:bg-brand-copper group-hover:border-brand-copper transition-all duration-500 transform group-hover:-translate-y-2">
              <item.icon className="w-10 h-10 text-brand-copper group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight font-display">{item.title}</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
            <ChevronRight className="w-6 h-6 text-brand-copper opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const EventsGrid = () => {
  const events = [
    { title: "Noite de Adoração", date: "24 de Maio", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop" },
    { title: "El-Shadai Kids", date: "Inscrições Abertas", img: "https://images.unsplash.com/photo-1472512264660-31ec3a9d9ba0?q=80&w=2070&auto=format&fit=crop" },
    { title: "Domingo de Batismo", date: "14 de Junho", img: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=1974&auto=format&fit=crop" },
    { title: "Jovens e Adultos", date: "Semanalmente", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <section id="events" className="py-32 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter font-display">O que está <span className="text-brand-copper">acontecendo</span></h2>
            <div className="h-1 w-32 bg-brand-copper" />
          </div>
          <button className="text-brand-copper font-bold uppercase tracking-widest text-xs hover:text-white transition-colors border-b border-brand-copper pb-1">Ver todos os eventos</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group cursor-pointer"
            >
              <img 
                src={event.img} 
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-brand-copper font-bold text-[10px] uppercase mb-2 tracking-[0.3em]">{event.date}</p>
                <h4 className="text-2xl font-bold tracking-tight font-display">{event.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestMessage = () => {
  return (
    <section id="latest-message" className="py-32 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-24 items-center">
        <div className="mb-16 lg:mb-0">
          <p className="text-brand-copper font-bold uppercase tracking-[0.4em] mb-6 text-sm">Última Mensagem</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-none tracking-tighter uppercase font-display">Refino Pelo <span className="text-brand-copper italic">Fogo</span></h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light italic border-l-4 border-brand-copper pl-8">"O ouro é purificado no fogo, e a fé é purificada através das provações. Junte-se a nós enquanto exploramos o que significa ser refinado."</p>
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-copper p-0.5">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Speaker" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
             </div>
             <div>
               <p className="font-bold text-white text-xl uppercase tracking-tighter">Pr. Clay Harrington</p>
               <p className="text-sm text-brand-copper font-bold uppercase tracking-widest">Pastor Associado</p>
             </div>
          </div>
          <button className="mt-16 bg-brand-copper text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-copper-light transition-all flex items-center justify-center gap-4 shadow-2xl">
            Assistir Agora <Play className="w-4 h-4 fill-current" />
          </button>
        </div>
        
        <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl group cursor-pointer border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1514525253344-f814d0c9e583?q=80&w=1974&auto=format&fit=crop" 
            alt="Latest Message"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors flex items-center justify-center">
             <div className="w-24 h-24 rounded-full border border-white/20 bg-brand-black/60 backdrop-blur-md flex items-center justify-center text-brand-copper transform group-hover:scale-110 transition-transform shadow-2xl">
                <Play className="w-10 h-10 fill-current translate-x-1" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-brand-black text-white pt-32 pb-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-16 h-16 flex items-center justify-center">
                <img src="/logo.png" alt="El-Shadai Logo Footer" className="w-full h-full object-contain" onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.logo-footer-fallback')?.classList.remove('hidden');
                }} />
                <div className="logo-footer-fallback hidden w-12 h-12 rounded-full bg-brand-copper p-0.5">
                   <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-brand-black font-bold text-xs">ES</span>
                   </div>
                </div>
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tighter uppercase leading-none font-display">El-Shadai</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-copper font-bold">AIC Church</div>
            </div>
          </div>
          <p className="text-gray-500 mb-10 leading-relaxed text-sm">
            A Igreja El-Shadai AIC existe para levar a mensagem de Jesus ao mundo através de pessoas comuns, todos os dias.
          </p>
          <div className="flex gap-6">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-brand-copper transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-copper transition-colors" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-brand-copper transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-brand-copper transition-colors" />
          </div>
        </div>

        <div>
           <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-10 text-brand-copper">Localizações</h4>
           <ul className="space-y-6 text-gray-500">
             <li className="hover:text-white transition-colors cursor-pointer text-sm font-medium">Sede Central</li>
             <li className="hover:text-white transition-colors cursor-pointer text-sm font-medium">Campus Sul</li>
             <li className="hover:text-white transition-colors cursor-pointer text-sm font-medium">Campus Norte</li>
             <li className="hover:text-white transition-colors cursor-pointer text-sm font-medium">Igreja Online</li>
           </ul>
        </div>

        <div>
           <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-10 text-brand-copper">Links Rápidos</h4>
           <ul className="space-y-6 text-gray-500">
             <li className="hover:text-white transition-colors cursor-pointer text-sm font-medium">Início</li>
             <li className="hover:text-white transition-colors cursor-pointer text-sm font-medium">Sobre Nós</li>
             <li className="hover:text-white transition-colors cursor-pointer text-sm font-medium">Mídia</li>
             <li className="hover:text-white transition-colors cursor-pointer text-sm font-medium">Contribua</li>
           </ul>
        </div>

        <div>
           <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-10 text-brand-copper">Contato</h4>
           <p className="text-gray-500 text-sm mb-4 flex items-center gap-3"><MapPin className="w-4 h-4 text-brand-copper" /> Av. Exemplo, 1000 - Centro</p>
           <p className="text-gray-500 text-sm mb-10">São Paulo, SP - Brasil</p>
           <p className="text-gray-500 text-sm mb-4">(11) 99999-9999</p>
           <p className="text-gray-500 text-sm">contato@elshadai.com.br</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest leading-none">© 2024 El-Shadai AIC Church. Todos os direitos reservados.</p>
        <div className="flex gap-10 text-[10px] text-gray-600 uppercase tracking-widest">
           <a href="#" className="hover:text-white transition-colors">Privacidade</a>
           <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

const NextSteps = () => {
  const steps = [
    { title: "Planeje sua Visita", desc: "Primeira vez na El-Shadai? Aqui está tudo o que você precisa saber.", action: "Saiba Mais" },
    { title: "Grupos de Vida", desc: "A vida é melhor em comunidade. Encontre o grupo ideal para você.", action: "Encontrar Grupo" },
    { title: "Voluntariado", desc: "Use seus talentos para servir nossa igreja e comunidade.", action: "Começar a Servir" },
  ];

  return (
    <section id="next-steps" className="py-32 px-6 bg-brand-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-8 font-display">Próximos <span className="text-brand-copper">Passos</span></h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Seja você um novo visitante ou alguém que está conosco há anos, sempre há um próximo passo na sua jornada de fé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-16 rounded-sm bg-brand-dark hover:bg-brand-black transition-all border border-white/5 hover:border-brand-copper/30 flex flex-col items-center text-center group shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-white mb-6 font-display tracking-tight">{step.title}</h3>
              <p className="text-gray-500 mb-10 leading-relaxed text-sm">{step.desc}</p>
              <button className="mt-auto text-brand-copper font-bold uppercase tracking-widest text-xs flex items-center gap-3 group-hover:gap-5 transition-all">
                {step.action} <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  return (
    <section id="locations" className="py-32 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
         <MapPin className="w-full h-full text-brand-copper" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-32 items-center">
           <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter uppercase font-display">Encontre uma <span className="text-brand-copper">Unidade</span></h2>
              <p className="text-xl text-gray-400 mb-16 leading-relaxed font-light">
                Com múltiplos campi e uma comunidade online vibrante, há um lugar reservado para você na El-Shadai.
              </p>
              
              <div className="space-y-4">
                 {['Sede Central', 'Zona Leste', 'Zona Sul', 'El-Shadai Online'].map((loc, i) => (
                   <motion.div 
                     key={i}
                     initial={{ x: -20, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="flex items-center justify-between p-8 rounded-sm bg-white/5 hover:bg-brand-copper hover:text-white cursor-pointer transition-all border border-white/5 group"
                   >
                     <span className="text-xl font-bold tracking-tight">{loc}</span>
                     <ChevronRight className="w-6 h-6 text-brand-copper group-hover:text-white transition-colors" />
                   </motion.div>
                 ))}
              </div>
           </div>
           
           <div className="mt-20 lg:mt-0 rounded-sm overflow-hidden shadow-2xl h-[600px] border border-white/5">
             <img 
               src="https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?q=80&w=2070&auto=format&fit=crop" 
               alt="Map View" 
               className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
               referrerPolicy="no-referrer"
             />
           </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black font-sans selection:bg-brand-copper selection:text-white text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LatestMessage />
        <NextSteps />
        <EventsGrid />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

