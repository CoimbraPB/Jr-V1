import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

const heroImages = [
  "https://img.freepik.com/free-photo/view-cool-motorcycle_23-2150704691.jpg?t=st=1773230703~exp=1773234303~hmac=6f21050997d8c6370d837cf9829d98e714aa3d77f1544cadf461c22e878d195f&w=1480",
  "https://images.unsplash.com/photo-1558980664-ce6960be307d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1645894480685-01ecc3bfd7ba?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1567404494163-8cd9a27113b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1735966332654-1fc98e14e9ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const testimonialsData = [
  {
    id: 'guy-warren',
    name: 'Guy Warren',
    quote: 'Acabei com EXATAMENTE a moto que sonhava. Me perguntam: "agora que você tem a moto, tem algo que mudaria?". Fico feliz em dizer que a resposta é não, e isso é raro. Não posso recomendar a Rennsport o suficiente.',
    carImage: 'https://http2.mlstatic.com/D_NQ_NP_2X_707091-MLB99341411134_112025-F-harley-davidson-fat-boy-flstf.webp',
    projectNo: 'Projeto nº 133',
    carName: 'Harley Davidson Fat Boy Cinza',
    baseCar: '1989 Heritage Softail'
  },
  {
    id: 'alastair-watson',
    name: 'Alastair Watson',
    quote: 'Da minha perspectiva, voltar à Rennsport todos os anos (para revisão e manutenção) é muito útil, pois o Joe, que montou grande parte da moto, está lá para lidar com qualquer problema. Tenho a moto há quase 4 anos e a levei para o Festival of Speed e encontros de Harley, onde ela sempre ganha lugar de destaque - um simples reconhecimento de quão boa é a moto que a Rennsport produziu.',
    carImage: 'https://motociclismoonline.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/10/harley_1200_custom_sai_de_linha_2.jpg.webp',
    projectNo: 'Projeto nº 87',
    carName: 'Harley Davidson Sportster Custom',
    baseCar: '1988 Sportster 1200'
  },
  {
    id: 'private',
    name: 'Cliente particular',
    quote: 'Construir minha moto com a Rennsport foi a realização de um sonho e o Paul e a equipe se desdobraram em cada etapa para garantir que a experiência de montagem fosse tão parte do sonho quanto possuir e pilotar o produto final.',
    carImage: 'https://motociclismoonline.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/12/Harley-Davidson-Road-King-Venom-9-1024x682.jpg.webp',
    projectNo: 'Projeto nº 123',
    carName: 'Harley Davidson Road King Verde',
    baseCar: '1987 Electra Glide'
  }
];

const modelsData = [
  {
    id: 'evo',
    name: 'Softail / Custom',
    image: 'https://i.pinimg.com/736x/85/5d/b3/855db3b098dd8161b429f5f0be716253.jpg'
  },
  {
    id: 'st',
    name: 'Touring',
    image: 'https://i.pinimg.com/736x/f6/d5/c3/f6d5c3101972edbe5dbdf487d55d7ad6.jpg'
  },
  {
    id: 'str',
    name: 'Sportster',
    image: 'https://i.pinimg.com/736x/3a/4e/07/3a4e0793ac074b7e3647c240029d4981.jpg'
  },
  {
    id: 'rsr',
    name: 'CVO',
    image: 'https://i.pinimg.com/736x/1c/6f/b7/1c6fb7dec41ccf49a54dc14b225a1dae.jpg'
  }
];

export function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeModelTab, setActiveModelTab] = useState(2); // ST-R default
  const marqueeRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 0.5, 1], ["-50%", "0%", "50%"]);
  const x2 = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "0%", "-50%"]);

  const { scrollYProgress: parallaxScrollY } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(parallaxScrollY, [0, 1], ["-20%", "20%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveModelTab((prev) => (prev + 1) % modelsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeModelTab]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section data-section-dark="true" className="relative h-screen flex flex-col justify-center px-10 overflow-hidden flex-none">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img 
              key={currentImage}
              src={heroImages[currentImage]} 
              alt={`Harley Davidson - ${currentImage + 1}`} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        </div>
        
        <div className="z-10 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-medium tracking-tight mb-8"
          >
            Motos Harley Davidson<br />Feitas Sob Medida
          </motion.h1>
          
          <div className="flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className="py-2 focus:outline-none"
              >
                <div 
                  className={`h-[2px] w-12 transition-colors duration-500 ${
                    index === currentImage ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white text-black px-10 flex-none">
        <div className="w-full pt-[8rem] md:pt-[12rem]"></div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="uppercase text-[11px] font-display tracking-widest mb-4 md:mb-0">
            Bem-vindo à rennsport
          </div>
          <h4 className="md:col-span-2 font-display text-2xl md:text-3xl lg:text-[2rem] font-bold leading-[1.25] tracking-tight">
            Localizada no coração de São Paulo, a Rennsport busca a perfeição. Nossa equipe é especializada em criar algumas das customizações de Harley Davidson mais cobiçadas do mundo.
          </h4>
        </div>
        
        <div className="w-full pt-[8rem] md:pt-[12rem]"></div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <img 
            src="https://images.unsplash.com/photo-1661834172037-55a4d2ac026d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Detalhe da Moto" 
            className="w-full aspect-[2/3] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col justify-start items-start max-w-[450px] lg:max-w-[600px] md:justify-self-end w-full">
            <img 
              src="https://images.unsplash.com/photo-1588013214807-531b0d980547?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Painel da Moto" 
              className="w-full h-auto object-cover hidden sm:block"
              referrerPolicy="no-referrer"
            />
            <div className="w-full pt-12 hidden sm:block"></div>
            <h3 className="font-display text-[2rem] lg:text-[40px] font-bold tracking-[-1px] leading-[1.3]">Redefina sua pilotagem</h3>
            <div className="w-full pt-8"></div>
            <p className="text-[#3f424dcc] text-[15px] font-light leading-[1.48]">
              Nossa jornada juntos começa com uma tela em branco. Conceitualizamos o seu sonho e especificamos como construir uma Harley sob medida para você. Cada detalhe, desde o formato do tanque até as peças, materiais e acabamentos, é curado para ecoar o seu estilo, garantindo que sua Harley Rennsport não seja apenas uma moto, mas uma assinatura.
            </p>
            <div className="w-full pt-12"></div>
            <Link to="/about" className="inline-flex items-center justify-center border border-[#b2b2b2] bg-white text-black hover:bg-black hover:text-white transition-colors font-bold text-[12px]">
              <div className="px-8 py-4">Sobre nós</div>
            </Link>
          </div>
        </div>
        
        <div className="w-full pt-[8rem] md:pt-[12rem]"></div>
      </section>

      {/* Made in Germany Section */}
      <section ref={marqueeRef} className="bg-white text-black py-24 overflow-hidden flex-none">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden">
          <motion.h1 
            style={{ x: x1 }}
            className="font-display text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[9rem] leading-none tracking-[-2px] 2xl:tracking-[-4px] font-bold text-center whitespace-nowrap py-[10px]"
          >
            Feita nos EUA
          </motion.h1>
          <motion.h1 
            style={{ x: x2 }}
            className="font-display text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[9rem] leading-none tracking-[-2px] 2xl:tracking-[-4px] font-bold text-center whitespace-nowrap py-[10px]"
          >
            Aperfeiçoada no Brasil
          </motion.h1>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white text-black py-12 px-10 flex-none">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            image="https://images.unsplash.com/photo-1655485257812-4bf4a518bd53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="O motor de excelência"
            description="O motor Rennsport evoca todo o potencial de como um V-Twin deve soar. Seu motor é ajustado perfeitamente com o seu veículo, mantendo a alma e o ronco clássico que consagraram as motos Harley Davidson originais."
          />
          <FeatureCard 
            image="https://i.pinimg.com/736x/a9/22/e0/a922e01a92ab1913ddd5ee0108c82439.jpg"
            title="Escolhido por você. Fornecido por nós"
            description="Buscamos peças exclusivas para a customização da sua moto através da nossa rede global de parceiros altamente especializados. Você quer bancos revestidos em couro legítimo de arraia? Claro."
          />
          <FeatureCard 
            image="https://images.unsplash.com/photo-1599135194695-d42501c42809?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Chassi e tanque customizados"
            description="Somos especialistas em moldar tanques e paralamas artesanalmente, permitindo adaptar o formato e as características da moto para você. Nosso trabalho em metal de alta resistência dá à Harley Rennsport uma sensação autêntica e permite que a moto domine a estrada como planejado."
          />
        </div>
      </section>

      {/* Explore Menu */}
      <section className="bg-white text-black py-24 px-10 flex-none">
        <div className="w-full">
          <h3 className="font-display text-sm tracking-widest uppercase mb-12">Explorar</h3>
          <div className="flex flex-col">
            <ExploreLink to="/bespoke-builds" text="Projetos sob medida" />
            <ExploreLink to="/projects" text="Projetos" />
            <ExploreLink to="/current-stock" text="Estoque atual" />
            <ExploreLink to="/about" text="Sobre" />
            <ExploreLink to="/contact" text="Contato" />
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section 
        ref={parallaxRef} 
        data-section-dark="true" 
        className="relative w-full h-[60vh] md:h-[100vh] overflow-hidden flex-none"
      >
        <motion.div 
          className="absolute inset-0 w-full h-[140%] bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1758405170505-b4ea34e90604?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            y: backgroundY
          }}
        />
      </section>

      {/* Testimonials */}
      <section data-section-dark="true" className="bg-black text-white py-24 px-10 border-t border-white/10 flex-none">
        <div className="w-full max-w-7xl mx-auto">
          <h6 className="font-display text-sm tracking-widest uppercase mb-24 text-white">Ouça o que nossos clientes têm a dizer</h6>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between">
            {/* Left Side: Quote and Details */}
            <div className="flex-1 flex gap-6 md:gap-12">
              {/* Quote Icon */}
              <div className="flex-shrink-0 pt-2">
                <img src="https://cdn.prod.website-files.com/6685496347877a8a2ee2b4e9/66b235357c977d7e5c5ab866_quote.svg" alt="Quote" className="w-10 h-10 md:w-16 md:h-16 opacity-30" />
              </div>
              
              {/* Content */}
              <div className="relative grid w-full">
                {testimonialsData.map((testimonial, index) => (
                  <div
                    key={`content-${testimonial.id}`}
                    className={`col-start-1 row-start-1 flex flex-col h-full transition-all duration-500 ease-in-out ${
                      activeTestimonial === index 
                        ? 'opacity-100 translate-y-0 pointer-events-auto z-10' 
                        : 'opacity-0 translate-y-4 pointer-events-none z-0'
                    }`}
                    aria-hidden={activeTestimonial !== index}
                  >
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl lg:text-[2.5rem] font-medium tracking-tight leading-tight mb-12">
                        {testimonial.quote}
                      </h3>
                      <div className="font-bold text-sm mb-16">
                        - {testimonial.name}
                      </div>
                    </div>
                    
                    <div className="mt-auto flex items-center gap-6">
                      <img 
                        src={testimonial.carImage} 
                        alt={testimonial.carName} 
                        className="w-32 h-20 md:w-40 md:h-24 object-cover rounded-sm"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col">
                        <div className="text-sm text-white">{testimonial.projectNo}</div>
                        <div className="font-bold text-lg mt-1">{testimonial.carName}</div>
                        <div className="font-bold text-xs text-white mt-1 uppercase">{testimonial.baseCar}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Tabs */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x lg:w-56 flex-shrink-0">
              {testimonialsData.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`relative w-32 h-20 lg:w-full lg:h-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-sm transition-all duration-300 snap-start ${
                    activeTestimonial === index ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                  }`}
                >
                  <img 
                    src={testimonial.carImage} 
                    alt={`Thumbnail for ${testimonial.name}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Model Range */}
      <section className="bg-white text-black h-screen flex flex-col lg:flex-row flex-none overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-full lg:w-7/12 flex items-center justify-center p-6 lg:p-12 h-1/2 lg:h-full">
          <div className="h-full aspect-[9/16] relative overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.img 
                key={`model-bg-${activeModelTab}`}
                src={modelsData[activeModelTab].image} 
                alt={`Harley Davidson ${modelsData[activeModelTab].name}`} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center px-6 py-8 lg:pr-16 lg:pl-8 xl:pl-12 h-1/2 lg:h-full overflow-y-auto">
          <h3 className="font-display text-xs font-medium tracking-widest uppercase mb-8 text-black">
            Explore a linha de modelos Harley
          </h3>
          
          <div className="relative z-10 flex flex-col flex-none justify-start self-start items-stretch w-full border-t border-transparent">
            {modelsData.map((model, index) => (
              <button
                key={model.id}
                onClick={() => setActiveModelTab(index)}
                className="group relative flex flex-col text-left pb-2 pt-4 border-b border-gray-300"
              >
                <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter transition-colors duration-300 leading-none ${
                  activeModelTab === index ? 'text-black' : 'text-gray-300 group-hover:text-gray-400'
                }`}>
                  {model.name}
                </h2>
                
                {/* Progress Bar Container */}
                <div className="absolute bottom-[-1px] left-0 w-full h-[1px] overflow-hidden">
                  {activeModelTab === index && (
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-black"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      key={`progress-${activeModelTab}`}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          <Link 
            to="/models" 
            className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors w-fit"
          >
            Ver especificações dos modelos
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-6">
      <img src={image} alt={title} className="w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
      <h3 className="font-display text-2xl font-medium tracking-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ExploreLink({ to, text }: { to: string, text: string }) {
  return (
    <Link 
      to={to}
      className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-200 hover:text-black transition-colors py-4 border-b border-gray-200 last:border-none"
    >
      {text}
    </Link>
  );
}