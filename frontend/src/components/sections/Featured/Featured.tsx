import { StyledFeatured } from './StyledFeatured';
import tatumImage from '../../../assets/images/sections/jordan-tatum.jpg';
import lukaShoesImage from '../../../assets/images/sections/jordan-luka-shoes.jpg';

const Featured = () => {
  return (
    <StyledFeatured>
      <h3>Featured</h3>
      <div className="featured">
        <div className="featured__box-1">
          <img src={tatumImage} alt="tatum-player" />

          <div className="featured__info">
            <div className="featured__title">TATUM 3</div>
            <div className="featured__action">Shop</div>
          </div>
        </div>
        <div className="featured__box-2">
          <img src={lukaShoesImage} alt="luka-player-shoes" />

          <div className="featured__info">
            <div className="featured__title">LUKA 3</div>
            <div className="featured__action">Shop</div>
          </div>
        </div>
      </div>
    </StyledFeatured>
  );
};

export default Featured;
