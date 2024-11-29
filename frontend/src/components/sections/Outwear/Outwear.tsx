import { StyledOutwear } from './StyledOutewear';
import image from '../../../assets/images/sections/jordan-outwear.jpg';

const Outwear = () => {
  return (
    <StyledOutwear>
      <h3>JORDAN OUTWEAR</h3>
      <div className="outwear">
        <div className="outwear__cover">
          <img src={image} alt="Jordan Outwear" />
        </div>

        <figcaption className="outwear__content">
          <div className="outwear-title">
            <div className="title-slice">OUTCLASS</div>
            <div className="title-slice">THE COLD</div>
          </div>
          <div className="outwear-description">
            <div className="outwear-description__content">
              Vests, parkas, and puffers-coming in hot. Huddle up and stay warm
              in insulated style in matte or shine.
            </div>
          </div>
          <div className="outwear-action">Shop</div>
        </figcaption>
      </div>
    </StyledOutwear>
  );
};

export default Outwear;
