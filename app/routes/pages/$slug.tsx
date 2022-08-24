import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import type { module } from '~/types';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { queryPagesBySlug, queryInternalUrl } from '~/models/sanity.server';
import { Container } from '@chakra-ui/react';
import Hero from '~/components/hero/Hero';
import Module from '~/components/module';

export async function loader({ params }: LoaderArgs) {
    if (!params.slug) throw new Error('Missing slug');

    const queryPage = await queryPagesBySlug(params.slug);

    if (queryPage.allPage.length === 0) {
        throw new Response('Not Found', { status: 404 });
    }

    const page = queryPage.allPage[0];

    //   This lovely piece of code allows us to loop through the bodyRaw output from the content block in Sanity (Big 0 be damned O.o)
    //   We can then query the reference on the internal link annotaion and assign a new property containing the slug
    const getReference = async () => {
        for (const module of page.modules) {
            if (module._type === 'module.content') {
                const moduleMarkDefs = module.bodyRaw.filter((body) =>
                    body.markDefs?.length > 0 ? body.markDefs : null
                );

                for (const value of moduleMarkDefs) {
                    const internal = value.markDefs.filter((mark) =>
                        mark._type === 'annotationLinkInternal' ? mark : null
                    );

                    for (const mark of internal) {
                        const reference = await queryInternalUrl(mark.reference._ref);
                        Object.assign(mark, reference);
                    }
                }
            }
        }
    };
    if (page.modules) await getReference();

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

    return (
        <>
            <main className="mx-auto max-w-4xl">
                {page.showHero ? (
                    <Hero settings={page.hero} />
                ) : (
                    <h1 className="my-6 border-b-2 text-center text-3xl">{page.title}</h1>
                )}

                {page.modules && page.modules.length > 0 ? (
                    <Container maxW="container.md">
                        {page.modules.map((module: module) => (
                            <Module key={module._key} module={module} />
                        ))}
                    </Container>
                ) : null}
            </main>
        </>
    );
}
