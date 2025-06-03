import { motion } from 'framer-motion';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: <Clock className="w-6 h-6 text-yellow-500" />,
    value: '15+',
    label: 'سنوات خبرة'
  },
  {
    icon: <Users className="w-6 h-6 text-yellow-500" />,
    value: '1000+',
    label: 'عميل راضٍ'
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-500" />,
    value: '500+',
    label: 'مشروع مكتمل'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-yellow-500" />,
    value: '100%',
    label: 'ضمان الجودة'
  }
];

const Experience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">خبراتنا</h2>
          <p className="text-gray-600 text-lg">
            نفتخر بسجل حافل من النجاحات في مجال المقاولات والخدمات الفنية
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-center shadow-lg"
            >
              <div className="flex justify-center mb-4">
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

export default Experience;