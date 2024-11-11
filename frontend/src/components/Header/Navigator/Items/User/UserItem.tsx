import { StyledUserItem } from '../User/UserItem.styled';
import { PiUserLight } from 'react-icons/pi';

const UserItem = () => {
  return (
    <StyledUserItem>
      <PiUserLight />
      <span>Sign In</span>
    </StyledUserItem>
  );
};

export default UserItem;
