import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import type { module } from '~/types';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Module from '~/components/module';
import { Center, VStack } from '@chakra-ui/react';
import buildPageData from '~/utils/buildPageData.server';

export async function loader({ request, params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const data = await buildPageData({
        request,
        params,
        type: 'product'
    });

    const { page: product, isPreview } = data;

    return json({ product, isPreview });
}

export const meta: MetaFunction = ({ data }) => {
    const { title } = data.product?.seo ? data.product?.seo : data.product.store;

    return {
        title: `${title} | OSC Stack`,
        description: data.product?.seo?.description,
        image: data.product?.seo?.image?.url,
        'og:description': data.product?.seo?.description,
        'og:image': data.product?.seo?.image?.url,
        robots: data.isPreview ? 'noindex' : null // noindex preview urls
    };
};

export default function Product() {
    const { product, isPreview } = useLoaderData<typeof loader>();
    const { title } = product.store;

    return (
        <>
            {isPreview ? (
                <Center p={4} className="u-bg-tertiary">
                    Preview Mode
                </Center>
            ) : null}
            <main className="mx-auto max-w-4xl">
                <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>

                {product.modules && product.modules.length > 0 ? (
                    <VStack spacing={16}>
                        {product.modules.map((module: module) =>
                            module ? <Module key={module._key} module={module} /> : null
                        )}
                    </VStack>
                ) : null}
            </main>
        </>
    );
}
