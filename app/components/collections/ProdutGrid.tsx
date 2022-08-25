import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import type { shopifyProduct } from '~/types';

interface Props {
    products: shopifyProduct[];
}

export default function ProductGrid({ products }: Props) {
    return (
        <SimpleGrid as="ul" minChildWidth="450px" columns={3} spacing={12} className="o-container">
            {products.map((product: shopifyProduct) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </SimpleGrid>
    );
}
