import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const ProductStyles = styled.div`
  color: white;
  background-color: var(--purple);
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  gap: 2rem;
  max-width: var(--maxWidth);
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p> Loading...</p>;
  if (error) return <DisplayError />;
  const { Product } = data;
 
  return (
    <ProductStyles>
      <Head>
        <title>Zara's {Product.name}</title>
      </Head>
      <img
        alt={Product.name}
        src={Product?.photo?.image?.publicUrlTransformed}
      />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </ProductStyles>
  );
}
