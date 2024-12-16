import FormContainer from '../../components/Form/FormContainer/FormContainer';
import Shipping from '../../components/Form/Shipping/Shipping';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';

const ShippingScreen = () => {
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <Shipping />
    </FormContainer>
  );
};

export default ShippingScreen;
