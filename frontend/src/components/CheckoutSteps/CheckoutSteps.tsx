import { StyledCheckoutSteps } from './StyledCheckoutSteps';
import { CheckoutStepsProps, URLS } from './models';
import Step from './Step/Step';
import StepDisabled from './StepDisabled/StepDisabled';

const CheckoutSteps = ({ step1, step2, step3, step4 }: CheckoutStepsProps) => {
  return (
    <StyledCheckoutSteps>
      {step1 ? (
        <Step textLink="Sign In" url={URLS.SIGNIN} />
      ) : (
        <StepDisabled text={'Sign In'} />
      )}

      {step2 ? (
        <Step textLink="Shipping" url={URLS.SHIPPING} />
      ) : (
        <StepDisabled text={'Shipping'} />
      )}

      {step3 ? (
        <Step textLink="Payment" url={URLS.PAYMENT} />
      ) : (
        <StepDisabled text={'Payment'} />
      )}

      {step4 ? (
        <Step textLink="Place Order" url={URLS.PLACEORDER} />
      ) : (
        <StepDisabled text={'Place Order'} />
      )}
    </StyledCheckoutSteps>
  );
};

export default CheckoutSteps;
