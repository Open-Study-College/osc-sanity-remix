// learn more: https://fly.io/docs/reference/configuration/#services-http_checks
import type { LoaderFunction } from '@remix-run/node';

// import { prisma } from '~/db.server';

export const loader: LoaderFunction = async ({ request }) => {
    /**
     * The promise.all below is fetching the homepage and causing our Sanity API request to fire.
     * As I'm not using Prisma in this app I've removed it but we will need to bear this in mind
     * when we have a production app.
     */

    // const host = request.headers.get('X-Forwarded-Host') ?? request.headers.get('host');

    // try {
    //     const url = new URL('/', `http://${host}`);
    //     // if we can connect to the database and make a simple query
    //     // and make a HEAD request to ourselves, then we're good.
    //     await Promise.all([
    //         prisma.user.count(),
    //         fetch(url.toString(), { method: 'HEAD' }).then((r) => {
    //             if (!r.ok) return Promise.reject(r);
    //         })
    //     ]);
    //     return new Response('OK');
    // } catch (error: unknown) {
    //     console.log('healthcheck ❌', { error });
    //     return new Response('ERROR', { status: 500 });
    // }

    return new Response('OK');
};
