import { Ship } from 'lucide-react';

interface LogoProps {
  light?: boolean;
}

const Logo = ({ light = false }: LogoProps) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-800">
      <Ship size={24} className={light ? "text-white" : "text-white"} />
    </div>
  );
};

export default Logo;