import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <div className="spinner-border" role="status"></div>
    </StyledLoader>
  );
};

export default Loader;
