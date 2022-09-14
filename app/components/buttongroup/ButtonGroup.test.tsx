import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ButtonGroup from './ButtonGroup';

const sampleLinksRAW = [
    {
        _key: '51bdfbd12674',
        _type: 'linkInternal',
        documentType: 'page',
        slug: '/pages/kitchen-sink',
        title: 'Internal Link'
    },
    {
        _key: 'fc93bf42bc5a',
        _type: 'linkExternal',
        newWindow: true,
        title: 'External link',
        url: 'https://openstudycollege.com/'
    }
];

test('renders the ButtonGroup component', async () => {
    render(
        <MemoryRouter>
            <ButtonGroup links={sampleLinksRAW} />
        </MemoryRouter>
    );

    const internalLink = await screen.findByRole('link', {
        name: /internal link/i
    });

    const externalLink = await screen.findByRole('link', {
        name: /external link/i
    });

    // @ts-ignore - can remove once test methods issue is resolved
    expect(internalLink).toHaveAttribute('href', '/pages/kitchen-sink');
    // @ts-ignore - can remove once test methods issue is resolved
    expect(internalLink).not.toHaveAttribute('target', '_blank');

    // @ts-ignore - can remove once test methods issue is resolved
    expect(externalLink).toHaveAttribute('href', 'https://openstudycollege.com/');
    // @ts-ignore - can remove once test methods issue is resolved
    expect(externalLink).toHaveAttribute('target', '_blank');
    // @ts-ignore - can remove once test methods issue is resolved
    expect(externalLink).toHaveAttribute('rel', 'noreferrer');
});
