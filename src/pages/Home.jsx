import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: "Soil Preparation",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000",
    desc: "Soil preparation involves plowing and leveling to ensure the land is ready for healthy crop growth."
  },
  {
    title: "Sowing",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
    desc: "Sowing is the process of putting the seeds into the soil for growing crops. One needs to use quality seeds. It is done manually or using mechanical equipment like Seed Drill."
  },
  {
    title: "Nutrient Management",
    image: "https://easyhomehydroponics.com/wp-content/uploads/2024/09/the-basics-of-hydroponic-nutrient-management-zfnJPB4k.png",
    desc: "Providing the right amount of fertilizers and organic matter to boost plant health and soil fertility."
  },
  {
    title: "Disease Management",
    image: "https://img.freepik.com/premium-photo/effective-crop-disease-management_810293-93055.jpg",
    desc: "Monitoring crops for pests and infections to apply timely and sustainable treatment solutions."
  }
];

const cropData = {
  Tomato: [
    { symbol: 'Ca', name: 'Calcium' },
    { symbol: 'Mg', name: 'Magnesium' },
    { symbol: 'Fe', name: 'Iron' }
  ],
  Rice: [
    { symbol: 'N', name: 'Nitrogen' },
    { symbol: 'Zn', name: 'Zinc' },
    { symbol: 'P', name: 'Phosphorus' }
  ],
  Wheat: [
    { symbol: 'K', name: 'Potassium' },
    { symbol: 'S', name: 'Sulfur' },
    { symbol: 'Mn', name: 'Manganese' }
  ]
};

const testimonials = [
  {
    name: "Udhu",
    location: "Huzoorpur, Bahraich",
    rating: 4,
    text: "I received the soil test report right on time, with no waiting. Seeing the testing done right in front of me gave me complete confidence in the results.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Rajesh Kumar",
    location: "Lucknow, UP",
    rating: 5,
    text: "Ekosight ki wajah se mujhe pata chala ki meri mitti mein kis cheez ki kami hai. Ab meri fasal pehle se kahin zyada behtar aur hari-bhari hai.",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  }
];

const partners = [
  { name: "Villgro", logo: "https://villgrophilippines.org/wp-content/uploads/2019/09/logowhitespace.png" },
  { name: "Social Alpha", logo: "https://biz.prlog.org/SocialAlpha/logo.png" },
  { name: "NIAM", logo: "https://niam-nabi.com/assets/img/NIAMLogo.png" },
  { name: "IARI", logo: "https://tse2.mm.bing.net/th/id/OIP.d_44tPUsFDnAf_K8vB7w-gHaGy?pid=Api&P=0&h=180" },
  { name: "DeHaat", logo: "https://www.searchingyard.com/industries/agriculture/deHaat.webp" },
];

const Home = () => {
  const [selectedCrop, setSelectedCrop] = useState('Tomato');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => { nextSlide(); }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="mt-35 w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <div className="px-4 py-2">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto min-h-[550px] md:h-[550px] rounded-[30px] md:rounded-[45px] relative overflow-hidden bg-cover bg-center flex items-center shadow-lg"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=2000')` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative md:absolute right-0 md:right-10 lg:right-16 bg-white/95 p-6 md:p-14 rounded-[30px] md:rounded-[40px] shadow-2xl max-w-[400px] z-10 mx-4 md:mx-0">
            <div className="flex flex-col gap-5 items-start">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-[#1A2E24] p-4 rounded-2xl shrink-0">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
              </motion.div>
              <div className="space-y-1">
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A2E24] tracking-tight">Empowering</h1>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#74A02A] leading-tight pb-6 md:pb-8">Sustainable Agriculture</h2>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#A4D43B] hover:bg-[#8FBC31] text-[#1A2E24] font-bold py-3.5 px-8 rounded-full flex items-center gap-3 shadow-md">
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. Stats Banner Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A2E24] rounded-[40px] p-10 md:p-16 relative flex flex-col md:flex-row items-center justify-between min-h-[300px]"
        >
          <div className="flex items-start gap-6">
            <div className="text-[#A4D43B] text-4xl md:text-5xl mt-2">💰</div>
            <div className="space-y-2">
              <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">Harvest the best <br /> from every acre</h2>
              <p className="text-[#A4D43B] text-lg md:text-2xl font-semibold">Earn upto Rs. 3 Lakhs profit per acre.</p>
            </div>
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="mt-10 md:mt-0 md:absolute md:-top-12 md:right-20"
          >
            <div className="bg-[#A4D43B] w-40 h-40 md:w-48 md:h-48 rounded-full border-[8px] md:border-[10px] border-white flex flex-col items-center justify-center shadow-xl">
              <span className="text-white text-3xl md:text-4xl font-extrabold leading-none">35%</span>
              <span className="text-white text-sm md:text-lg font-medium opacity-90">Increase</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E24]">Making Farming <span className="text-[#A4D43B]">easy & profitable</span></h2>
          <p className="text-lg text-[#1A2E24] my-5">We provide sustainable & affordable solutions to make your farming journey profitable</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-[40px] md:rounded-[50px] cursor-pointer shadow-lg"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:mb-4 transition-all duration-300">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Nutrient Checker Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative min-h-[450px] md:h-[400px] rounded-[40px] overflow-hidden bg-cover bg-center flex flex-col md:flex-row items-center shadow-xl p-8 md:px-12" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2000')` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-lg mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Want to harvest the <span className="text-[#A4D43B]">best from every acre?</span></h2>
          </div>
          <div className="w-full md:absolute md:right-12 flex flex-col items-center md:items-end gap-4 z-10">
            <select 
              value={selectedCrop} 
              onChange={(e) => setSelectedCrop(e.target.value)} 
              className="appearance-none bg-white border border-gray-300 rounded-2xl px-8 py-3 w-full md:w-56 text-gray-700 font-semibold shadow-lg focus:outline-none cursor-pointer"
            >
              <option value="Tomato">Tomato</option>
              <option value="Rice">Rice</option>
              <option value="Wheat">Wheat</option>
            </select>
            <motion.div 
              key={selectedCrop}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white rounded-[30px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-2xl w-full md:w-auto"
            >
              <div className="flex flex-col items-center md:border-r border-gray-300 md:pr-10 text-[#1A2E24] font-bold text-sm">
                <span className="text-3xl">🌱</span>
                <span className="mt-2 text-center">Essential<br/>Nutrients</span>
              </div>
              <div className="flex justify-around gap-6 md:gap-12 w-full md:w-auto">
                {cropData[selectedCrop]?.map((n, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-black text-[#1A2E24] tracking-tight">{n.symbol}</span>
                    <span className="text-gray-500 text-xs md:text-sm font-medium mt-1">{n.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 5. Testimonials */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-[#1A2E24] rounded-[40px] relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center p-6">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">Farmer <span className="text-[#A4D43B]">Testimonials</span></h2>
          <div className="relative w-full max-w-4xl flex items-center justify-center">
            <button onClick={prevSlide} className="absolute left-0 md:-left-16 text-white/50 hover:text-white transition z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center">←</div>
            </button>
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="text-center space-y-6 px-4">
                <p className="text-white/90 text-lg md:text-xl italic font-light leading-relaxed">"{testimonials[currentIndex].text}"</p>
                <div className="flex items-center justify-center gap-4 pt-4">
                  <img src={testimonials[currentIndex].image} className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#A4D43B] object-cover" alt="Farmer" />
                  <div className="text-left">
                    <h4 className="text-white text-xl md:text-2xl font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-[#A4D43B] font-medium italic text-sm">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <button onClick={nextSlide} className="absolute right-0 md:-right-16 text-white/50 hover:text-white transition z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black">→</div>
            </button>
          </div>
        </div>
      </div>

      {/* 6. Partner Logos (Infinite Scroll) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E24] mb-12">Tested & <span className="text-[#A4D43B]">Trusted By</span></h2>
          <div className="flex space-x-12 md:space-x-20 animate-infinite-scroll items-center whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <img key={index} src={partner.logo} alt={partner.name} className="h-12 md:h-20 object-contain hover: transition-all duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer Banner */}
      <section className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')` }}>
          <div className="absolute inset-0 bg-[#1A2E24]/80"></div>
        </div>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="relative z-10 text-center px-4">
          <h2 className="text-2xl md:text-5xl font-bold text-white tracking-wide">
            Join us to <span className="text-[#A4D43B]">empower</span> the hands that feed the world.
          </h2>
        </motion.div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: infinite-scroll 20s linear infinite; display: flex; width: max-content; }
      `}} />
    </div>
  );
};

export default Home;