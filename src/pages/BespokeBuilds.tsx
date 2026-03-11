import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useAnimationFrame, useMotionValue } from 'motion/react';
import { Link } from 'react-router-dom';

function ParallaxImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const x = useMotionValue(0);

  useAnimationFrame(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const center = window.innerWidth / 2;
    const elementCenter = rect.left + rect.width / 2;
    const distance = elementCenter - center;
    // 15% parallax effect relative to the center of the screen
    x.set(distance * 0.15);
  });

  return (
    <motion.img 
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ x }}
      referrerPolicy="no-referrer"
    />
  );
}

export function BespokeBuilds() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(3000);

  useLayoutEffect(() => {
    // Force scroll to top immediately when this component mounts
    window.scrollTo(0, 0);
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }

    const updateRange = () => {
      if (containerRef.current) {
        setScrollRange(containerRef.current.scrollWidth - window.innerWidth);
      }
    };
    
    updateRange();
    // Small delay to ensure images are loaded/rendered
    setTimeout(updateRange, 100);
    setTimeout(updateRange, 500);
    window.addEventListener('resize', updateRange);
    return () => window.removeEventListener('resize', updateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <div 
      ref={targetRef} 
      style={{ height: `calc(100vh + ${scrollRange}px)` }}
      className="relative bg-black text-white"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
          ref={containerRef}
          style={{ x }} 
          className="flex h-full items-center gap-16 md:gap-32 pr-12 md:pr-24 w-max"
        >
          {/* Hero Section */}
          <div className="flex-shrink-0 w-screen flex flex-col justify-center h-screen relative">
            <h1 className="font-display text-[12vw] leading-[0.9] font-medium tracking-tighter mb-8 absolute z-10 top-1/2 -translate-y-1/2 left-12 md:left-24">
              Construções<br />Sob Medida
            </h1>
            <div className="w-full h-screen relative overflow-hidden">
              <ParallaxImage src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" alt="Construções Sob Medida" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%] opacity-50" />
            </div>
          </div>

          {/* 01 Reunião Inicial */}
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center">
            <div className="text-white/50 text-4xl md:text-6xl font-display mb-4">01</div>
            <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">Reunião inicial</h2>
            <div className="text-lg text-white/80 space-y-6 max-w-xl">
              <p>Comece a conversa conosco em nosso showroom em São Paulo.</p>
              <p>Para que você conheça um pouco do nosso processo, nossa equipe apresentará alguns de nossos projetos inspiradores atuais e mostrará nossa oficina.</p>
              <p>A reunião inicial também inclui entender mais sobre seu histórico de pilotagem e preferências para criar a moto que atenda especificamente a você. Seja uma customização para o dia a dia, viagens longas ou performance, podemos personalizar sua experiência para atender às suas necessidades.</p>
            </div>
          </div>

          <div className="flex-shrink-0 w-[60vw] md:w-[30vw] h-screen py-0">
            <div className="w-full h-full overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop" alt="Reunião inicial" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          <div className="flex-shrink-0 w-[70vw] md:w-[40vw] flex flex-col gap-12 justify-center">
            <div className="h-[50vh] overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1620882989508-3729d7c04005?q=80&w=2070&auto=format&fit=crop" alt="Oficina" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
            <p className="text-xl text-white/80 max-w-lg">
              Se você está começando do zero ou já tem uma moto doadora e uma visão específica (ou algo no meio termo), deixe-nos ajudá-lo a mapear o processo.
            </p>
          </div>

          <div className="flex-shrink-0 w-[60vw] md:w-[35vw] h-[60vh] overflow-hidden relative">
            <ParallaxImage src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop" alt="Harley Davidson" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
          </div>

          {/* 02 Escolha o modelo */}
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center">
            <div className="text-white/50 text-4xl md:text-6xl font-display mb-4">02</div>
            <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">Escolha o modelo</h2>
            <div className="text-lg text-white/80 space-y-6 max-w-xl mb-12">
              <p>Se você ainda não tem uma moto doadora adequada, nossa equipe de especialistas o guiará pelo processo de tomada de decisão, sugerindo qual modelo pode se adequar melhor à sua visão, e providenciará o modelo que você preferir. Sua moto doadora será então trazida para nossa oficina, pronta para a etapa 3, a escolha do seu modelo Rennsport.</p>
              <p>Todos os modelos estão disponíveis em diversas variações de chassi e motorização.</p>
            </div>
            <Link to="/models" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors w-fit rounded-sm">
              Saiba mais
            </Link>
          </div>

          <div className="flex-shrink-0 w-[80vw] md:w-[50vw] grid grid-cols-2 gap-8">
            <div className="border border-white/20 p-8 flex flex-col items-center justify-center relative aspect-[4/3]">
              <div className="absolute top-6 left-6 text-white/60">Softail / Custom</div>
              <img src="" alt="Softail / Custom" className="w-3/4 object-cover rounded-md" />
            </div>
            <div className="border border-white/20 p-8 flex flex-col items-center justify-center relative aspect-[4/3]">
              <div className="absolute top-6 left-6 text-white/60">Touring</div>
              <img src="" alt="Touring" className="w-3/4 object-cover rounded-md" />
            </div>
            <div className="border border-white/20 p-8 flex flex-col items-center justify-center relative aspect-[4/3]">
              <div className="absolute top-6 left-6 text-white/60">Sportster</div>
              <img src="" alt="Sportster" className="w-3/4 object-cover rounded-md" />
            </div>
            <div className="border border-white/20 p-8 flex flex-col items-center justify-center relative aspect-[4/3]">
              <div className="absolute top-6 left-6 text-white/60">CVO</div>
              <img src="" alt="CVO" className="w-3/4 object-cover rounded-md" />
            </div>
          </div>

          {/* 03 Conceitualizar */}
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center">
            <div className="text-white/50 text-4xl md:text-6xl font-display mb-4">03</div>
            <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">Conceitualizar</h2>
            <div className="text-lg text-white/80 space-y-6 max-w-xl">
              <p>Nesta fase, entramos nos detalhes.</p>
              <p>Vamos falar de potência, freios, peças, acabamentos, suspensão, cor ou qualquer outra coisa que você desejar. É a sua visão e o nosso trabalho é torná-la realidade. Se você quer que sua moto combine com a cor da sua jaqueta favorita ou quer bancos revestidos em couro legítimo de arraia (ambos exemplos reais que já encontramos na Rennsport), esta é a fase em que discutimos seus sonhos e ideias.</p>
            </div>
          </div>

          <div className="flex-shrink-0 w-[50vw] md:w-[30vw] h-screen py-0">
            <div className="w-full h-full overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1558980664-ce6960be307d?q=80&w=2070&auto=format&fit=crop" alt="Conceitualizar" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          <div className="flex-shrink-0 w-[50vw] md:w-[30vw] h-[70vh] self-end mb-24 overflow-hidden relative">
            <ParallaxImage src="https://images.unsplash.com/photo-1645894480685-01ecc3bfd7ba?q=80&w=1888&auto=format&fit=crop" alt="Conceitualizar" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
          </div>

          <div className="flex-shrink-0 w-[70vw] md:w-[40vw] flex flex-col gap-12 justify-center">
            <div className="h-[60vh] overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1567404494163-8cd9a27113b7?q=80&w=1470&auto=format&fit=crop" alt="Interior" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
            <p className="text-xl text-white/80 max-w-lg">
              A fase de Conceitualização garante que sua Harley Rennsport não seja apenas uma moto, mas uma assinatura.
            </p>
          </div>

          <div className="flex-shrink-0 w-[40vw] md:w-[25vw] h-screen py-0">
            <div className="w-full h-full overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1735966332654-1fc98e14e9ab?q=80&w=2070&auto=format&fit=crop" alt="Detalhes" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          <div className="flex-shrink-0 w-[60vw] md:w-[35vw] flex flex-col justify-center">
            <p className="text-xl text-white/80 max-w-lg">
              Deixando a parte técnica de lado, também nos orgulhamos de criar algumas das Harleys mais estilisticamente empolgantes e luxuosas. Seja qual for o visual que você deseja para os detalhes, podemos atender - se você quer um conjunto específico de instrumentos, guidão ou tanque, temos uma ampla gama de materiais e opções premium disponíveis.
            </p>
          </div>

          <div className="flex-shrink-0 w-[40vw] md:w-[25vw] h-[80vh] self-end mb-24 overflow-hidden relative">
            <ParallaxImage src="https://images.unsplash.com/photo-1655485257812-4bf4a518bd53?q=80&w=687&auto=format&fit=crop" alt="Motor" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
          </div>

          <div className="flex-shrink-0 w-[70vw] md:w-[40vw] flex flex-col gap-12 justify-center">
            <div className="h-[70vh] overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1599135194695-d42501c42809?q=80&w=686&auto=format&fit=crop" alt="Oficina" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
            <p className="text-xl text-white/80 max-w-lg">
              Na Rennsport, contratamos apenas os melhores técnicos especializados em Harley Davidson. Nossa equipe poderá aconselhá-lo sobre qual motor e transmissão atenderão melhor aos requisitos da sua moto, e fornecer outras recomendações técnicas.
            </p>
          </div>

          {/* Quote 1 */}
          <div className="flex-shrink-0 w-[80vw] md:w-[50vw] flex gap-8 items-start">
            <img src="https://cdn.prod.website-files.com/6685496347877a8a2ee2b4e9/66b235357c977d7e5c5ab866_quote.svg" alt="Quote" className="w-16 h-16 opacity-20 flex-shrink-0" />
            <div className="flex flex-col gap-12">
              <h3 className="text-3xl md:text-4xl font-display leading-tight">
                Construir minha moto com a Rennsport foi a realização de um sonho e o Paul e a equipe se desdobraram em cada etapa para garantir que a experiência de montagem fosse tão parte do sonho quanto possuir e pilotar o produto final.
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="font-bold">- Cliente particular</div>
                <div className="flex items-center gap-6">
                  <img src="https://motociclismoonline.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/12/Harley-Davidson-Road-King-Venom-9-1024x682.jpg.webp" alt="Car" className="w-32 h-20 object-cover rounded-sm" />
                  <div className="text-sm">
                    <div className="font-bold">Projeto nº 123</div>
                    <div>Harley Davidson Road King Verde</div>
                    <div className="text-white/60 uppercase mt-1 text-xs">1987 Electra Glide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[90vw] md:w-[70vw] h-screen py-0">
            <div className="w-full h-full overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=2070&auto=format&fit=crop" alt="Huge" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          {/* 04 Especificação */}
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center">
            <div className="text-white/50 text-4xl md:text-6xl font-display mb-4">04</div>
            <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">Especificação</h2>
            <div className="text-lg text-white/80 space-y-6 max-w-xl">
              <p>Após uma análise cuidadosa dos pedidos feitos na fase de conceitualização, nossa equipe fornecerá uma especificação detalhada e um orçamento. Oferecemos suporte para aconselhar quais peças especiais devem ser priorizadas e o que pode ou não ser possível para garantir a pilotagem mais gratificante.</p>
              <p>Nesta fase, também forneceremos uma indicação do cronograma de construção e quando você pode esperar retirar sua Harley Rennsport.</p>
            </div>
          </div>

          <div className="flex-shrink-0 w-[50vw] md:w-[30vw] h-screen py-0">
            <div className="w-full h-full overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2070&auto=format&fit=crop" alt="Spec" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          <div className="flex-shrink-0 w-[70vw] md:w-[40vw] flex flex-col gap-12 justify-center">
            <div className="h-[60vh] overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop" alt="Spec" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
            <p className="text-xl text-white/80 max-w-lg">
              Aqui na Rennsport, nós o guiaremos de perto pela especificação que você deseja. Nosso conhecimento e experiência significam que podemos oferecer uma análise abrangente de quais peças são, ou não, necessárias para a sua moto.
            </p>
          </div>

          <div className="flex-shrink-0 w-[50vw] md:w-[30vw] h-[70vh] overflow-hidden relative">
            <ParallaxImage src="https://images.unsplash.com/photo-1620882989508-3729d7c04005?q=80&w=2070&auto=format&fit=crop" alt="Spec" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
          </div>

          {/* Quote 2 */}
          <div className="flex-shrink-0 w-[80vw] md:w-[50vw] flex gap-8 items-start">
            <img src="https://cdn.prod.website-files.com/6685496347877a8a2ee2b4e9/66b235357c977d7e5c5ab866_quote.svg" alt="Quote" className="w-16 h-16 opacity-20 flex-shrink-0" />
            <div className="flex flex-col gap-12">
              <h3 className="text-3xl md:text-4xl font-display leading-tight">
                "Da minha perspectiva, voltar à Rennsport todos os anos (para revisão e manutenção) é muito útil, pois o Joe, que montou grande parte da moto, está lá para lidar com qualquer problema. Tenho a moto há quase 4 anos e a levei para o Festival of Speed e encontros de Harley, onde ela sempre ganha lugar de destaque - um simples reconhecimento de quão boa é a moto que a Rennsport produziu."
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="font-bold">- Alastair Watson</div>
                <div className="flex items-center gap-6">
                  <img src="https://motociclismoonline.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/10/harley_1200_custom_sai_de_linha_2.jpg.webp" alt="Car" className="w-32 h-20 object-cover rounded-sm" />
                  <div className="text-sm">
                    <div className="font-bold">Projeto nº 87</div>
                    <div>Harley Davidson Sportster Custom</div>
                    <div className="text-white/60 uppercase mt-1 text-xs">1988 Sportster 1200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[50vw] md:w-[30vw] h-screen py-0">
            <div className="w-full h-full overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" alt="Spec" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          {/* 05 Construção */}
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center">
            <div className="text-white/50 text-4xl md:text-6xl font-display mb-4">05</div>
            <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">Construção</h2>
            <div className="text-lg text-white/80 space-y-6 max-w-xl mb-12">
              <p>Visite nossa oficina para ver sua visão ganhar vida em primeira mão. Nesta fase, sua Harley Davidson customizada é montada do zero por nossos técnicos. Aqui na Rennsport, você é o designer, então sabemos como é importante que você se envolva no processo. Ao longo de vários meses, construímos cuidadosamente a moto dos seus sonhos, oferecendo várias oportunidades para você vir e testemunhar o progresso.</p>
            </div>
            <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-sm font-bold hover:bg-white hover:text-black transition-colors w-fit rounded-sm">
              Saiba mais
            </Link>
          </div>

          <div className="flex-shrink-0 w-[60vw] md:w-[40vw] h-screen py-0">
            <div className="w-full h-full overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1645894480685-01ecc3bfd7ba?q=80&w=1888&auto=format&fit=crop" alt="Build" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          <div className="flex-shrink-0 w-[70vw] md:w-[40vw] flex flex-col gap-12 justify-center">
            <div className="h-[60vh] overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1567404494163-8cd9a27113b7?q=80&w=1470&auto=format&fit=crop" alt="Build" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
            <p className="text-xl text-white/80 max-w-lg">
              Todo o processo do início ao fim normalmente leva de 6 a 12 meses, então se houver ajustes que você gostaria de fazer nesse meio tempo em peças específicas, avise-nos e faremos acontecer.
            </p>
          </div>

          <div className="flex-shrink-0 w-[40vw] md:w-[25vw] h-[70vh] self-start mt-24 overflow-hidden relative">
            <ParallaxImage src="https://images.unsplash.com/photo-1735966332654-1fc98e14e9ab?q=80&w=2070&auto=format&fit=crop" alt="Build" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
          </div>

          {/* Quote 3 */}
          <div className="flex-shrink-0 w-[80vw] md:w-[50vw] flex gap-8 items-start">
            <img src="https://cdn.prod.website-files.com/6685496347877a8a2ee2b4e9/66b235357c977d7e5c5ab866_quote.svg" alt="Quote" className="w-16 h-16 opacity-20 flex-shrink-0" />
            <div className="flex flex-col gap-12">
              <h3 className="text-3xl md:text-4xl font-display leading-tight">
                Acabei com EXATAMENTE a moto que sonhava. Me perguntam: "agora que você tem a moto, tem algo que mudaria?". Fico feliz em dizer que a resposta é não, e isso é raro. Não posso recomendar a Rennsport o suficiente.
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="font-bold">- Guy Warren</div>
                <div className="flex items-center gap-6">
                  <img src="https://http2.mlstatic.com/D_NQ_NP_2X_707091-MLB99341411134_112025-F-harley-davidson-fat-boy-flstf.webp" alt="Car" className="w-32 h-20 object-cover rounded-sm" />
                  <div className="text-sm">
                    <div className="font-bold">Projeto nº 133</div>
                    <div>Harley Davidson Fat Boy Cinza</div>
                    <div className="text-white/60 uppercase mt-1 text-xs">1989 Heritage Softail</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[50vw] md:w-[30vw] h-screen py-0">
            <div className="w-full h-full overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop" alt="Build" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          {/* 06 Pilotar */}
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center">
            <div className="text-white/50 text-4xl md:text-6xl font-display mb-4">06</div>
            <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">Pilotar</h2>
            <div className="text-lg text-white/80 space-y-6 max-w-xl mb-12">
              <p>Finalmente, seu sonho tem rodas.</p>
              <p>Garantimos que sua moto seja testada na estrada, ajustada e com qualidade comprovada.</p>
              <p>O processo de construção cuidadosa e meticulosa da sua Harley está completo, e agora é hora de experimentar sua nova máquina.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-sm font-bold hover:bg-white hover:text-black transition-colors w-fit rounded-sm">
              Fale conosco
            </Link>
          </div>

          <div className="flex-shrink-0 w-[60vw] md:w-[35vw] h-screen py-0">
            <div className="w-full h-full overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1620882989508-3729d7c04005?q=80&w=2070&auto=format&fit=crop" alt="Drive" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          <div className="flex-shrink-0 w-[70vw] md:w-[40vw] flex flex-col gap-12 justify-center">
            <p className="text-xl text-white/80 max-w-lg">
              A Rennsport normalmente trabalha em cinco ou seis Harleys simultaneamente, então o processo de construção de obras-primas e refinamento de nossa experiência está em constante evolução em nossa instalação de produção.
            </p>
            <div className="h-[60vh] ml-24 overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop" alt="Drive" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          <div className="flex-shrink-0 w-[90vw] md:w-[70vw] h-screen py-0">
            <div className="w-full h-full overflow-hidden relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1558980664-ce6960be307d?q=80&w=2070&auto=format&fit=crop" alt="Drive" className="w-[140%] max-w-none h-full object-cover absolute left-[-20%]" />
            </div>
          </div>

          {/* Contact */}
          <div className="flex-shrink-0 w-[90vw] md:w-[60vw] flex flex-col justify-center pr-24">
            <div className="text-xs tracking-widest uppercase mb-12 text-white/60">Contato</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl leading-tight">
              Pensando em construir uma Harley sob medida? Entre em contato hoje para iniciar a conversa.
            </h2>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors w-fit rounded-sm">
                Fale conosco
              </Link>
              <div className="flex flex-col gap-4 border-t border-white/20 pt-8 w-full md:w-auto">
                <p className="text-white/80 leading-relaxed">
                  Vila Madalena<br />
                  São Paulo - SP<br />
                  Brasil
                </p>
                <a href="https://maps.app.goo.gl/YJY9YPutBFWunupX7" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white underline text-sm">
                  Ver no mapa
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
