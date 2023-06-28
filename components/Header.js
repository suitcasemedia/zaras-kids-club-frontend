import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Cart from './Cart';
import Search from './Search';

const Logo = styled.h1`
  font-family: 'peaches_and_cream', 'Courier New', Courier, monospace,
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 6rem;
  line-height: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  text-decoration: none;
  background-color: var(--purple);

  a,
  a:hover {
    color: var(--yellow, yellow);
    text-decoration: none;
    padding: 0.5rem 1rem;
    background-color: var(--purple);
  }
`;
const LogoWrapper = styled.div`
  width: 300px;
  height: 100px;
`;
const HeaderStyles = styled.header`
  background-color: var(--purple);
  display: flex;
  flex-wrap: wrap; /* this */
  justify-content: space-between;
  > div {
    display: flex;
    flex-wrap: 400px;
  }

  .bar {
    border-bottom: 2px solid var(--pink, yellow);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 2px solid var(--pink, yellow);
    color: var(--purple);
    padding: 20px;
    width: 400px;
  }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <div>
        <div className="bar">
          <LogoWrapper>
            <Logo>
              {' '}
              <Link href="/">Zara's Kids Club</Link>
            </Logo>
          </LogoWrapper>
        </div>
      </div>
      <div>
        <Nav />
      </div>
      <Cart />
      {/* <div>
        <div className="sub-bar">
          <Search />
        </div>
        <div>
        
        </div>
      </div> */}
    </HeaderStyles>
  );
}
