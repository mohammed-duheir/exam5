import { motion } from 'framer-motion';
import { TruckIcon, PackageCheck, Map, Shield } from 'lucide-react';

const features = [
  {
    icon: <TruckIcon size={36} className="text-secondary-500" />,
    title: 'Premium Delivery',
    description: 'Fast and reliable shipping to any destination with real-time tracking and guaranteed delivery times.',
  },
  {
    icon: <PackageCheck size={36} className="text-secondary-500" />,
    title: 'Secure Packaging',
    description: 'Professional packaging solutions to ensure your goods arrive safely regardless of distance or conditions.',
  },
  {
    icon: <Map size={36} className="text-secondary-500" />,
    title: 'Shipment Tracking',
    description: 'Advanced tracking system allowing you to monitor your shipments throughout the entire journey.',
  },
  {
    icon: <Shield size={36} className="text-secondary-500" />,
    title: 'Insurance Coverage',
    description: 'Comprehensive insurance options to protect your valuable goods during transit and storage.',
  },
];

const ServiceFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Service Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience excellence in international trade with our comprehensive suite of services
            designed to streamline your import and export operations.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFeatures;