import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import Product from '../components/Product';
import { fakeItem } from '../lib/testUtils';

const product = fakeItem();
describe('Product', () => {
  it('renders out the price tag and title properly', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>
    );

    const priceTag = screen.getByText('£50');
    expect(priceTag).toBeInTheDocument();
    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', '/product/abc123');
    expect(link).toHaveTextContent('dogs are best');
    expect(link).toHaveTextContent(product.name);
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      product.photo.image.publicUrlTransformed
    );

    // test for description, add to cart
  });

  it('renders and matches the snapshot', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>
    );

    expect(container).toMatchSnapshot();
  });
  it('renders the image properly', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>
    );
    const img = screen.getByAltText(product.name);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      product.photo.image.publicUrlTransformed
    );
  });
});
