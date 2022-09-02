import type { LoaderArgs } from '@remix-run/server-runtime';
import { useCatch } from '@remix-run/react';
import { redirect } from '@remix-run/server-runtime';

export async function loader({ params }: LoaderArgs) {
    console.log({ params });

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
