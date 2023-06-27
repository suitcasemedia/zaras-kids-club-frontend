import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import nProgress from 'nprogress';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { useCallback } from 'react/cjs/react.production.min';
import SickButton from './styles/SickButton';
import { useCart } from '../lib/cartState';
import { CURRENT_USER_QUERY } from './User';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
`;

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
function CheckoutForm() {
  const { closeCart } = useCart();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [checkout, { error: graphQlError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {
    // stoop form from loading turn loader on
    e.preventDefault(e);
    setLoading(true);
    /// 2 start page transition
    nProgress.start();
    // 3 create the payment methos via sstripe

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    console.log(paymentMethod);
    // 4 handle any errors from stripe

    if (error) {
      setError(error);
      nProgress.done();
      return; // stops checkout happening
    }
    // 5. send the tokenfrom step 3 to our keystone server via custom mutation

    const order = await checkout({
      variables: {
        token: paymentMethod.id,
      },
    });
    console.log(`finished with the order!`);
    console.log({ order });
    // 6 change the page to view order
    router.push({
      pathname: '/order/[id]',
      query: { id: order.data.checkout.id },
    });
    // 7 close the cart

    closeCart();
    // 8 turn the loader off
    setLoading(false);
    nProgress.done();
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 14 }}>{error.message}</p>}
      {graphQlError && <p style={{ fontSize: 14 }}>{graphQlError.message}</p>}
      <CardElement />
      <SickButton>Check Out Now</SickButton>
    </CheckoutFormStyles>
  );
}

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}
