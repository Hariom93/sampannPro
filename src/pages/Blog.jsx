import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Soil Compaction: The Silent Crisis Threatening India's Agriculture (2025)",
    author: "Surbhi Rawat",
    date: "May 26, 2025",
    category: "Soil Health",
    desc: "Soil compaction, often described as the soil 'becoming too hard,' is an emerging yet under-addressed challenge in India's Agriculture.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000",
    featured: true
  },
  {
    id: 2,
    title: "Fertilizer Application Mistakes: 7 Reasons It's Not Delivering Results",
    author: "Kajal Tomar",
    date: "May 16, 2025",
    category: "Fertilizer",
    desc: "Despite investing significant resources in fertilizer application, many farmers are still struggling with disappointing yields.",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1000",
  },
  {
    id: 3,
    title: "Biocontrol Agents: Solutions for Healthy Soil 2025",
    author: "Dhiraj Kumar",
    date: "May 14, 2025",
    category: "Bio-Tech",
    desc: "Biocontrol agents play a significant role today. The facts are clear – we need to boost global food production naturally.",
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=1000",
  },
  {
    id: 4,
    title: "Top 5 Cover Crops for Soil Enrichment and Sustainability",
    author: "Surbhi Rawat",
    date: "March 11, 2025",
    category: "Soil Health",
    desc: "Introduction to soil degradation due to nutrient loss and how cover crops can replenish it.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1000",
  },
  {
    id: 5,
    title: "Why Vermicompost is the Better Choice for 2025",
    author: "Vikas Raj",
    date: "Feb 20, 2025",
    category: "Organic",
    desc: "Vermicompost is a nutrient-rich organic fertilizer created by earthworms. It's the best chemical alternative.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000",
  },
  {
    id: 6,
    title: "Drone Technology in Indian Farms",
    author: "Rahul Singh",
    date: "Jan 10, 2025",
    category: "Bio-Tech",
    desc: "How sky-high tech is helping farmers monitor soil health from the ground.",
    image: "https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1000",
  }
];

const categories = ["All", "Soil Health", "Fertilizer", "Bio-Tech", "Organic"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    // Top padding 'pt-28' added to handle the fixed navbar
    <div className="mt-10 max-w-7xl mx-auto px-4 md:px-6 py-16 pt-28 bg-[#F9FBFA]">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-5xl font-bold text-[#1A2E24] mb-8"
      >
        Our <span className="text-[#A4D43B]">Blog</span>
      </motion.h1>

      {/* Categories Filter - Scrollable on mobile */}
      <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-3 md:gap-4 mb-12 scrollbar-hide">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-all text-sm md:text-base ${
              activeCategory === cat 
              ? "bg-[#1A2E24] text-[#A4D43B]" 
              : "bg-white text-gray-500 hover:bg-gray-100 shadow-sm border border-gray-100"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Main Grid Layout */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column (Featured Post) */}
        <AnimatePresence mode="popLayout">
          {filteredPosts.slice(0, 1).map((post) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={post.id}
              className="col-span-1 md:col-span-7 flex flex-col bg-white rounded-[30px] md:rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={post.title} />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#A4D43B] text-[#1A2E24] px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase">
                  Featured
                </div>
              </div>
              <div className="p-6 md:p-10 space-y-4">
                <span className="text-[#A4D43B] font-bold uppercase text-xs md:text-sm tracking-widest">{post.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E24] hover:text-[#A4D43B] transition leading-tight">
                  {post.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-400">By {post.author} • {post.date}</p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-lg line-clamp-3 md:line-clamp-none">{post.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Right Column (Side Cards) */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPosts.slice(1, 4).map((post) => (
              <motion.div 
                layout
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                key={post.id}
                className="flex flex-row gap-4 bg-white p-3 md:p-4 rounded-[25px] md:rounded-[30px] shadow-sm hover:shadow-lg transition-all group cursor-pointer border border-transparent hover:border-gray-100"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" alt={post.title} />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[#A4D43B] text-[10px] font-bold uppercase mb-1">{post.category}</span>
                  <h3 className="text-sm md:text-base font-bold text-[#1A2E24] leading-tight line-clamp-2 group-hover:text-[#A4D43B]">{post.title}</h3>
                  <p className="text-[10px] text-gray-400 mt-2">{post.date}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Bottom Grid (Regular Cards) */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
        <AnimatePresence>
          {filteredPosts.slice(4).map((post) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              key={post.id}
              className="bg-white rounded-[30px] md:rounded-[35px] overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-all" alt={post.title} />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-[#A4D43B] text-[10px] md:text-xs font-bold uppercase">{post.category}</span>
                <h3 className="text-lg md:text-xl font-bold text-[#1A2E24] mt-2 line-clamp-2 hover:text-[#A4D43B] cursor-pointer">{post.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm mt-4 line-clamp-3">{post.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Blog;