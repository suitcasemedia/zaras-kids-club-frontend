import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Pagination from '../components/Pagination';
import { makePaginationMocksFor } from '../lib/testUtils';

describe('<Pagination/>', () => {
  it('displays a loading message', () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(1)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    expect(container).toHaveTextContent('Loading...');
  });

  it('renders pagination for 18 items', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(18)}>
        <Pagination page={1} />
      </MockedProvider>
    );

    await screen.findByTestId('pagination');

    expect(container).toHaveTextContent('18 Items Total');
    const pageCountSpan = screen.getByTestId('pageCount');
    expect(pageCountSpan).toHaveTextContent('6');
    expect(container).toMatchSnapshot();
  });

  it('disables prev button on first page', async () => {
    render(
      <MockedProvider mocks={makePaginationMocksFor(6)}>
        <Pagination page={1} />
      </MockedProvider>
    );

    await screen.findByTestId('pagination');
    const prevButton = screen.getByText(/prev/i);
    const nextButton = screen.getByText(/next/i);
    expect(prevButton).toHaveAttribute('aria-disabled', 'true');
  });
  it('disables the next button on last page', async () => {
    render(
      <MockedProvider mocks={makePaginationMocksFor(6)}>
        <Pagination page={3} />
      </MockedProvider>
    );

    await screen.findByTestId('pagination');
    const prevButton = screen.getByText(/prev/i);
    const nextButton = screen.getByText(/next/i);
    expect(prevButton).toHaveAttribute('aria-disabled', 'false');
    expect(nextButton).toHaveAttribute('aria-disabled', 'true');
  });
  it('enables all buttons on a middle page', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(8)}>
        <Pagination page={2} />
      </MockedProvider>
    );

    await screen.findByTestId('pagination');

    const prevButton = screen.getByText(/prev/i);
    const nextButton = screen.getByText(/next/i);
    expect(prevButton).toHaveAttribute('aria-disabled', 'false');
    expect(nextButton).toHaveAttribute('aria-disabled', 'false');
  });
});
