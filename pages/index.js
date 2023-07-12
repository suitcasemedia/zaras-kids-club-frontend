import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import ZsCQSignUpForm from '../components/ZsCQSignUpForm';
import Title from '../components/styles/Title';
import Logo from '../components/styles/Logo';
import LogoWrapper from '../components/styles/LogoWrapper';
import Form from '../components/styles/Form';
import MaxWidth400 from '../components/styles/MaxWidth';
import Lift from '../components/styles/Lift';
import Center from '../components/styles/Center';
import Article from '../components/styles/Article';

const GraphiteSticksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  padding: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 200px;
  }
`;

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
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 50px;
  }
`;
export default function IndexPage() {
  return (
    <>
      <EmailSignUpGrid>
        <ReactPlayer
          width="100%"
          playing
          height="300px"
          controls
          volume
          url="https://res.cloudinary.com/dyliwmprw/video/upload/v1687467394/zaras-signup-video.mov"
        />

        <MaxWidth400>
          <ZsCQSignUpForm />
        </MaxWidth400>
      </EmailSignUpGrid>
      <Article>
        <div>
          <h1>
            <Title>Zara's Creative Quest</Title>
          </h1>
          <p>
            Join Zara as you embark on an awe-inspiring artistic journey,
            exploring the boundless realms of your creative powers.
          </p>
          <p>
            Zara's Creative Quest is a weekly email series that will take you on
            a journey of discovery and creative exploration. Each week you will
            receive a new email with a creative challenge, an instructional
            video, and also an advanced reading section for those who want to
            dive deeper into the topic.
          </p>
          <p>
            Zara's Creative Quest is designed for children ages 5-12, but anyone
            can join. All you need is a curious mind and a willingness to
            explore your creative powers.
          </p>
          <p>
            Activies include: drawing a 3D hand, amazing super fast flower
            painting, an origami butterfly,drawing a sports car, and more!
          </p>
          <p>
            Zara's Creative Quest is free to join. Simply enter your email above
            to get started.
          </p>
        </div>
      </Article>
      <Article>
        <Center>
          <Logo>
            <h1>Zara's</h1>
          </Logo>
        </Center>
      </Article>
      <Banner>
        <img alt="kids club banner" src="/static/kids-club-banner.webp" />
      </Banner>

      <Article>
        <h2>
          <Title>
            <h1>Get Your Graphite Sticks Here</h1>
          </Title>
        </h2>

        <span>
          <p>
            My favourite thing for drawing is graphite sticks. They are like
            little pencils. They are great for drawing minute detail as well as
            shading and drawing big areas. They are great for drawing portraits
            and landscapes and still life. They are great for drawing anything.
          </p>
          <p>
            Buy a pack of 5 graphite sticks for only £5 + postage and
            packaging&nbsp;
          </p>
        </span>
        <GraphiteSticksGrid>
          <img alt="graphite sticks" src="/static/graphite-sticks1.webp" />
          <img alt="graphite sticks" src="/static/graphite-sticks.webp" />
          <img alt="graphite sticks" src="/static/graphite-sticks2.webp" />
        </GraphiteSticksGrid>
        <Form>
          <Link href="https://zaraskidsclub.bigcartel.com/">
            <button type="button">Buy now</button>
          </Link>
        </Form>
      </Article>
    </>
  );
}
