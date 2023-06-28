import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import SingleProduct, { SINGLE_ITEM_QUERY } from '../components/SingleProduct';
import { fakeItem } from '../lib/testUtils';

const product = fakeItem();
const mocks = [
  {
    // when the query is called with these variables
    request: {
      query: SINGLE_ITEM_QUERY,
      variables: { id: '123' },
    },

    // return this fake data (mocked data)
    result: {
      data: {
        Product: product,
      },
    },
  },
];

describe('<Single Product />', () => {
  it('renders with proper data', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="123" />
      </MockedProvider>
    );

    await screen.findByTestId('single-product');

    expect(container).toMatchSnapshot();

    expect(container.querySelector('h2')).toHaveTextContent(product.name);
    expect(container.querySelector('p')).toHaveTextContent(product.description);
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      product.photo.image.publicUrlTransformed
    );
  });

  it('errors with a not found item', async () => {
    const notFoundMocks = [
      {
        request: {
          query: SINGLE_ITEM_QUERY,
          variables: { id: '123' },
        },
        result: {
          errors: [{ message: 'Items Not Found!' }],
        },
      },
    ];
    const { container, debug } = render(
      <MockedProvider mocks={notFoundMocks}>
        <SingleProduct id="123" />
      </MockedProvider>
    );

    await screen.findByTestId('graphql-error');

    expect(container).toHaveTextContent('Oh oh!');
    expect(container).toHaveTextContent('Items Not Found!');
    expect(container).toMatchSnapshot();
  });
  it('Errors out when an item is not found', async () => {
    const errorMock = [
      {
        request: {
          query: SINGLE_ITEM_QUERY,
          variables: { id: '123' },
        },
        result: {
          errors: [{ message: 'Items Not Found!' }],
        },
      },
    ];
    const { container, debug } = render(
      <MockedProvider mocks={errorMock}>
        <SingleProduct id="123" />
      </MockedProvider>
    );
    await screen.findByTestId('graphql-error');

    expect(container).toHaveTextContent('Items Not Found!');
    expect(container).toMatchSnapshot();
  });

  it('Renders loading state when the query is fired', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="123" />
      </MockedProvider>
    );

    expect(container).toHaveTextContent('Loading...');
    expect(container).toMatchSnapshot();
  });
});
