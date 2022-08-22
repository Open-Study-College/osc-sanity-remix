import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { queryCollectionsBySlug } from '~/models/sanity.server';
import { getProductsFromCollection } from '~/models/shopify.server';

export async function loader({ params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const queryCollection = await queryCollectionsBySlug(params.slug);
    if (queryCollection.allCollection.length === 0) {
        throw new Response('Not Found', { status: 404 });
    }

    const queryProducts = await getProductsFromCollection(params.slug);

    const collection = queryCollection?.allCollection[0];
    const products = queryProducts?.collection?.products?.edges;

    return json({ collection, products });
}

export default function Collection() {
    const { collection, products } = useLoaderData<typeof loader>();
    const { title } = collection.store;

    return (
        <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>

            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.node.id}>
                            <Link to={`/products/${product.node.handle}`}>
                                {product.node.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : null}
        </main>
    );
}
