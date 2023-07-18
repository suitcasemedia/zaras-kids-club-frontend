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
      <h1>Welcome to Zara's Kids Club!</h1>

      <p>
        Zara's Kids Club is an enchanting online platform brought to life by two
        primary school girls who live next door to each other named Zara and
        Zara. Their mission is to provide children with an extraordinary
        collection of quests that encompass a wide range of exciting activities.
        From baking, arts and crafts, and magic tricks to searching for hidden
        treasures and saving mythical creatures, our quests offer endless
        adventures and opportunities for discovery.
      </p>

      <h2>Quests and weekly Adventure Packs</h2>
      <p>
        Each Quest at Zara's Kids Club is a captivating journey that sparks
        curiosity and imagination. Each quest is accompanied by a series of
        weekly adventure packs, carefully designed to inspire and engage young
        minds. These adventure packs are sent directly to parents' inboxes,
        providing a treasure trove of activities for children to explore. From
        drawing, painting, and crafts to games and other fun-filled ideas, the
        adventure packs ensure that every week is filled with wonder and
        excitement.
      </p>

      <h2>Zara's Artistic Creative Quest</h2>
      <p>
        In July 2023, Zara launched her Artistic Creative Quest, our inaugural
        adventure that focuses on drawing, painting, and crafts. This Quest,
        specially crafted for the six-week summer holidays in England and Wales,
        includes six Adventure Packs that will ignite the artistic talents of
        children. As they journey through the Quest, they will unleash their
        creativity, experiment with various mediums, and discover the joy of
        self-expression.
      </p>

      <h2>Real-Life Meetups (Coming Soon!)</h2>
      <p>
        We are excited to share our plans for organizing real-life meetups where
        children and parents can connect, share ideas, skills, resources, and
        support each other throughout their Quests. While we are actively
        seeking a venue in the Balham or Streatham Hill areas, we envision
        creating a welcoming space where our community can come together and
        foster meaningful relationships. Stay tuned for updates as we progress
        towards making these meetups a reality.
      </p>

      <h2>Join Zara's Kids Club</h2>
      <p>
        While membership functionality and digital community collaboration are
        currently under development, we encourage you to sign up on our home
        page for Zara's Artistic Creative Quest updates. By providing your email
        address, you will be among the first to receive important updates and
        developments. Stay connected as we work towards creating an interactive
        platform that brings children and parents together, nurturing a
        supportive community that enhances the Quest experience.
      </p>

      <h2>Unleash the Magic of Zara's Kids Club</h2>
      <p>
        Zara's Kids Club is a place where imagination thrives, creativity
        flourishes, and adventure awaits. Our Quests empower children to unlock
        hidden treasures, save mythical creatures, and explore endless
        possibilities. We believe in creating a safe and inspiring environment
        where children can embrace their unique talents, build friendships, and
        make memories that last a lifetime.
      </p>

      <p>
        Thank you for your interest in Zara's Kids Club. By signing up for
        Zara's Artistic Creative Quest updates, you are taking the first step
        towards joining our extraordinary community. Together, let's embark on
        thrilling Quests, discover hidden treasures, and let our imaginations
        soar!
      </p>

      <p>
        Stay tuned for further updates, and get ready for an unforgettable
        journey at Zara's Kids Club!
      </p>
      {
        // team
      }
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
                <span>Zara</span>
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
                <span>Zara</span>
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
