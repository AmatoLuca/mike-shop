import { StyledUserItem } from '../User/UserItem.styled';
import { PiUserLight } from 'react-icons/pi';

const UserItem = () => {
  return (
    <StyledUserItem href="#">
      <PiUserLight />
      <span>Sign In</span>
    </StyledUserItem>
  );
};

export default UserItem;
