import Modal from '../components/Modal';
import { backgroundColors } from './data';
import BackgroundColor from './BackgroundColor';
import './theme.css';

const Theme = () => {
  return (
    <Modal className="theme__modal">
      <h3>Customize Your Theme</h3>
      <div className="theme__background">
        <h5>Background Color</h5>
        <div className="theme__background-colors">
          {backgroundColors.map(bColor => (
            <BackgroundColor 
              key={bColor.className} 
              className={bColor.className} 
              themeName={bColor.themeName} 
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
