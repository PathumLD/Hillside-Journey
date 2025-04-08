import React from 'react';
import { motion } from 'framer-motion';
import { Package } from '../types/package';
import { Clock, DollarSign } from 'lucide-react';

interface PackageCardProps {
  package: Package;
  onClick: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{pkg.title}</h3>
          <p className="text-gray-200 text-sm line-clamp-2">{pkg.description}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{pkg.duration}</span>
          </div>
          <div className="flex items-center text-accent-500 font-semibold">
            <DollarSign className="w-4 h-4" />
            <span>{pkg.price}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-600 font-medium">Key Activities:</p>
          <div className="flex flex-wrap gap-2">
            {pkg.activities.slice(0, 3).map((activity, index) => (
              <span
                key={index}
                className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
              >
                {activity}
              </span>
            ))}
            {pkg.activities.length > 3 && (
              <span className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full">
                +{pkg.activities.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;