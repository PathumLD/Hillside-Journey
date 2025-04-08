import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PackageCard from '../components/PackageCard';
import PackageModal from '../components/PackageModal';
import { packages } from '../data/packages';
import { Package } from '../types/package';

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-16 pb-4  md:pt-32 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Packages</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated packages designed to give you the best experience of Meemure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                onClick={() => setSelectedPackage(pkg)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedPackage && (
        <PackageModal
          package={selectedPackage}
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Packages;