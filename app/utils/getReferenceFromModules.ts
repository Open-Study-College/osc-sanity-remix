import type { module } from '~/types';

//   This lovely piece of code allows us to loop through the bodyRaw output from the content block in Sanity (Big 0 be damned O.o)
//   We can then query the reference on the internal link annotaion and assign a new property containing the slug
interface page {
    hero?: object | null;
    modules?: module[] | null;
    seo: object | null;
    showHero?: boolean;
    store?: object;
}

export async function getSlugFromReference(page: page, queryfn: Function) {
    if (!page.modules) return;

    for (const module of page.modules) {
        if (module._type === 'module.content') {
            const moduleMarkDefs = module.bodyRaw?.filter((body: { markDefs: object[] }) =>
                body.markDefs?.length > 0 ? body.markDefs : null
            );

            for (const value of moduleMarkDefs) {
                const internal = value.markDefs.filter((mark: module) =>
                    mark._type === 'annotationLinkInternal' ? mark : null
                );

                for (const mark of internal) {
                    const reference = await queryfn(mark.reference._ref);
                    Object.assign(mark, reference);
                }
            }
        }
    }
}

export async function getAssetFromReference(page: page, queryfn: Function) {
    if (!page.modules) return;

    for (const module of page.modules) {
        if (module._type === 'module.content') {
            const moduleImages = module.bodyRaw?.filter((body) =>
                body._type === 'image' ? body : null
            );

            for (const image of moduleImages) {
                const reference = await queryfn(image.asset._ref);
                Object.assign(image, reference);
            }
        }
    }
}
