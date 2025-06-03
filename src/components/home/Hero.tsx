import { motion } from 'framer-motion';
import { Wrench, Phone, MapPin } from 'lucide-react';
import BookingForm from '../ui/BookingForm';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-blue-950 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">
                <span className="text-yellow-400">الرافدين</span>
              </span>
              للمقاولات والخدمات الفنية
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              خدمات مقاولات وصيانة وتركيب وإصلاح احترافية. فريق من المتخصصين لخدمتكم على مدار الساعة.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+966501234567"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-blue-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا الآن
              </a>
            </div>
            
            <div className="mt-8 flex items-start">
              <MapPin className="w-5 h-5 text-yellow-400 mt-1 ml-2 flex-shrink-0" />
              <p className="text-gray-300">
                الرياض، المملكة العربية السعودية<br />
                حي الملقا، شارع أنس بن مالك
              </p>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-4">خدمات معتمدة وموثوقة</p>
              <div className="flex flex-wrap gap-6 items-center">
                {['رخصة مقاولات', 'فنيين معتمدين', 'ضمان الخدمة', 'دعم 24/7'].map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <Wrench className="w-6 h-6 text-yellow-400 ml-2" />
              <h2 className="text-xl font-bold">احجز خدمة الآن</h2>
            </div>
            <BookingForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;