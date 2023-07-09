import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ApolloClient } from '@apollo/client';
import { de } from 'date-fns/locale';
import Nav from '../components/Nav';
import { fakeUser, fakeCartItem } from '../lib/testUtils';
import { CartStateProvider } from '../lib/cartState';
import { CURRENT_USER_QUERY } from '../components/User';

// Make some mocks for being logged in and not logging in
// and logged in with cart items
const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: null } },
  },
];
const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: fakeUser() } },
  },
];

const signedInWithCartItemsMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: { authenticatedItem: { ...fakeUser(), cart: [fakeCartItem()] } },
    },
  },
];

console.log(signedInWithCartItemsMocks);
describe('<Nav/>', () => {
  it('renders a minimal nav when signed out', async () => {
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider mocks={notSignedInMocks}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );

    expect(container).toHaveTextContent('Sign in');
    // q: whats the difference between screen and container?
    // a: screen is a wrapper around container
    expect(container).toMatchSnapshot();
    const link = screen.getByText('Sign in');
    expect(link).toHaveAttribute('href', '/signin');
  });

  it('renders full nav when signed in', async () => {
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider mocks={signedInMocks}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByText('Account');
    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('Sign Out');
    expect(container).toHaveTextContent('Sell');
    expect(container).toHaveTextContent('Account'); // account Link
    expect(container).toHaveTextContent('Orders'); // orders Link
    expect(container).toHaveTextContent('Cart'); // cart Link
  });

  it('renders the amount of items in the cart', async () => {
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider mocks={signedInWithCartItemsMocks}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByText('Account');
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
