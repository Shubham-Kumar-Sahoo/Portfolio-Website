import './header.css';
import { useEffect } from 'react';
import headerimage from '../../assets/header.jpg';
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <h3 className="header__name" data-aos="fade-up">Shubham Kumar Sahoo</h3>
        <p data-aos="fade-up">
          Aspiring B.Tech in Computer Science with strong skills in machine learning and web development. Seeking a full-time position to apply my skills and contribute in innovative projects to develop practical skills in IT.
        </p>
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
