import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ApolloClient } from '@apollo/client';
import wait from 'waait';
import CartCount from '../components/CartCount';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser, fakeCartItem } from './testUtils';

describe('<CartCount />', () => {
  it('renders', () => {
    render(<CartCount count={10} />);
  });
  it('matches the snapshot', () => {
    const { container } = render(<CartCount count={11} />);
    expect(container).toMatchSnapshot();
  });
  it('updates via props', async () => {
    const { container, rerender, debug } = render(<CartCount count={11} />);
    expect(container.textContent).toBe('11');
    expect(container).toHaveTextContent('11');
    rerender(<CartCount count={12} />);

    // Wait for the component to update
    await wait(400);
    expect(container).toHaveTextContent('12');
    rerender(<CartCount count={20} />);
    await screen.findByText('20');
    expect(container).toHaveTextContent('20');
    rerender(<CartCount count={21} />);
    expect(container).toHaveTextContent('21');
    expect(container).toMatchSnapshot();
  });
});
