import type { LoaderArgs } from '@remix-run/server-runtime';
import { useCatch } from '@remix-run/react';
import { redirect } from '@remix-run/server-runtime';

export async function loader({ params }: LoaderArgs) {
    console.log({ params });

    // Currently with Studio V2 we can't host it as a subdirectory with Remix seamlessly.
    // When a user navigates to the /studio route then the Studio will load up okay and the
    // user can access everything.
    // However if they directly access /studio/desk (for example) or refresh the page then
    // Remix will take over and throw a 404 error.
    // Adding this redirect allows us to push the page back to the Sanity Studio startup page
    // and the catch boundry is there as a safety net.
    return redirect('/studio');
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
