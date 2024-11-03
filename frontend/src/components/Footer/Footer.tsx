import { StyledFooter } from './Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-brand">MIKE</div>
          <div className="footer-copy">
            Mike e-commerce &copy; {currentYear}
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
