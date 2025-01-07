import FormContainer from '../../components/Form/FormContainer/FormContainer';
import Profile from '../../components/Profile/Profile';

const ProfileScreen = () => {
  return (
    <FormContainer>
      <Profile>
        <Profile.Navigator />
        <Profile.Content />
      </Profile>
    </FormContainer>
  );
};

export default ProfileScreen;
