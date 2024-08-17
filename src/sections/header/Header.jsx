import './header.css';
import { useEffect } from 'react';
import headerimage from '../../assets/header.jpg';
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,   
      mirror: false,   
    });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="flip-up">
          <img src={headerimage} alt="Header logo" />
        </div>
        <TypeAnimation
          cursor={true} 
          className='type'
          sequence={["Hi, I'm Shubham Kumar Sahoo", 1000, '']}
          repeat={Infinity}
        />
        <p></p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#portfolio" className="btn light">My Projects</a>
        </div>
        <div className="header__socials">
          {data.map(item => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
