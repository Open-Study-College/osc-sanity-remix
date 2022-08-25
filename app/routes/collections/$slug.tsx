import { json } from '@remix-run/node';
import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import type { module } from '~/types';
import { Link, useLoaderData } from '@remix-run/react';
import { queryCollectionsBySlug, queryInternalUrl, queryAsset } from '~/models/sanity.server';
import { getProductsFromCollection } from '~/models/shopify.server';
import Hero from '~/components/hero/Hero';
import Module from '~/components/module';
import { getSlugFromReference, getAssetFromReference } from '~/utils/getReferenceFromModules';
import { VStack } from '@chakra-ui/react';

export async function loader({ params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const queryCollection = await queryCollectionsBySlug(params.slug);
    if (queryCollection.allCollection.length === 0) {
        throw new Response('Not Found', { status: 404 });
    }

    const queryProducts = await getProductsFromCollection(params.slug);

    const collection = queryCollection?.allCollection[0];
    const products = queryProducts?.collection?.products?.edges;

    // Add the reference slug to the returned response
    if (collection.modules) {
        await getSlugFromReference(collection, queryInternalUrl);
        await getAssetFromReference(collection, queryAsset);
    }

    return json({ collection, products });
}

export const meta: MetaFunction = ({ data }) => {
    const { title } = data.collection?.seo ? data.collection?.seo : data.collection.store;

    return {
        title: `${title} | OSC Stack`,
        description: data.collection?.seo?.description,
        image: data.collection?.seo?.image?.url,
        'og:description': data.collection?.seo?.description,
        'og:image': data.collection?.seo?.image?.url
    };
};

export default function Collection() {
    const { collection, products } = useLoaderData<typeof loader>();
    const { title } = collection.store;
    console.log(collection);

    return (
        <>
            <main className="mx-auto max-w-4xl">
                {collection.showHero ? (
                    <Hero settings={collection.hero} />
                ) : (
                    <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
                )}

                {products.length > 0 ? (
                    <ul>
                        {products.map((product) => (
                            <li key={product.node.id}>
                                <Link to={`/products/${product.node.handle}`}>
                                    {product.node.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : null}

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
