import { StyledWidjet } from './StyledWidjet';
import { PiHeartStraightLight } from 'react-icons/pi';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

const Widjet = () => {
  return (
    <StyledWidjet>
      <div className="widjet-container">
        <div className="widjet-inner">
          <button className="widjet-btn-minus">
            <FaMinus />
          </button>
          <div className="widjet-counter">1</div>
          <button className="widjet-btn-plus">
            <FaPlus />
          </button>
        </div>
      </div>
      <button className="widjet-btn-favorite">
        <PiHeartStraightLight />
      </button>
    </StyledWidjet>
  );
};

export default Widjet;
