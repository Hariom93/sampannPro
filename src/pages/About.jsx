import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Farmers Empowered", value: "10,000+" },
    { label: "Villages Covered", value: "500+" },
    { label: "Soil Tests Done", value: "25,000+" },
    { label: "Increase in Yield", value: "30-40%" },
  ];

  return (
    <div className="mt-20 bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-32 bg-[#1A2E24] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Mobile: text-5xl, Tablet+: text-7xl
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            Sampann <span className="text-[#A4D43B]">Krishi</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-2"
          >
            Empowering every farmer with technology, data, and sustainable practices to create a prosperous tomorrow.
          </motion.p>
        </div>
        {/* Decorative Element - Slightly smaller for mobile */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#A4D43B] opacity-10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
      </section>

      {/* 2. Our Vision & Mission */}
      <section className="py-16 md:py-18 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Container - Responsive height */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <img 
              src="https://thumbs.dreamstime.com/b/happy-smiling-farm…pt-small-agri-business-rural-indian-267974961.jpg" 
              alt="Happy Indian Farmer" 
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </motion.div>
          
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-[#A4D43B] font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Our Mission</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2E24] leading-tight">
                Bridging the gap between <span className="text-[#A4D43B]">Traditional Farming</span> and Modern Tech.
              </h3>
              <p className="text-gray-600 mt-4 text-base md:text-lg">
                Sampann Krishi was born out of a simple idea: To make farming profitable again. We provide real-time soil analysis and personalized crop advisory.
              </p>
            </div>
            
            {/* Stats Grid - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#F9FBFA] p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 text-center lg:text-left">
                  <h4 className="text-2xl md:text-3xl font-black text-[#1A2E24]">{stat.value}</h4>
                  <p className="text-gray-500 text-[10px] md:text-sm font-medium uppercase tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="md:py-20 bg-[#F4F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E24]">Why <span className="text-[#A4D43B]">Sampann Krishi?</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Data Driven", desc: "Scientific soil testing and real-time data to remove guesswork.", icon: "📊" },
              { title: "Sustainable", desc: "Promoting eco-friendly farming to keep our soil healthy for generations.", icon: "🌱" },
              { title: "Farmer First", desc: "Every solution we build is designed with the farmer at the center.", icon: "👨‍🌾" }
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 md:p-10 rounded-[30px] md:rounded-[40px] shadow-sm hover:shadow-xl transition-all"
              >
                <div className="text-4xl md:text-5xl mb-6">{value.icon}</div>
                <h4 className="text-xl md:text-2xl font-bold text-[#1A2E24] mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-5 md:py-20 text-center px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto bg-[#1A2E24] p-10 md:p-20 rounded-[40px] md:rounded-[50px] text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Ready to make your farming <span className="text-[#A4D43B]">Sampann?</span></h2>
          <button className="bg-[#A4D43B] text-[#1A2E24] px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white hover:scale-105 active:scale-95 transition-all">
            Contact Our Experts
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;