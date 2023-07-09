import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import wait from 'waait';
import SignUp, { SIGN_UP_MUTATION } from '../components/SignUp';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser } from '../lib/testUtils';

const me = fakeUser();
const password = 'password';
const mocks = [
  // signup mock mutation
  {
    request: {
      query: SIGN_UP_MUTATION,
      variables: {
        email: me.email,
        name: me.name,
        password,
      },
    },
    result: {
      data: {
        createUser: {
          __typename: 'User',
          id: 'abc123',
          email: me.email,
          name: me.name,
        },
      },
    },
  },
  // current user query mock
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: me } },
  },
];

describe('<SignUp/>', () => {
  it('renders and matches snapshot', async () => {
    const { container } = render(
      <MockedProvider>
        <SignUp />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
  it('calls the mutation properly', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SignUp />
      </MockedProvider>
    );

    // simulate typing
    await userEvent.type(screen.getByPlaceholderText(/ name/i), me.name);
    await userEvent.type(screen.getByPlaceholderText(/email/i), me.email);
    await userEvent.type(screen.getByPlaceholderText(/password/i), 'password');

    // submit the form
    await userEvent.click(screen.getByTestId('submitButton'));

    // wait for the form to finish submitting
    await screen.findByText(
      /Signed up with Delmer.Smith@yahoo.com - Please go ahead and sign in!/
    );
  });
});
//  Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.
// why is this happening?
//   const [signup, { data, loading, error }] = useMutation(SIGN_UP_MUTATION, {  // variables: inputs,  // refetch the currentl loggined in user  // refetchQueries: [{ query: CURRENT_USER_QUERY }],  // });
