import { json } from '@remix-run/node';
import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import type { module } from '~/types';
import { useLoaderData } from '@remix-run/react';
import { getProducts } from '~/models/shopify.server';
import Hero from '~/components/hero/Hero';
import Module from '~/components/module';
import { Center, VStack } from '@chakra-ui/react';
import ProductGrid from '~/components/collections/ProdutGrid';
import getPageData from '~/models/sanity.server';
import { COLLECTION_QUERY } from '~/queries/sanity/collection';

export async function loader({ request, params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const data = await getPageData({
        request,
        params,
        query: COLLECTION_QUERY
    });

    // @ts-ignore
    const { page: collection, isPreview } = data;

    const queryProducts = await getProducts({ slug: params.slug });

    const { products } = queryProducts?.collection;

    return json({ collection, products, isPreview });
}

export const meta: MetaFunction = ({ data }) => {
    const { title } = data.collection?.seo?.title ? data.collection?.seo : data.collection.store;

    return {
        title: `${title} | OSC Stack`,
        description: data.collection?.seo?.description,
        image: data.collection?.seo?.image?.url,
        'og:description': data.collection?.seo?.description,
        'og:image': data.collection?.seo?.image?.url,
        robots: data.isPreview ? 'noindex' : null // noindex preview urls
    };
};

export default function Collection() {
    const { collection, products, isPreview } = useLoaderData<typeof loader>();
    const { title } = collection.store;

    return (
        <>
            {isPreview ? (
                <Center p={4} className="u-bg-tertiary">
                    Preview Mode
                </Center>
            ) : null}
            <main className="mx-auto max-w-4xl">
                {collection.showHero ? (
                    <Hero settings={collection.hero} />
                ) : (
                    <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
                )}

                {products ? <ProductGrid products={products.nodes} /> : <p>No products</p>}

                {collection.modules && collection.modules.length > 0 ? (
                    <VStack spacing={16}>
                        {collection.modules.map((module: module) =>
                            module ? <Module key={module._key} module={module} /> : null
                        )}
                    </VStack>
                ) : null}
            </main>
        </>
    );
}
