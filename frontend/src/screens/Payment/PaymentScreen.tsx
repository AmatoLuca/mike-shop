import FormContainer from '../../components/Form/FormContainer/FormContainer';
import Payment from '../../components/Form/Payment/Payment';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';

const PaymentScreen = () => {
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Payment />
    </FormContainer>
  );
};

export default PaymentScreen;
