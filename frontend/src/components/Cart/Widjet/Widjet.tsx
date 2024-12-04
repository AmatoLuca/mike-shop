import { StyledWidjet } from './StyledWidjet';
import { PiHeartStraightLight } from 'react-icons/pi';

const Widjet = () => {
  return (
    <StyledWidjet>
      <div className="widjet-container">
        <div className="widjet-inner">
          <button className="widjet-btn-minus">-</button>
          <div className="widjet-counter">1</div>
          <button className="widjet-btn-plus">+</button>
        </div>
      </div>
      <button className="widjet-btn-favorite">
        <PiHeartStraightLight />
      </button>
    </StyledWidjet>
  );
};

export default Widjet;
