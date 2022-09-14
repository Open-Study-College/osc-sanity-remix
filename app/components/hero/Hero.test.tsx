import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';
import heroMock from '../../../mocks/hero';

test('renders the Hero component', async () => {
    render(
        <MemoryRouter>
            {/* @ts-ignore -- should work but doesn't? */}
            <Hero settings={heroMock} />
        </MemoryRouter>
    );

    const img = await screen.findByRole('img');
    const heading = await screen.findByRole('heading');
    const buttonGroup = await screen.findByRole('group');

    // @ts-ignore - can remove once test methods issue is resolved
    expect(img).toHaveAttribute('src', '/path/to/image.jpg');
    // @ts-ignore - can remove once test methods issue is resolved
    expect(img).toHaveAttribute('alt', 'Open books on a desk with a pen');

    // @ts-ignore - can remove once test methods issue is resolved
    expect(heading).toHaveTextContent('The distance learning experts');

    // @ts-ignore - can remove once test methods issue is resolved
    expect(buttonGroup).toBeVisible();
});
