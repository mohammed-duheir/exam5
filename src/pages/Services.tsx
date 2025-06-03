import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Ship, PackageCheck, FileText, TruckIcon, Briefcase, Shield } from 'lucide-react';

const serviceCategories = [
  {
    id: 'import',
    title: 'Import Services',
    icon: <Ship className="h-8 w-8 text-primary-600" />,
    description: 'Comprehensive import solutions from source to destination, including sourcing, customs clearance, and final delivery.',
    features: [
      'Global supplier network and sourcing assistance',
      'Import compliance and documentation management',
      'Customs clearance and duty optimization',
      'Last-mile delivery and warehousing',
      'Quality inspection and assurance',
    ],
  },
  {
    id: 'export',
    title: 'Export Services',
    icon: <PackageCheck className="h-8 w-8 text-primary-600" />,
    description: 'End-to-end export management services to help your products reach international markets seamlessly.',
    features: [
      'Market research and entry strategy',
      'Export documentation and compliance',
      'Packaging and labeling solutions',
      'Freight forwarding and shipping',
      'International payment processing',
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics Solutions',
    icon: <TruckIcon className="h-8 w-8 text-primary-600" />,
    description: 'Integrated logistics services covering all modes of transportation, storage, and distribution.',
    features: [
      'Air, sea, and land freight management',
      'Warehousing and inventory management',
      'Distribution network optimization',
      'Track and trace capabilities',
      'Temperature-controlled shipping',
    ],
  },
  {
    id: 'customs',
    title: 'Customs Clearance',
    icon: <FileText className="h-8 w-8 text-primary-600" />,
    description: 'Expert handling of customs procedures to ensure smooth and compliant border crossings for your goods.',
    features: [
      'HS code classification',
      'Duty and tax calculation',
      'Documentation preparation and verification',
      'Customs broker representation',
      'Regulatory compliance management',
    ],
  },
  {
    id: 'consulting',
    title: 'Trade Consulting',
    icon: <Briefcase className="h-8 w-8 text-primary-600" />,
    description: 'Strategic guidance on international trade regulations, market entry, and supply chain optimization.',
    features: [
      'Trade compliance audits and training',
      'Market entry strategy development',
      'Supply chain risk assessment',
      'Trade agreement utilization',
      'Cost reduction and process optimization',
    ],
  },
];

const tradeCategories = [
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    description: 'Specialized services for importing and exporting electronics, clothing, household items, and other consumer products.',
    image: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    description: 'Comprehensive solutions for heavy machinery, manufacturing equipment, and industrial tools, ensuring safe and efficient transportation.',
    image: 'https://images.pexels.com/photos/3822727/pexels-photo-3822727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'food-agriculture',
    title: 'Food & Agriculture',
    description: 'Specialized handling for food products and agricultural goods, including temperature-controlled logistics and regulatory compliance.',
    image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'automotive',
    title: 'Automotive & Parts',
    description: 'Expert services for vehicles, spare parts, and automotive accessories, including specialized shipping, documentation, and customs clearance.',
    image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Services = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = 'Our Services - Al-Muhammadin Import & Export';
    
    // Check if there's a hash in the URL
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # character
      setActiveSection(sectionId);
      
      // Scroll to the section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div>
      {/* Hero section */}
      <section className="bg-primary-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Comprehensive import and export solutions tailored to your business needs,
              from logistics to customs clearance and beyond.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Trade Solutions
            </h2>
            <p className="text-gray-700 text-lg">
              At Al-Muhammadin, we offer a complete range of import and export services designed to streamline
              your international trade operations and enhance your global business presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-lg p-6 border-2 ${
                  activeSection === service.id ? 'border-primary-500' : 'border-transparent'
                } transition-colors duration-300`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Shield size={16} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="outline"
                  to="/request-quote"
                  className="w-full"
                >
                  Request a Quote
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trade Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Specialized Trade Categories
            </h2>
            <p className="text-gray-700 text-lg">
              We offer specialized services for various product categories, each with unique requirements
              and handling procedures to ensure optimal results.
            </p>
          </div>
          
          <div className="space-y-16">
            {tradeCategories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="rounded-lg shadow-lg object-cover w-full h-80"
                  />
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      'Specialized handling procedures',
                      'Industry-specific compliance management',
                      'Tailored packaging solutions',
                      'Category-specific insurance coverage',
                      'Market-specific requirements guidance',
                    ].map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Shield size={16} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant="primary"
                    to="/request-quote"
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-900 rounded-xl text-white p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Streamline Your Import & Export Operations?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss your specific requirements and discover how Al-Muhammadin
                can help your business succeed in global markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  to="/request-quote"
                >
                  Request a Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  to="/contact"
                  className="border-white/30 text-white hover:bg-white/20"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;