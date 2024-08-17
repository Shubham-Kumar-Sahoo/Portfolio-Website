import Card from "../../components/Card"
import './achievements.css'

const Achievement = ({achievement}) => {
  return (
    <Card className='light'>
        <h5>{achievement.name}</h5>
        <div className="achievement__skill">
          <a href={achievement.link} target="_blank" rel="noopener noreferrer">
            <div className="achievement__skill-logo">
                <img src={achievement.logo} alt="Achievement Logo" />
            </div>
          </a>
        <div className="achievement__skill-details">
         <p>{achievement.desc}</p>
        </div>
        </div>
    </Card>
  )
}

export default Achievement