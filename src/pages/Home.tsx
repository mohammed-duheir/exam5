import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ServicesList from '../components/home/ServicesList';
import ContractingServices from '../components/home/ContractingServices';
import Experience from '../components/home/Experience';

const Home = () => {
  useEffect(() => {
    document.title = 'الرافدين للمقاولات والخدمات الفنية';
  }, []);

  return (
    <div>
      <Hero />
      <Experience />
      <ContractingServices />
      <ServicesList />
    </div>
  );
};

export default Home;