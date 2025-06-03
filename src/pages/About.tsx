import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Award, Users, Globe, ShieldCheck } from 'lucide-react';

const About = () => {
  React.useEffect(() => {
    document.title = 'About Us - Al-Muhammadin Import & Export';
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
              About Al-Muhammadin
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              A leading import and export company in the UAE with a global presence,
              committed to excellence in international trade.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Company overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Al-Muhammadin Import & Export LLC has grown from a small trading enterprise to one of the UAE's most trusted names in international trade. Our journey began with a vision to bridge global markets and facilitate seamless trade across borders.
              </p>
              <p className="text-gray-700 mb-4">
                Based in Dubai, the commercial hub of the Middle East, we leverage our strategic location to connect businesses across Asia, Europe, Africa, and beyond. Our team of trade professionals brings decades of combined experience in navigating complex international markets.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we serve clients across multiple industries, from consumer goods to industrial machinery, providing end-to-end trade solutions that drive business growth and foster global connections.
              </p>
              <Button
                variant="primary"
                to="/contact"
              >
                Get in Touch
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Al-Muhammadin Office" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white rounded-lg shadow-xl p-6 max-w-xs">
                <div className="text-3xl font-bold text-primary-900 mb-2">Since 2010</div>
                <div className="text-gray-600">Serving global markets with excellence and reliability</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
            <p className="text-gray-700 text-lg">
              At Al-Muhammadin, we are driven by a commitment to excellence and guided by core values
              that define every aspect of our business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To facilitate seamless global trade by providing innovative, reliable, and cost-effective import and export solutions that enable businesses to thrive in international markets.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                    <Globe className="text-primary-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Reach</h4>
                    <p className="text-gray-600">Connecting businesses to opportunities worldwide</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                    <ShieldCheck className="text-primary-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compliance</h4>
                    <p className="text-gray-600">Ensuring all trade activities meet international regulations</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Values</h3>
              <p className="text-gray-700 mb-6">
                Our core values are the foundation of our business practices and guide our team in delivering exceptional service to our clients.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary-50 p-2 rounded-full mr-4 mt-1">
                    <Award className="text-secondary-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600">Striving for the highest standards in every aspect of our service</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-50 p-2 rounded-full mr-4 mt-1">
                    <Users className="text-secondary-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Integrity</h4>
                    <p className="text-gray-600">Operating with honesty, transparency, and ethical business practices</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
            <p className="text-gray-700 text-lg">
              Meet the experienced professionals who lead Al-Muhammadin and drive our vision forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mohammed Al Mahmood',
                title: 'CEO & Founder',
                image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                bio: 'With over 20 years of experience in international trade, Mohammed founded Al-Muhammadin with a vision to create a global trade powerhouse.',
              },
              {
                name: 'Fatima Al Zaabi',
                title: 'Chief Operations Officer',
                image: 'https://images.pexels.com/photos/7247412/pexels-photo-7247412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                bio: 'Fatima oversees our day-to-day operations, ensuring efficient processes and exceptional service delivery to all clients.',
              },
              {
                name: 'Ahmed Khalid',
                title: 'Head of International Relations',
                image: 'https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                bio: 'Ahmed manages our global partnerships and develops strategic relationships to expand our international presence.',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;