import { screen, render, waitFor } from '@testing-library/react';
import Router from 'next/router';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import wait from 'waait';
import CreateProduct, {
  CREATE_PRODUCT_MUTATION,
} from '../components/CreateProduct';
import { fakeItem } from '../lib/testUtils';

const item = fakeItem();

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

describe('<CreateProduct/>', () => {
  it('renders and matches snapshot', async () => {
    const { container } = render(
      <MockedProvider>
        <CreateProduct />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('handles state updating', async () => {
    const { container, debug } = render(
      <MockedProvider>
        <CreateProduct />
      </MockedProvider>
    );
    // simulate someone filling out the form
    await userEvent.type(screen.getByPlaceholderText(/name/i), item.name);
    await userEvent.type(
      screen.getByPlaceholderText(/price/i),
      item.price.toString()
    );
    await userEvent.type(
      screen.getByPlaceholderText(/description/i),
      item.description
    );
    expect(screen.getByDisplayValue(item.name)).toBeInTheDocument();
  });

  it('creates an item when the form is submitted', async () => {
    const mocks = [
      {
        request: {
          query: CREATE_PRODUCT_MUTATION,
          variables: {
            name: item.name,
            description: item.description,
            image: '',
            price: item.price,
          },
        },
        result: {
          data: {
            createProduct: {
              ...fakeItem(),
              id: 'abc123',
              __typename: 'Product',
            },
          },
        },
      },
    ];

    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <CreateProduct />
      </MockedProvider>
    );
    // simulate someone filling out the form
    await userEvent.type(screen.getByPlaceholderText(/name/i), item.name);
    await userEvent.type(
      screen.getByPlaceholderText(/price/i),
      item.price.toString()
    );
    await userEvent.type(
      screen.getByPlaceholderText(/description/i),
      item.description
    );
    // mock the router
    Router.push = jest.fn();
    // submit the form
    await userEvent.click(screen.getByTestId('submitButton'));
    // wait for the form to submit
    await waitFor(() => wait(500));
    expect(Router.push).toHaveBeenCalled();
    expect(Router.push).toHaveBeenCalledWith({
      pathname: '/product/abc123',
    });
  });
});
