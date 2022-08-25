import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import type { module } from '~/types';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { queryPagesBySlug, queryInternalUrl, queryAsset } from '~/models/sanity.server';
import { VStack } from '@chakra-ui/react';
import Hero from '~/components/hero/Hero';
import Module from '~/components/module';
import { getSlugFromReference, getAssetFromReference } from '~/utils/getReferenceFromModules';

export async function loader({ params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const queryPage = await queryPagesBySlug(params.slug);

    if (queryPage.allPage.length === 0) {
        throw new Response('Not Found', { status: 404 });
    }

    const page = queryPage.allPage[0];

    // Add the reference slug to the returned response
    if (page.modules) {
        await getSlugFromReference(page, queryInternalUrl);
        await getAssetFromReference(page, queryAsset);
    }

    return json({ page });
}

export const meta: MetaFunction = ({ data }) => {
    const { title } = data.page?.seo ? data.page?.seo : data.page;

    return {
        title: `${title} | OSC Stack`,
        description: data.page?.seo?.description,
        image: data.page?.seo?.image?.url,
        'og:description': data.page?.seo?.description,
        'og:image': data.page?.seo?.image?.url
    };
};

export default function Page() {
    const { page } = useLoaderData<typeof loader>();

    return (
        <>
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
