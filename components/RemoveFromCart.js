import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--purple);
    cursor: pointer;
  }
`;
const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}
export function RemoveFromCart({ id }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update,
  });
  return (
    <BigButton
      disabled={loading}
      onClick={removeFromCart}
      type="button"
      title="Remove this item from cart"
    >
      &times;
    </BigButton>
  );
}

RemoveFromCart.propTypes = {
  id: String.isRequired,
};
