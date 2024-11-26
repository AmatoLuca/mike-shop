export enum MessageVariant {
  success = 'success',
  error = 'error',
}

export type MessageProps = {
  variant: MessageVariant;
  content: string;
};
