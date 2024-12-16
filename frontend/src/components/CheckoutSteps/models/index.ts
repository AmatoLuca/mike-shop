export type CheckoutStepsProps = {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
};

export enum URLS {
  SIGNIN = '/login',
  SHIPPING = '/shipping',
  PAYMENT = '/payment',
  PLACEORDER = '/placeorder',
}

export type StepProps = {
  textLink: string;
  url: URLS;
};

export type StepDisabledProps = {
  text: string;
};
