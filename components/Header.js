import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Cart from './Cart';
import Search from './Search';
import Logo from './styles/Logo';
import LogoWrapper from './styles/LogoWrapper';

const HeaderStyles = styled.header`
  background-color: var(--purple);
  display: flex;
  // flex-wrap: wrap; /* this */
  justify-content: space-between;
  > div {
    display: flex;
    flex-wrap: 400px;
  }

  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;

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
        {/* <Cart /> */}
      </div>

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
