import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductGrid from './ProdutGrid';
import productListMock from '../../../mocks/productsList';

test('renders no products text when products array is empty', () => {
    render(
        <MemoryRouter>
            <ProductGrid products={[]} />
        </MemoryRouter>
    );

    expect(screen.getByText('No products')).toBeInTheDocument();
});

test('renders product cards when products are available', () => {
    const { container } = render(
        <MemoryRouter>
            <ProductGrid products={productListMock} />
        </MemoryRouter>
    );

    const productListItems = container.getElementsByClassName('product-card');

    expect(productListItems).toHaveLength(12);
});
