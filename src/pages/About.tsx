import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Camera, ChevronRight, Heart, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ACTIVITY_IMAGE_1 = 'https://overatours.com/wp-content/uploads/2020/02/2-1.jpg';
const ACTIVITY_IMAGE_2 = 'https://www.meemure.com/assets/images/Package_Detail/bonfire.jpeg';
const ACTIVITY_IMAGE_3 = 'https://images.trvl-media.com/lodging/25000000/24120000/24119700/24119616/6079361a.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Modern Title Section (Replacing Hero) */}
      <section className="pt-16 pb-4 bg-gradient-to-r from-white to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1}}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3  bg-gray-400/20 text-gray-800 text-sm rounded-full my-4">
              Est. 2020
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Our Story
            </h1>
            <div className="h-1 w-20 bg-amber-400 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Creating authentic and sustainable travel experiences in the heart of Sri Lanka
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-12 text-gray-50" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.57,72.88,157.32,45.94,321.39,56.44Z" 
              className="fill-current"
            ></path>
          </svg>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Founded in 2020, Hillside Journey strives to showcase the authentic beauty of Meemure 
                while preserving its natural and cultural heritage. We believe that responsible tourism 
                can create positive impact for both travelers and local communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ValueCard
                icon={<Heart className="w-6 h-6 text-white" />}
                title="Authentic Experiences"
                description="We create genuine connections with local culture and nature"
                color="bg-rose-500"
              />
              <ValueCard
                icon={<Shield className="w-6 h-6 text-white" />}
                title="Sustainability"
                description="We protect and preserve the environments we explore"
                color="bg-emerald-500"
              />
              <ValueCard
                icon={<Users className="w-6 h-6 text-white" />}
                title="Community Support"
                description="We empower local communities through responsible tourism"
                color="bg-blue-500"
              />
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-3">
                <StatsCard
                  icon={<Users className="w-10 h-10 text-emerald-600" />}
                  number="1000+"
                  label="Happy Travelers"
                />
                <StatsCard
                  icon={<Calendar className="w-10 h-10 text-emerald-600" />}
                  number="100+"
                  label="Guided Tours"
                />
                <StatsCard
                  icon={<Award className="w-10 h-10 text-emerald-600" />}
                  number="15+"
                  label="Local Awards"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section with New Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Explore</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">Recent Adventures</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us on our journey through Sri Lanka's most breathtaking landscapes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ActivityCard
              image={ACTIVITY_IMAGE_1}
              title="Mountain Trekking"
              date="January 2024"
              description="Guided trek to Lakegala peak with breathtaking views of the Knuckles mountain range and surrounding valleys. Perfect for adventure enthusiasts!"
            />
            <ActivityCard
              image={ACTIVITY_IMAGE_2}
              title="Cultural Festival"
              date="December 2023"
              description="Traditional dance and music festival showcasing the rich cultural heritage of Meemure village. Experience authentic Sri Lankan traditions firsthand."
            />
            <ActivityCard
              image={ACTIVITY_IMAGE_3}
              title="Water Sliding"
              date="November 2023"
              description="Exploring the rich biodiversity of Knuckles range with expert naturalist guides. Spot endemic species and learn about wildlife conservation efforts."
            />
          </div>
          
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View All Adventures
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ValueCard = ({ icon, title, description, color }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="text-center rounded-xl overflow-hidden shadow-lg"
  >
    <div className={`${color} p-6`}>
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    </div>
    <div className="bg-white p-6">
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const StatsCard = ({ icon, number, label }) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="text-center p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-gray-100"
  >
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-3xl font-bold text-gray-800 mb-2">{number}</h3>
    <p className="text-gray-500">{label}</p>
  </motion.div>
);

const ActivityCard = ({ image, title, date, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
  >
    <div className="relative h-52 overflow-hidden group">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <div className="flex items-center text-gray-200 text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
      </div>
    </div>
    <div className="p-5">
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
        Learn more
        <ChevronRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  </motion.div>
);

export default About;