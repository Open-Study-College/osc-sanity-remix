import type { MetaFunction } from '@remix-run/server-runtime';
import { ClientOnly } from 'remix-utils';
import StudioWrapper from '~/components/Studio';

export const meta: MetaFunction = () => {
    return {
        title: 'Sanity Studio',
        description: 'The Platform for Structured Content'
    };
};

export default function StudioPage() {
    return (
        <ClientOnly>
            {() => (
                <div id="sanity-studio">
                    <StudioWrapper />
                </div>
            )}
        </ClientOnly>
    );
}
