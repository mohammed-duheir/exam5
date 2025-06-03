import { motion } from 'framer-motion';
import { WrenchIcon, Settings, PenTool as Tool } from 'lucide-react';

const services = [
  {
    icon: <WrenchIcon className="w-8 h-8 text-yellow-500" />,
    title: 'تركيب',
    description: 'خدمات تركيب احترافية للأجهزة والمعدات المنزلية والتجارية',
    features: [
      'تركيب أجهزة التكييف',
      'تركيب الأجهزة الكهربائية',
      'تركيب أنظمة السباكة',
      'تركيب الأثاث والمطابخ'
    ]
  },
  {
    icon: <Settings className="w-8 h-8 text-yellow-500" />,
    title: 'صيانة',
    description: 'خدمات صيانة دورية وفحص شامل لضمان كفاءة الأجهزة والمعدات',
    features: [
      'صيانة دورية للتكييف',
      'صيانة الأجهزة الكهربائية',
      'صيانة أنظمة السباكة',
      'صيانة وقائية'
    ]
  },
  {
    icon: <Tool className="w-8 h-8 text-yellow-500" />,
    title: 'إصلاح',
    description: 'خدمات إصلاح سريعة وفعالة لجميع الأعطال والمشاكل الفنية',
    features: [
      'إصلاح أعطال التكييف',
      'إصلاح الأعطال الكهربائية',
      'إصلاح تسريبات المياه',
      'إصلاح طارئ 24/7'
    ]
  }
];

const ServicesList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">خدماتنا</h2>
          <p className="text-gray-600 text-lg">
            نقدم مجموعة شاملة من الخدمات الفنية بأيدي متخصصين ذوي خبرة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;