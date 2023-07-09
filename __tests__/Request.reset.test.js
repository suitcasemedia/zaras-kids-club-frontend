import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import wait from 'waait';
import RequestReset, {
  REQUEST_RESET_MUTATION,
} from '../components/RequestReset';
import { fakeUser } from '../lib/testUtils';

const email = 'test@test.com';
const mocks = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: { email },
    },

    result: {
      data: { sendUserPasswordResetLink: null },
    },
  },
];

describe('<RequestReset/>', async () => {
  it('renders and matches snapshot', async () => {
    const { container } = render(
      <MockedProvider>
        <RequestReset />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
  it('calls the mutation properly', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <RequestReset />
      </MockedProvider>
    );

    await userEvent.type(screen.getByPlaceholderText(/email/i), email);
    await userEvent.click(screen.getByText(/request reset/i));
    const success = await screen.findByText(/success/i);
    expect(success).toBeInTheDocument();
  });
});
