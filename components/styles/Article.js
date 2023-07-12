import styled from 'styled-components';

const Article = styled.article`
  padding: 2rem;
  background: white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-top: 20px;
  height: 100%;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    text-align: center;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export default Article;
