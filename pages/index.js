import styled from 'styled-components';
import ReactPlayer from 'react-player';
import SignUp from '../components/SignUp';

const Banner = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: auto 1fr;
  justify-content: center;
  img {
    width: 100%;
  }
`;
const EmailSignUpGrid = styled.div`
  display: flex;
  flex-wrap: wrap; /* this */
  gap: 10px;
  margin-bottom: 20px;

  > div {
    height: 100px;
    flex: 400px; /* and this */
    border-radius: 15px;
    background: var(--off-white);
    padding: 10px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  }
`;
export default function IndexPage() {
  return (
    <>
      <EmailSignUpGrid>
        <ReactPlayer
          playing
          controls
          volume
          url="https://res.cloudinary.com/dyliwmprw/video/upload/v1687467394/zaras-signup-video.mov"
        />
        <SignUp />
      </EmailSignUpGrid>

      <Banner>
        <img alt="kids club banner" src="/static/kids-club-banner.webp" />
      </Banner>

      <p>
        Embark on an extraordinary art adventure delivered straight to your
        inbox! Get ready to explore a world of creativity with our captivating
        email course, designed just for you.
        <p>
          Ignite your creative adventure now with just a few details! Let the
          magic begin imagination soar to new heights!
        </p>
      </p>
    </>
  );
}
