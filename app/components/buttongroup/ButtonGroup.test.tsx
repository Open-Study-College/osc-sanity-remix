import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ButtonGroup from './ButtonGroup';

const sampleLinksRAW = [
    {
        __typename: 'LinkInternal',
        _key: '51bdfbd12674',
        title: 'Internal link',
        reference: {
            __typename: 'Page',
            _key: null,
            title: 'Kitchen sink',
            slug: {
                current: 'kitchen-sink'
            }
        }
    },
    {
        __typename: 'LinkExternal',
        _key: 'fc93bf42bc5a',
        title: 'External link',
        url: 'https://openstudycollege.com/',
        newWindow: true
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

    expect(internalLink).toHaveAttribute('href', '/pages/kitchen-sink');
    expect(internalLink).not.toHaveAttribute('target', '_blank');

    expect(externalLink).toHaveAttribute('href', 'https://openstudycollege.com/');
    expect(externalLink).toHaveAttribute('target', '_blank');
    expect(externalLink).toHaveAttribute('rel', 'noreferrer');
});
