import type { SanitySiteSetting } from '~/types';
import { useState } from 'react';
import { json } from '@remix-run/node';
import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { getColorScheme } from '~/cookie';
import type { LoaderFunction } from '@remix-run/server-runtime';
import Hero from '~/components/hero/Hero';
import Preview from '~/components/Preview';
import { VStack } from '@chakra-ui/react';
import Module from '~/components/module';
import type { module } from '~/types';
import { HOME_QUERY } from '~/queries/sanity/home';
import getPageData, { getSettingsData } from '~/models/sanity.server';
import { SETTINGS_QUERY } from '~/queries/sanity/settings';

export const loader: LoaderFunction = async ({ request, params }: LoaderArgs) => {
    const colorScheme = await getColorScheme(request);

    // Query the site settings
    const siteSettings = await getSettingsData({
        query: SETTINGS_QUERY
    });

    // Query the page data
    const data = await getPageData({
        request,
        query: HOME_QUERY
    });

    // @ts-ignore
    const { page: home, isPreview } = data;

    return json({
        colorScheme,
        headerMenuItems: siteSettings?.headerMenuItems,
        footerMenuItems: siteSettings?.footerSettings,
        footerText: siteSettings?.footerSettings?.text,
        home,
        isPreview,
        query: isPreview ? HOME_QUERY : null
    });
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
    const { home, isPreview, query } = useLoaderData<typeof loader>();
    const params = useParams();
    // If `preview` mode is active, its component update this state for us
    const [data, setData] = useState(home);

    // NOTE: For preview mode to work nicely when working with draft content, optional chain _everything_

    return (
        <>
            {isPreview ? (
                <Preview data={data} setData={setData} query={query} queryParams={params} />
            ) : null}

            <main className="mx-auto max-w-4xl">
                {data?.showHero ? <Hero settings={data?.hero} /> : null}

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
