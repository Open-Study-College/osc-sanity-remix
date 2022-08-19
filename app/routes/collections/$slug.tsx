import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { queryCollectionsBySlug } from '~/models/sanity.server';

export async function loader({ params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const queryCollection = await queryCollectionsBySlug(params.slug);

    if (queryCollection.allCollection.length === 0) {
        throw new Response('Not Found', { status: 404 });
    }

    const collection = queryCollection.allCollection[0];

    return json({ collection });
}

export default function Collection() {
    const { collection } = useLoaderData<typeof loader>();
    const { title } = collection.store;

    return (
        <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
        </main>
    );
}
