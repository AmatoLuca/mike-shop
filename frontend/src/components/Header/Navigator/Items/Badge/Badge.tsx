import { useMemo } from 'react';
import { GetCartItems } from '../../../../../redux/selectors';
import { StyledBadge } from './StyledBadge';

const Badge = () => {
  const cartItemsState = GetCartItems();

  const cartItemsMemo = useMemo(() => {
    return cartItemsState.reduce((acc, curr) => acc + (curr.qty ?? 1), 0);
  }, [cartItemsState]);

  return <StyledBadge>{cartItemsMemo}</StyledBadge>;
};

export default Badge;
