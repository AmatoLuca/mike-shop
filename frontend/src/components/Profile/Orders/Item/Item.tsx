import { StyledItem } from './StyledItem';
import ItemContent from './ItemContent/ItemContent';
import { ProfileOrderData } from '../models';

const Item = ({ orderData }: ProfileOrderData) => {
  return (
    <StyledItem>
      <ItemContent orderData={orderData} />
    </StyledItem>
  );
};

export default Item;
