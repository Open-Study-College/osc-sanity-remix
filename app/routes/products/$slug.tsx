import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import type { module } from '~/types';
import { useState } from 'react';
import { json } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import Module from '~/components/module';
import Preview from '~/components/Preview';
import { VStack } from '@chakra-ui/react';
import getPageData, { getSettingsData } from '~/models/sanity.server';
import { PRODUCT_QUERY } from '~/queries/sanity/product';
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
        query: PRODUCT_QUERY
    });

    // @ts-ignore
    const { page: product, isPreview } = data;

    return json({
        headerMenuItems: siteSettings?.headerMenuItems,
        footerMenuItems: siteSettings?.footerSettings,
        footerText: siteSettings?.footerSettings?.text,
        product,
        isPreview,
        // If `preview` mode is active, we'll need these for live updates
        query: isPreview ? PRODUCT_QUERY : null
    });
}

export const meta: MetaFunction = ({ data }) => {
    const { title } = data.product?.seo?.title ? data.product?.seo : data.product.store;

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
    const { product, isPreview, query } = useLoaderData<typeof loader>();
    const params = useParams();
    // If `preview` mode is active, its component update this state for us
    const [data, setData] = useState(product);

    // Make sure to update the page state if the IDs are different!
    if (product._id !== data._id) setData(product);

    const title = data?.store?.title;

    // NOTE: For preview mode to work nicely when working with draft content, optional chain _everything_
    return (
        <>
            {isPreview ? (
                <Preview data={data} setData={setData} query={query} queryParams={params} />
            ) : null}

            <main className="mx-auto max-w-4xl">
                <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>

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
