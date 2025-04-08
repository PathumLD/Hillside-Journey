import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package } from '../types/package';
import { X, Clock, DollarSign, Check } from 'lucide-react';

interface PackageModalProps {
  package: Package;
  isOpen: boolean;
  onClose: () => void;
}

const PackageModal: React.FC<PackageModalProps> = ({ package: pkg, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-64">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-3xl font-bold mb-2">{pkg.title}</h2>
                <p className="text-gray-200">{pkg.description}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="text-lg">{pkg.duration}</span>
                </div>
                <div className="flex items-center text-accent-500 text-xl font-bold">
                  <DollarSign className="w-5 h-5" />
                  <span>{pkg.price}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Activities</h3>
                  <ul className="space-y-3">
                    {pkg.activities.map((activity, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-primary-500 mr-2" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Package Includes</h3>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-primary-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-accent-500 text-white py-3 rounded-lg hover:bg-accent-600 transition-colors"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PackageModal;