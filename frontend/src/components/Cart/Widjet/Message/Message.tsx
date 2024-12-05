import { StyledMessage } from './StyledMessage';

type MessagecomponentPros = {
  text: string;
};

const Message = ({ text }: MessagecomponentPros) => {
  return (
    <StyledMessage>
      <div className="widjet-message">{text}</div>
    </StyledMessage>
  );
};

export default Message;
