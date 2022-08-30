import { json } from '@remix-run/node';
import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getColorScheme } from '~/cookie';
import type { LoaderFunction } from '@remix-run/server-runtime';
import Hero from '~/components/hero/Hero';
import buildPageData from '~/utils/buildPageData.server';
import { Center, VStack } from '@chakra-ui/react';
import Module from '~/components/module';
import type { module } from '~/types';

export const loader: LoaderFunction = async ({ request, params }: LoaderArgs) => {
    const colorScheme = await getColorScheme(request);

    const data = await buildPageData({
        request,
        params,
        type: 'home'
    });

    const { page: home, isPreview } = data;

    return json({ colorScheme, home, isPreview });
};

export const meta: MetaFunction = ({ data }) => {
    const { title } = data.home?.seo ? data.home?.seo : data.home.store;

    return {
        title: `${title} | OSC Stack`,
        description: data.home?.seo?.description,
        image: data.home?.seo?.image?.url,
        'og:description': data.home?.seo?.description,
        'og:image': data.home?.seo?.image?.url
    };
};

export default function Index() {
    const { home, isPreview } = useLoaderData<typeof loader>();

    return (
        <>
            {isPreview ? (
                <Center p={4} className="u-bg-tertiary">
                    Preview Mode
                </Center>
            ) : null}

            <main className="mx-auto max-w-4xl">
                {home.showHero ? <Hero settings={home.hero} /> : null}

                {home.modules && home.modules.length > 0 ? (
                    <VStack spacing={16}>
                        {home.modules.map((module: module) =>
                            module ? <Module key={module._key} module={module} /> : null
                        )}
                    </VStack>
                ) : null}
            </main>
        </>
    );
}
