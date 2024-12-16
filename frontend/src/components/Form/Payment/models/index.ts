export type PaymentTypeProps = {
  infoText: string;
  onSelectMethod: (value: boolean) => void;
};

export type PaymentInputProps = {
  setIsActive: (value: boolean) => void;
  isActive: boolean;
};
