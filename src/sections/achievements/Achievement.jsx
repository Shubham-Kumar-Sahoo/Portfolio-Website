import Card from "../../components/Card"
import './achievements.css'

const Achievement = ({achievement}) => {
  return (
    <Card className='light'>
        <h6>{achievement.name}</h6>
        <div className="achievement__skill">
            <div className="achievement__skill-logo">
                <img src={achievement.logo} alt="Achievement Logo" />
            </div>
            <div className="achievement__skill-details">
                <p>{achievement.desc}</p>
            </div>
        </div>
    </Card>
  )
}

export default Achievement