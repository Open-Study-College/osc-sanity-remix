import { Box, Heading, Text, Stack, Button, Img } from '@chakra-ui/react';
import { Link } from '@remix-run/react';
import type { shopifyProduct } from '~/types';
import Price from '~/components/Price';

interface Props {
    product: shopifyProduct;
}

export default function ProductCard({ product }: Props) {
    const { title, handle, featuredImage, priceRange, compareAtPriceRange, options } = product;
    const { amount, currencyCode } = priceRange.minVariantPrice;
    const { amount: originalAmount } = compareAtPriceRange.minVariantPrice;
    const values = options
        .filter((option) => option.name.includes('Format'))
        .map((option) => option.values)
        .flat();

    return (
        <Box as="li" className="product-card">
            {featuredImage ? (
                <Img
                    src={featuredImage.url}
                    alt={featuredImage.altText}
                    htmlWidth={featuredImage.width}
                    htmlHeight={featuredImage.height}
                    objectFit="cover"
                    style={{ height: '300px' }}
                />
            ) : null}

            <Stack p={6}>
                <Heading as="h2" className="t-font-epsilon">
                    {title}
                </Heading>

                <Box>
                    <Text>
                        From
                        {originalAmount && Number(originalAmount) > 0 ? (
                            <>
                                &nbsp;
                                <s>
                                    <Price currency={currencyCode} price={originalAmount} />
                                </s>
                            </>
                        ) : null}
                        &nbsp;
                        <Price currency={currencyCode} price={amount} /> in full
                    </Text>
                </Box>

                <Stack>
                    <Heading as="h3">Course options available:</Heading>
                    <ul>{values ? values.map((value) => <li key={value}>{value}</li>) : null}</ul>
                </Stack>

                <Button as={Link} to={`/products/${handle}`} className="u-bg-primary">
                    View Course
                </Button>
            </Stack>
        </Box>
    );
}
