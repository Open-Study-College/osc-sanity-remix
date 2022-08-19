import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { queryProductsBySlug } from '~/models/sanity.server';

export async function loader({ params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const queryProduct = await queryProductsBySlug(params.slug);

    if (queryProduct.allProduct.length === 0) {
        throw new Response('Not Found', { status: 404 });
    }

    const product = queryProduct.allProduct[0];

    return json({ product });
}

export default function Product() {
    const { product } = useLoaderData<typeof loader>();
    const { title } = product.store;

    return (
        <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
        </main>
    );
}
