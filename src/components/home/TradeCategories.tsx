import { motion } from 'framer-motion';
import Button from '../ui/Button';

const categories = [
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    description: 'Import and export of electronics, clothing, household items, and other consumer products.',
    image: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    description: 'Specialized services for heavy machinery, manufacturing equipment, and industrial tools.',
    image: 'https://images.pexels.com/photos/3822727/pexels-photo-3822727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'food-agriculture',
    title: 'Food & Agriculture',
    description: 'Safe and regulated import/export of food products, agricultural goods, and perishable items.',
    image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'automotive',
    title: 'Automotive & Parts',
    description: 'Complete solutions for vehicles, spare parts, and automotive accessories.',
    image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const TradeCategories = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trade Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in a diverse range of trade categories, each with customized solutions
            to meet your specific business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-xl shadow-lg h-80"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-200 mb-4">{category.description}</p>
                <Button
                  variant="outline"
                  to={`/services#${category.id}`}
                  className="w-fit border-white/30 text-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            to="/services"
          >
            View All Trade Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TradeCategories;