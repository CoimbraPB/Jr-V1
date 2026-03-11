import { motion } from 'motion/react';

export function CurrentStock() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight"
          >
            Current<br />stock
          </motion.h1>
          <p className="text-gray-600 max-w-sm text-lg leading-relaxed">
            We offer Rennsport cars as well as quality donor cars, ready to be built into your own bespoke Rennsport car.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          <StockItem 
            title="Rennsport Evolution S" 
            price="£195,000" 
            image1="https://picsum.photos/seed/porschestock1/1200/800"
            image2="https://picsum.photos/seed/porschestock2/800/800"
          />
          <StockItem 
            title="Rennsport Evolution Targa" 
            price="£185,000" 
            image1="https://picsum.photos/seed/porschestock3/1200/800"
            image2="https://picsum.photos/seed/porschestock4/800/800"
          />
          <StockItem 
            title="Rennsport ST-R Car 150" 
            price="Sold" 
            image1="https://picsum.photos/seed/porschestock5/1200/800"
            image2="https://picsum.photos/seed/porschestock6/800/800"
            sold
          />
        </div>
      </div>
    </div>
  );
}

function StockItem({ title, price, image1, image2, sold = false }: { title: string, price: string, image1: string, image2: string, sold?: boolean }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-gray-200 pt-12">
      <div className="lg:col-span-4 flex flex-col gap-6 sticky top-32">
        {sold && <span className="bg-red-600 text-white text-xs uppercase tracking-widest px-3 py-1 rounded w-fit font-bold">Sold</span>}
        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">{title}</h2>
        <p className="text-gray-500 text-xl">{price}</p>
        <button className="border border-black rounded-full px-8 py-4 w-fit hover:bg-black hover:text-white transition-colors font-medium mt-4">
          View listing
        </button>
      </div>
      <div className="lg:col-span-8 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
        <img src={image1} alt={title} className="w-full md:w-2/3 aspect-[3/2] object-cover rounded-lg snap-center shrink-0" referrerPolicy="no-referrer" />
        <img src={image2} alt={title} className="w-full md:w-1/3 aspect-square object-cover rounded-lg snap-center shrink-0" referrerPolicy="no-referrer" />
      </div>
    </div>
  );
}
