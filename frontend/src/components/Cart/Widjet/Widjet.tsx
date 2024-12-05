import { StyledWidjet } from './StyledWidjet';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa6';

const Widjet = () => {
  const TrashButton = (
    <button
      className="widjet-btn-trash"
      onClick={() => console.log('@@@@@ bam!')}
    >
      <FaRegTrashCan />
    </button>
  );

  const MinusButton = (
    <button className="widjet-btn-minus">
      <FaMinus />
    </button>
  );

  return (
    <StyledWidjet>
      <div className="widjet-container">
        <div className="widjet-inner">
          {/* <button className="widjet-btn-minus">
            <FaMinus />
          </button> */}
          {TrashButton}
          <div className="widjet-counter">1</div>
          <button className="widjet-btn-plus">
            <FaPlus />
          </button>
        </div>
      </div>
      <button className="widjet-btn-favorite">
        <FaRegHeart />
      </button>
    </StyledWidjet>
  );
};

export default Widjet;
