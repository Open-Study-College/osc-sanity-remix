import { json } from '@remix-run/node';
import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import type { module } from '~/types';
import { useState } from 'react';
import { useLoaderData, useParams } from '@remix-run/react';
import { getProducts } from '~/models/shopify.server';
import Hero from '~/components/hero/Hero';
import Module from '~/components/module';
import Preview from '~/components/Preview';
import { VStack } from '@chakra-ui/react';
import ProductGrid from '~/components/collections/ProdutGrid';
import getPageData, { getSettingsData } from '~/models/sanity.server';
import { COLLECTION_QUERY } from '~/queries/sanity/collection';
import { SETTINGS_QUERY } from '~/queries/sanity/settings';

export async function loader({ request, params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    // Query the site settings
    const siteSettings = await getSettingsData({
        query: SETTINGS_QUERY
    });

    // Query the page data
    const data = await getPageData({
        request,
        params,
        query: COLLECTION_QUERY
    });

    // @ts-ignore
    const { page: collection, isPreview } = data;

    const queryProducts = await getProducts({ slug: params.slug });

    const { products } = queryProducts?.collection;

    return json({
        headerMenuItems: siteSettings?.headerMenuItems,
        footerMenuItems: siteSettings?.footerSettings,
        footerText: siteSettings?.footerSettings?.text,
        collection,
        products,
        isPreview,
        // If `preview` mode is active, we'll need these for live updates
        query: isPreview ? COLLECTION_QUERY : null
    });
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
    const { collection, products, isPreview, query } = useLoaderData<typeof loader>();
    const params = useParams();
    // If `preview` mode is active, its component update this state for us
    const [data, setData] = useState(collection);

    // Make sure to update the page state if the IDs are different!
    if (collection?._id !== data?._id) setData(collection);

    const title = data?.store?.title;

    // NOTE: For preview mode to work nicely when working with draft content, optional chain _everything_
    return (
        <>
            {isPreview ? (
                <Preview data={data} setData={setData} query={query} queryParams={params} />
            ) : null}

            <main className="mx-auto max-w-4xl">
                {data?.showHero ? (
                    <Hero settings={data?.hero} />
                ) : (
                    <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
                )}

                {products ? <ProductGrid products={products.nodes} /> : <p>No products</p>}

                {data?.modules && data?.modules.length > 0 ? (
                    <VStack spacing={16}>
                        {data?.modules.map((module: module) =>
                            module ? <Module key={module._key} module={module} /> : null
                        )}
                    </VStack>
                ) : null}
            </main>
        </>
    );
}
