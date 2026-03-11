import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="bg-blue-600 text-white pt-32 pb-24 px-6 md:px-12 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1661834172037-55a4d2ac026d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Porsche About" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="z-10 max-w-7xl mx-auto w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight max-w-4xl leading-tight"
          >
            At Rennsport, you are the designer. Our production facility in the Cotswolds expertly crafts bespoke Porsche 911 Restomods, allowing us to transform your visions into reality.
          </motion.h1>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img src="https://picsum.photos/seed/porschecraft/800/1000" alt="Craft" className="w-full aspect-[4/5] object-cover rounded-lg" referrerPolicy="no-referrer" />
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight">Your drive.<br/>Our craft.</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Rennsport, we let you do the talking. Our technical expertise ensures that we can transfer your vision from paper to reality. We measure success in two streams: an unmatched dedication to excellent engineering, and a second-to-none client satisfaction rate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight">Uniting design & engineering</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Rennsport is a family business owned by father and son Keith and Paul Cockell. The Cockells have built a reputable name within the automotive industry through their state-of-the-art engineering and contributions to British car design.
            </p>
          </div>
          <img src="https://picsum.photos/seed/porscheengineering/800/1000" alt="Engineering" className="w-full aspect-[4/5] object-cover rounded-lg order-1 lg:order-2" referrerPolicy="no-referrer" />
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-16 max-w-2xl">
            A team of certified Porsche technicians & automotive experts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <TeamMember name="Paul Cockell" role="Founder & Managing Director" image="https://picsum.photos/seed/paul/600/800" />
            <TeamMember name="Keith Cockell" role="Design & Engineering" image="https://picsum.photos/seed/keith/600/800" />
            <TeamMember name="Joe Turner" role="Workshop Manager" image="https://picsum.photos/seed/joe/600/800" />
            <TeamMember name="Sam Newman" role="Senior Technician" image="https://picsum.photos/seed/sam/600/800" />
            <TeamMember name="Jon Shephard" role="Workshop Technician" image="https://picsum.photos/seed/jon/600/800" />
            <TeamMember name="Charlie Howard" role="Apprentice Technician" image="https://picsum.photos/seed/charlie/600/800" />
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamMember({ name, role, image }: { name: string, role: string, image: string }) {
  return (
    <div className="flex flex-col gap-4">
      <img src={image} alt={name} className="w-full aspect-[3/4] object-cover rounded-lg" referrerPolicy="no-referrer" />
      <div>
        <h3 className="font-display text-2xl font-medium tracking-tight">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
}
