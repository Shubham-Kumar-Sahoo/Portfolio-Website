import './experience.css'
import data from './data'
import Card from '../../components/Card'

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <p></p>
      <div className="container experiences__container" data-aos = 'fade-up'>
        {
          data.map(item => (
            <Card key={item.id} className="experience light">
              <div className="experience__icon">{item.icon}</div>
              <div className="experience__details">
                <h4>{item.company}</h4>
                <h5>{item.title}</h5>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>

  )
}

export default Experience