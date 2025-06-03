import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-500/10 rounded-full translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Simplify Your Import & Export Operations?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Contact our team today to discuss your trade needs and receive a customized solution 
              that meets your business requirements.
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
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;