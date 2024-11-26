import { StyledMessage } from './Message.styled';
import { MessageProps } from './models';

const Message = ({ variant, content }: MessageProps) => {
  const successTitle = 'Success, All Good!';
  const errorTitle = 'An Error Occurred.';

  let messageTitle;

  if (variant === 'success') {
    messageTitle = successTitle;
  } else if (variant === 'error') {
    messageTitle = errorTitle;
  } else {
    return;
  }

  return (
    <StyledMessage>
      <div className="message-inner">
        <div className="message-title">{messageTitle}</div>
        <div className="message-content">{content}</div>
      </div>
    </StyledMessage>
  );
};

export default Message;
