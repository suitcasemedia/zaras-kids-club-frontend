import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GLobalStyles = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'peaches_and_cream';
  src: url('/static/peaches-and-cream.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
  html {
    --red: #ff0000;
    --black : #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --purple: rgb(86,57,150);
    --yellow: #FFEE00;
    --pink: #FF99B3;
    --light-purple: #C07EEC ;
    --off-white: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    font-size: 10px;
    background: rgba(255, 238,0,0.6)
    

  }
  *,*:before, *:after{
    box-sizing: inherit;
  }
  body{
    font-family: 'radnika_next', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    line-height: 2;
    color: var(--purple);
  }
  a{
    text-decoration: none;
    color: var(--black);
  }
  a:hover{
    text-decoration: underline;
  }
  button{
    font-family: 'radnika_next' system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   

  }
  `;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GLobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  //   children: PropTypes.oneOf([
  //     PropTypes.arrayOf(PropTypes.node),
  //     PropTypes.node,
  //   ]),
  children: PropTypes.any,
};
