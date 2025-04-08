import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Users, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroImage from '../assets/HeroImage.png'

const HERO_IMAGE = 'https://www.bluelankatours.com/wp-content/uploads/2018/05/Meemure_in_Sri_Lanka.jpg';
const GALLERY_IMAGE_1 = 'https://www.knucklesadventure.com/wp-content/uploads/2022/09/1.jpg';
const GALLERY_IMAGE_2 = 'https://www.srilankaecotourism.lk/location_img/15196276092.jpg';
const GALLERY_IMAGE_3 = 'https://www.bluelankatours.com/wp-content/uploads/2018/04/Beautiful_Meemure_in_Sri_Lanka-768x440.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Parallax Effect - Enhanced with More Text and Vibrant Colors */}
<section className="relative h-screen overflow-hidden">
  <motion.div 
    className="absolute inset-0"
    initial={{ scale: 1.2 }}
    animate={{ scale: 1 }}
    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
  >
    <img
      src={HeroImage}
      alt="Meemure Landscape"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
  </motion.div>
  
  <div className="relative h-full flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center px-4"
    >
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="inline-block mb-3 py-1 px-4 rounded-full bg-amber-500/80 text-white text-sm md:text-base font-medium"
      >
        Sri Lanka's Best-Kept Secret
      </motion.span>
      
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 drop-shadow-xl tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-500">
          Meemure
        </span>
        <span className="text-white"> Expedition</span>
      </h1>

      <div className="h-1 w-24 mx-auto bg-gradient-to-r from-amber-400 to-orange-500 mb-6 rounded-full" />
      
      <p className="text-xl md:text-3xl mb-4 max-w-3xl mx-auto font-light text-amber-200">
        Where time stands still and nature tells its ancient story
      </p>
      
      <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-gray-100">
        Trek through misty mountains, explore crystal-clear streams, and experience 
        authentic village life in one of Sri Lanka's most remote cultural treasures.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-emerald-500/20 hover:from-emerald-600 hover:to-teal-700"
        >
          Explore Packages
        </motion.button>
        
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-2 border-amber-400 text-amber-300 hover:bg-amber-400/10 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
        >
          Watch Video Tour
        </motion.button> */}
      </div>
    </motion.div>
  </div>
</section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Hillside Journey</h2>
            <p className="text-lg text-gray-600 mb-12">
              We specialize in creating unforgettable experiences in the heart of Sri Lanka's most pristine village.
              Our expert guides and authentic local experiences ensure your journey through Meemure is nothing short of magical.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                title="Expert Guides"
                description="Local guides with deep knowledge of Meemure's culture and terrain"
                icon={<Users className="w-8 h-8 text-primary-600 mb-4" />}
              />
              <FeatureCard
                title="Authentic Experience"
                description="Immerse yourself in true Sri Lankan village life and traditions"
                icon={<MapPin className="w-8 h-8 text-primary-600 mb-4" />}
              />
              <FeatureCard
                title="Natural Beauty"
                description="Explore untouched landscapes and breathtaking viewpoints"
                icon={<Calendar className="w-8 h-8 text-primary-600 mb-4" />}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview Section with Hover Effects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Explore Our Adventures</h2>
            <p className="text-lg text-gray-600">Glimpses of the experiences that await you</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GalleryImage src={GALLERY_IMAGE_1} alt="Mountain View" />
            <GalleryImage src={GALLERY_IMAGE_2} alt="Waterfalls" />
            <GalleryImage src={GALLERY_IMAGE_3} alt="Village Life" />
          </div>
        </div>
      </section>

      {/* Testimonial Section with Enhanced Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Travelers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from our valued guests</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              location="United Kingdom"
              text="An unforgettable experience in Meemure. The local guides were exceptional and showed us hidden gems we would never have found on our own."
              rating={5}
            />
            <TestimonialCard
              name="David Chen"
              location="Austria"
              text="The authenticity of the experience was remarkable. From traditional meals to cultural activities, everything felt genuine and special."
              rating={5}
            />
            <TestimonialCard
              name="Brie Wilson"
              location="Spain"
              text="The natural beauty of Meemure is breathtaking, and Hillside Journey made sure we experienced it in the most comfortable way possible."
              rating={5}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-100"
  >
    {icon}
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative overflow-hidden rounded-lg shadow-xl group"
  >
    <img src={src} alt={alt} className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
      <h3 className="text-white text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        {alt}
      </h3>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, location, text, rating }: { name: string; location: string; text: string; rating: number }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-100"
  >
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{text}</p>
    <div>
      <p className="font-semibold text-gray-800">{name}</p>
      <p className="text-gray-500 text-sm">{location}</p>
    </div>
  </motion.div>
);

export default Home;