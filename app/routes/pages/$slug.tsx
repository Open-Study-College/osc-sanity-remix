import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import type { module } from '~/types';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Center, VStack } from '@chakra-ui/react';
import Hero from '~/components/hero/Hero';
import Module from '~/components/module';
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

    return json({ page, isPreview });
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
    const { page, isPreview } = useLoaderData<typeof loader>();

    return (
        <>
            {isPreview ? (
                <Center p={4} className="u-bg-tertiary">
                    Preview Mode
                </Center>
            ) : null}

            <main className="mx-auto max-w-4xl">
                {page.showHero ? (
                    <Hero settings={page.hero} />
                ) : (
                    <h1 className="my-6 border-b-2 text-center text-3xl">{page.title}</h1>
                )}

                {page.modules && page.modules.length > 0 ? (
                    <VStack spacing={16}>
                        {page.modules.map((module: module) =>
                            module ? <Module key={module._key} module={module} /> : null
                        )}
                    </VStack>
                ) : null}
            </main>
        </>
    );
}
