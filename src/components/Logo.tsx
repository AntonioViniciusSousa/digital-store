import LogoImageH from '../assets/icons/logo-header.svg';
import LogoImageF from '../assets/icons/logo-footer.svg';

export const LogoHeader = () => {
  return (
    <img 
      src={LogoImageH} 
      alt="Logo da empresa" 
      width="253" 
      height="44" 
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

export const LogoFooter = () => {
  return (
    <img 
      src={LogoImageF} 
      alt="Logo da empresa" 
      width="253" 
      height="44" 
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};