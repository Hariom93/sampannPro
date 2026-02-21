import React from 'react';
import { Link } from 'react-router-dom';
// Social Icons ke liye aap lucide-react ya simple SVG use kar sakte hain
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full px-4 pb-8 pt-4">
      <div className="max-w-7xl mx-auto bg-[#1A2E24] text-white rounded-[40px] p-10 md:p-16 relative overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          
          {/* Column 1: Logo & Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 text-white">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5">
                  <path d="M50 90C50 90 85 70 85 40C85 20 65 20 50 20C35 20 15 20 15 40C15 70 50 90 50 90Z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">ekosight</span>
            </div>
            
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-white cursor-pointer transition">contact@ekosight.com</p>
              <p className="hover:text-white cursor-pointer transition">8150085009</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#A4D43B] hover:text-[#1A2E24] transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#A4D43B] hover:text-[#1A2E24] transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#A4D43B] hover:text-[#1A2E24] transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">Soil Doctor</Link></li>
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">pH meter</Link></li>
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">EC meter</Link></li>
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">Auger</Link></li>
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">Pocket sized pH tester</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">About us</Link></li>
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">Careers</Link></li>
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">FAQs</Link></li>
              <li><Link to="/" className="hover:text-[#A4D43B] transition underline decoration-gray-600 underline-offset-4">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-widest">
            (c) 2024 EKOSIGHT ALL RIGHTS RESERVED
          </p>
          
          {/* Decorative Leaf Icon (Bottom Right) */}
          <div className="absolute bottom-[-20px] right-[-20px] opacity-20 rotate-45 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="white">
                <path d="M10 90Q50 90 90 10Q50 10 10 90" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/8150085009" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;