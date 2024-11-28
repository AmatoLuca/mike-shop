import { StyledFeatured } from './StyledFeatured';
import tatumImage from '../../../../public/images/sections/jordan-tatum.jpg';
import lukaShoesImage from '../../../../public/images/sections/jordan-luka-shoes.jpg';

const Featured = () => {
  return (
    <StyledFeatured>
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
