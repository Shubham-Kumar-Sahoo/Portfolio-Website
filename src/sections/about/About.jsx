import './about.css';
import aboutimage from '../../assets/about.jpg';
import resume from '../../assets/resume.pdf';
import { HiDownload } from 'react-icons/hi';
import Card from '../../components/Card';
import data from './data';

const About = () => {
  return (
    <section id="about" data-aos = 'fade-in'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={aboutimage} alt="Profile" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map(item => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hello! I'm Shubham, a fourth-year B.Tech student with a CGPA of 9.40. I'm passionate about machine learning and web development, continually honing my skills and enhancing my practical knowledge.
          </p>
          <p>
            Aiming to excel and contribute to innovative tech projects, I also plan to pursue higher studies. In my free time, I explore tech trends or enjoy a good manga series and see some space videos.
          </p>
          <a href={resume} className="btn primary" download>
            Download Resume <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
