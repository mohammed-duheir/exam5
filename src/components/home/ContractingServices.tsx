import { motion } from 'framer-motion';
import { Building2, Home, Factory, Warehouse, Building, Hammer } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-8 h-8 text-yellow-500" />,
    title: 'مقاولات عامة',
    description: 'تنفيذ مشاريع البناء والتشييد بكافة أنواعها',
    features: [
      'بناء الفلل والعمائر',
      'تشطيبات داخلية وخارجية',
      'ترميم وتجديد المباني',
      'إدارة المشاريع'
    ]
  },
  {
    icon: <Home className="w-8 h-8 text-yellow-500" />,
    title: 'التشطيبات السكنية',
    description: 'خدمات تشطيب وديكور للمنازل والفلل',
    features: [
      'دهانات وديكورات',
      'تركيب السيراميك والرخام',
      'أعمال الجبس والأسقف',
      'تركيب الأبواب والنوافذ'
    ]
  },
  {
    icon: <Factory className="w-8 h-8 text-yellow-500" />,
    title: 'المشاريع الصناعية',
    description: 'تنفيذ المشاريع الصناعية والمستودعات',
    features: [
      'بناء المصانع',
      'تجهيز المستودعات',
      'تركيب المعدات الصناعية',
      'أنظمة السلامة الصناعية'
    ]
  },
  {
    icon: <Warehouse className="w-8 h-8 text-yellow-500" />,
    title: 'المشاريع التجارية',
    description: 'تنفيذ وتجهيز المشاريع التجارية',
    features: [
      'تجهيز المحلات التجارية',
      'بناء المجمعات التجارية',
      'تشطيب المكاتب',
      'واجهات المحلات'
    ]
  },
  {
    icon: <Building className="w-8 h-8 text-yellow-500" />,
    title: 'الصيانة والترميم',
    description: 'خدمات صيانة وترميم المباني',
    features: [
      'معالجة التشققات',
      'عزل الأسطح والخزانات',
      'صيانة المباني',
      'ترميم الواجهات'
    ]
  },
  {
    icon: <Hammer className="w-8 h-8 text-yellow-500" />,
    title: 'الخدمات الفنية',
    description: 'خدمات فنية متكاملة للمباني',
    features: [
      'السباكة والكهرباء',
      'التكييف والتبريد',
      'أنظمة الأمن والمراقبة',
      'صيانة المصاعد'
    ]
  }
];

const ContractingServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">خدمات المقاولات</h2>
          <p className="text-gray-600 text-lg">
            نقدم مجموعة شاملة من خدمات المقاولات والبناء بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>
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

export default ContractingServices;