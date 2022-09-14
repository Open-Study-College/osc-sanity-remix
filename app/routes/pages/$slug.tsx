import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import type { module } from '~/types';
import { useState } from 'react';
import { json } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { VStack } from '@chakra-ui/react';
import Hero from '~/components/hero/Hero';
import Module from '~/components/module';
import Preview from '~/components/Preview';
import getPageData from '~/models/sanity.server';
import { PAGE_QUERY } from '~/queries/sanity/page';

export async function loader({ request, params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const data = await getPageData({
        request,
        params,
        query: PAGE_QUERY
    });

    // @ts-ignore
    const { page, isPreview } = data;

    return json({
        page,
        isPreview,
        // If `preview` mode is active, we'll need these for live updates
        query: isPreview ? PAGE_QUERY : null
    });
}

export const meta: MetaFunction = ({ data }) => {
    const pageData = data.page;
    const { title } = pageData?.seo ? pageData?.seo : pageData;

    return {
        title: `${title} | OSC Stack`,
        description: pageData?.seo?.description,
        image: pageData?.seo?.image?.url,
        'og:description': pageData?.seo?.description,
        'og:image': pageData?.seo?.image?.url,
        robots: data.isPreview ? 'noindex' : null // noindex preview urls
    };
};

export default function Page() {
    let { page, isPreview, query } = useLoaderData<typeof loader>();
    const params = useParams();
    // If `preview` mode is active, its component update this state for us
    const [data, setData] = useState(page);

    // Make sure to update the page state if the IDs are different!
    if (page._id !== data._id) setData(page);


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
                    <h1 className="my-6 border-b-2 text-center text-3xl">{data?.title}</h1>
                )}

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
