import { StyledSpot } from './StyledSpot';
import spotVideo from '../../assets/video/Nike - Presence of Mind _ Spec Ad  (Bmpcc6k).mp4';

const Spot = () => {
  return (
    <StyledSpot>
      <video
        className="video"
        src={spotVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </StyledSpot>
  );
};

export default Spot;
