import styled from 'styled-components';

const Logo = styled.h1`
  font-family: 'peaches_and_cream', 'Courier New', Courier, monospace,
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 4rem;
  line-height: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  text-decoration: none;

  a,
  a:hover {
    color: var(--yellow, yellow);
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
`;
export default Logo;
