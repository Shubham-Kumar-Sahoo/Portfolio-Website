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
          <span style={{ 
            fontFamily: 'cursive', 
            fontWeight: 'bold', 
            fontSize: '1.5rem',
          }}>
            Hello!
          </span>
          I  'm a DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and Kubernetes-based deployments. My experience includes building scalable deployment pipelines, automating operational workflows using Python and AWS services, and developing engineering analytics solutions that improve software delivery performance and system reliability.
          </p>
          <p>
          I am passionate about platform engineering, infrastructure automation, and cloud-native technologies. Outside of work, I enjoy exploring advancements in AI, reading manga, and keeping up with developments in space exploration and technology.
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
