import { motion } from 'framer-motion';
import { Users, Truck, Globe, Building2 } from 'lucide-react';

const stats = [
  {
    icon: <Truck size={24} className="text-secondary-500" />,
    value: '2,500+',
    label: 'Shipments Annually',
  },
  {
    icon: <Globe size={24} className="text-secondary-500" />,
    value: '35+',
    label: 'Countries Served',
  },
  {
    icon: <Building2 size={24} className="text-secondary-500" />,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: <Users size={24} className="text-secondary-500" />,
    value: '750+',
    label: 'Satisfied Clients',
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;