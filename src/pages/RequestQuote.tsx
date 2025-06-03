import React from 'react';
import { motion } from 'framer-motion';
import RequestForm from '../components/ui/RequestForm';

const RequestQuote = () => {
  React.useEffect(() => {
    document.title = 'Request a Quote - Al-Muhammadin Import & Export';
  }, []);

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
              Request a Quote
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Fill out the form below to receive a detailed quote for your import or export needs.
              Our team will respond within 24 hours with pricing and service information.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Form section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <RequestForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why choose us section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Al-Muhammadin for Your Trade Needs?
            </h2>
            <p className="text-gray-600">
              We offer competitive advantages that make us the preferred choice for businesses
              seeking reliable import and export services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Competitive Pricing',
                description: 'Transparent pricing with no hidden fees and volume-based discounts for regular clients.',
              },
              {
                title: 'Fast Turnaround',
                description: 'Expedited processing of orders and efficient handling of documentation for quicker delivery.',
              },
              {
                title: 'Expert Guidance',
                description: 'Our team of trade specialists will guide you through regulations and optimize your supply chain.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-primary-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How long does it take to receive a quote?',
                  answer: 'We process all quote requests within 24 business hours. For urgent inquiries, please call our office directly.',
                },
                {
                  question: 'What information do I need to provide for an accurate quote?',
                  answer: 'Product details, quantities, shipping origin/destination, timeline requirements, and any special handling needs will help us provide the most accurate quote.',
                },
                {
                  question: 'Do you handle customs clearance?',
                  answer: 'Yes, we provide full customs clearance services as part of our comprehensive import/export solutions.',
                },
                {
                  question: 'What trade regulations do I need to be aware of?',
                  answer: 'Regulations vary by product and country. Our team will advise on specific requirements based on your trade needs.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;