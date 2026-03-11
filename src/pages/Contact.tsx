import { motion } from 'motion/react';

export function Contact() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-24"
        >
          Contact
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col gap-16">
            <div>
              <h2 className="font-display text-3xl font-medium mb-6">Get in touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're looking to commission a bespoke build, enquire about our current stock, or discuss a restoration project, our team is ready to help.
              </p>
              <div className="flex flex-col gap-4 text-lg">
                <a href="tel:+447881973911" className="hover:text-gray-500 transition-colors">+44 788 197 3911</a>
                <a href="mailto:enquiries@911rennsport.co.uk" className="hover:text-gray-500 transition-colors">enquiries@911rennsport.co.uk</a>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-medium mb-6">Visit us</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Units 7-9,<br/>
                Cotswold Business Village<br/>
                Moreton-in-Marsh<br/>
                Gloucestershire GL56 0JQ
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <strong>Opening hours:</strong><br/>
                Monday to Friday<br/>
                9:00am - 5:30pm<br/>
                Viewing by appointment only
              </p>
              <a href="#" className="inline-block border border-black rounded-full px-8 py-4 hover:bg-black hover:text-white transition-colors font-medium mt-4">
                Get directions
              </a>
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-display text-sm uppercase tracking-widest text-gray-500">Name</label>
                <input type="text" id="name" className="border-b border-gray-300 py-4 text-xl outline-none focus:border-black transition-colors bg-transparent" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-display text-sm uppercase tracking-widest text-gray-500">Email</label>
                <input type="email" id="email" className="border-b border-gray-300 py-4 text-xl outline-none focus:border-black transition-colors bg-transparent" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-display text-sm uppercase tracking-widest text-gray-500">Phone</label>
                <input type="tel" id="phone" className="border-b border-gray-300 py-4 text-xl outline-none focus:border-black transition-colors bg-transparent" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-display text-sm uppercase tracking-widest text-gray-500">Message</label>
                <textarea id="message" rows={4} className="border-b border-gray-300 py-4 text-xl outline-none focus:border-black transition-colors bg-transparent resize-none"></textarea>
              </div>
              <button type="submit" className="bg-black text-white rounded-full px-8 py-4 w-fit hover:bg-black/80 transition-colors font-medium mt-8">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
