import { useCatch } from '@remix-run/react';

export async function loader() {
    // This page should always through a 404 error
    // Remix router is intefering with the Sanity Studio route so pages access directly or refreshed will errror
    // This allows us to handle that nicely and direct users to the correct url
    throw new Response('Not Found', {
        status: 404
    });
}

export function CatchBoundary() {
    const caught = useCatch();

    return (
        <div>
            <h1>Oops something went wrong there!</h1>
            <p>Status: {caught.status}</p>

            <p>Try reloading the Studio</p>
            <a href="/studio">Reload</a>
        </div>
    );
}

export default function Studio404() {
    return <p>Not sure what happened there</p>;
}
