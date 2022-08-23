import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { queryPagesBySlug } from '~/models/sanity.server';
import Header from '~/components/header/Header';

export async function loader({ params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const queryPage = await queryPagesBySlug(params.slug);

    if (queryPage.allPage.length === 0) {
        throw new Response('Not Found', { status: 404 });
    }

    const page = queryPage.allPage[0];

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

    const { title } = page;

    return (
        <>
            <main className="mx-auto max-w-4xl">
                <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
            </main>
        </>
    );
}
