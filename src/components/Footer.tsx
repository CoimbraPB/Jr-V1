import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  const location = useLocation();
  
  if (location.pathname === '/bespoke-builds') {
    return null;
  }

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-10 border-t border-white/10">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="font-display text-sm tracking-widest uppercase mb-8">Inscreva-se na nossa newsletter trimestral</h3>
            <form className="flex flex-col sm:flex-row gap-4 border-b border-white/20 pb-4">
              <input 
                type="text" 
                placeholder="Nome" 
                className="bg-transparent border-none outline-none flex-1 text-xl font-display placeholder:text-white/50"
              />
              <input 
                type="email" 
                placeholder="Endereço de e-mail" 
                className="bg-transparent border-none outline-none flex-1 text-xl font-display placeholder:text-white/50"
              />
              <button type="submit" className="font-display text-xl hover:opacity-70 transition-opacity">
                Inscrever-se
              </button>
            </form>
            <div className="mt-4 flex items-start gap-3 text-xs text-white/50">
              <input type="checkbox" id="consent" className="mt-1 bg-transparent border-white/20" />
              <label htmlFor="consent">
                Ao marcar esta caixa, você concorda em receber novidades e comunicações através de nossos canais de marketing.<br/>
                Consulte nossos <Link to="/terms" className="underline hover:text-white">termos e condições aqui</Link>
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-white/70 mb-24">
          <div className="flex flex-col gap-8">
            <p>© 2024 JR Motorcycles</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="border border-white/20 rounded-full px-6 py-3 w-fit hover:bg-white hover:text-black transition-colors flex items-center gap-2">
              Baixar catálogo em PDF
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_708_4164)">
                  <path d="M10 11.25V2.5" stroke="currentColor" strokeWidth="1.66667"></path>
                  <path d="M16.875 11.25V16.25H3.125V11.25" stroke="currentColor" strokeWidth="1.66667"></path>
                  <path d="M13.125 8.125L10 11.25L6.875 8.125" stroke="currentColor" strokeWidth="1.66667"></path>
                </g>
                <defs>
                  <clipPath id="clip0_708_4164">
                    <rect width="20" height="20" fill="currentColor"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-white mb-2">Siga-nos</h4>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            
            <h4 className="text-white mt-4 mb-2">Contato</h4>
            <a href="tel:+5511999999999" className="hover:text-white transition-colors">+55 (11) 99999-9999</a>
            <a href="mailto:contato@jrmotorcycles.com.br?subject=Contato%20pelo%20site" className="hover:text-white transition-colors">contato@jrmotorcycles.com.br</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white mb-2">Endereço</h4>
            <p>Rua Exemplo, 123<br/>Centro<br/>Campinas - SP<br/>Brasil</p>
            
            <h4 className="text-white mt-4 mb-2">Localização</h4>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase text-xs tracking-widest">VER NO MAPA</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white mb-2">Horário de funcionamento</h4>
            <p>Segunda a Sexta<br/>9:00 - 18:00<br/>Visitas somente com agendamento</p>
            
            <h4 className="text-white mt-4 mb-2">Legal</h4>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Termos & Condições</Link>
          </div>
        </div>

        <div className="w-full overflow-hidden flex justify-center items-center mt-24">
          <svg width="100%" height="100%" viewBox="0 0 180 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="9" fill="currentColor" textLength="180" lengthAdjust="spacing" style={{ fontFamily: 'var(--font-racing)', fontSize: '11px' }}>JR MOTORCYCLES</text>
          </svg>
        </div>
      </div>
    </footer>
  );
}