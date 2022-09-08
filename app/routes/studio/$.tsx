import type { MetaFunction } from '@remix-run/server-runtime';
import { ClientOnly } from 'remix-utils';
import StudioWrapper from '~/components/StudioWrapper';

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
                <div id="sanity-studio" style={{ height: '100vh' }}>
                    <StudioWrapper />
                </div>
            )}
        </ClientOnly>
    );
}
