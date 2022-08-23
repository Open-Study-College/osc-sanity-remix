import { json } from '@remix-run/node';
import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getColorScheme } from '~/cookie';
import type { LoaderFunction } from '@remix-run/server-runtime';
import { queryHomePage } from '~/models/sanity.server';
import Hero from '~/components/hero/Hero';

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
    const colorScheme = await getColorScheme(request);

    const queryHome = await queryHomePage();

    const home = queryHome.Home;

    return json({ colorScheme, home });
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
    const { home } = useLoaderData<typeof loader>();
    console.log(home);

    return <>{home.showHero ? <Hero settings={home.hero} /> : null}</>;
}
