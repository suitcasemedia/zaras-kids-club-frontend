import styled from 'styled-components';
import Article from '../components/styles/Article';

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 20px;
  height: 100%;
  h2 {
    text-align: left;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default function AboutPage() {
  return (
    <Article>
      <h1>
        <span>Meet Our Team</span>
      </h1>
      <TeamGrid>
        <div>
          <img
            src="/static/zara-connelly.webp"
            alt="Zara"
            style={{
              width: '220px',
              height: '220px',
              objectFit: 'cover',
              objectPosition: '50% 50%',
            }}
          />

          <div>
            <h2>
              <span>
                <span>Zara Connelly</span>
              </span>
            </h2>
          </div>
          <div>
            <p>
              <span>
                <span>Manager</span>
              </span>
            </p>
          </div>
          {/* <div>
            <a href="mailto:someemail@gmail.com" target="_self">
              <span>Get in Touch</span>
            </a>
          </div> */}
        </div>

        <div>
          <img
            src="/static/zara-choudry.webp"
            alt="Zara"
            style={{
              width: '220px',
              height: '220px',
              objectFit: 'cover',
            }}
          />

          <div>
            <h2>
              <span>
                <span>Zara Choudhury</span>
              </span>
            </h2>
          </div>

          <p>
            <span>
              <span>Manager</span>
            </span>
          </p>

          {/* <div>
            <a href="mailto:zarachoudhury44@gmail.com" target="_self">
              <span>Get in Touch</span>
            </a>
          </div> */}
        </div>
      </TeamGrid>
    </Article>
  );
}
