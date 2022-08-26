import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import type { shopifyProduct } from '~/types';

interface Props {
    products: shopifyProduct[];
}

export default function ProductGrid({ products }: Props) {
    if (products.length === 0) return <p>No products</p>;

    return (
        <SimpleGrid as="ul" minChildWidth="350px" columns={3} spacing={12} className="o-container">
            {products.map((product: shopifyProduct) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </SimpleGrid>
    );
}
