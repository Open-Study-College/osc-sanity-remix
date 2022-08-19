import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { queryPagesBySlug } from '~/models/sanity.server';

export async function loader({ params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const queryPage = await queryPagesBySlug(params.slug);

    if (queryPage.allPage.length === 0) {
        throw new Response('Not Found', { status: 404 });
    }

    const page = queryPage.allPage;

    return json({ page });
}

export default function Page() {
    const { page } = useLoaderData<typeof loader>();

    const { title } = page[0];

    return (
        <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
        </main>
    );
}
