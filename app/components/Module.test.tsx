import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Module from './module';
import moduleContentMock from '../../mocks/moduleContent';
import moduleMediaText from '../../mocks/moduleMediaText';

test('it renders no content safely', () => {
    const { container } = render(
        <MemoryRouter>
            <Module module={{}} />
        </MemoryRouter>
    );

    const contentModule = container.getElementsByClassName('content-module');
    const mediaTextModule = container.getElementsByClassName('media-text-module');

    expect(contentModule).toHaveLength(0);
    expect(mediaTextModule).toHaveLength(0);
    expect(screen.queryByText('TypeError')).not.toBeInTheDocument();
});

describe('content module', () => {
    test('it renders the content module', () => {
        const { container } = render(
            <MemoryRouter>
                <Module module={moduleContentMock} />
            </MemoryRouter>
        );

        const contentModule = container.getElementsByClassName('content-module');

        expect(contentModule).toHaveLength(1);
    });

    test('it renders the chakra components', () => {
        render(
            <MemoryRouter>
                <Module module={moduleContentMock} />
            </MemoryRouter>
        );

        const h1 = screen.getByRole('heading', { level: 1 });
        const h2 = screen.getByRole('heading', { level: 2 });
        const h3 = screen.getByRole('heading', { level: 3 });
        const links = screen.getAllByRole('link');
        const externalLink = screen.getByRole('link', { name: /external link/i });

        expect(h1).toHaveClass('chakra-heading');
        expect(h2).toHaveClass('chakra-heading');
        expect(h3).toHaveClass('chakra-heading');

        for (const link of links) {
            expect(link).toHaveClass('chakra-link');
        }

        expect(externalLink).toHaveAttribute('target', '_blank');
        expect(externalLink).toHaveAttribute('rel', 'noreferrer');
    });

    it("renders the link href's correctly", () => {
        render(
            <MemoryRouter>
                <Module module={moduleContentMock} />
            </MemoryRouter>
        );

        const interalLink = screen.getByRole('link', { name: /page link/i });
        const externalLink = screen.getByRole('link', { name: /external link/i });
        const emailLink = screen.getByRole('link', { name: /email link/i });

        expect(interalLink).toHaveAttribute('href', '/pages/empty-page');
        expect(externalLink).toHaveAttribute('href', 'https://openstudycollege.com/');
        expect(emailLink).toHaveAttribute('href', 'mailto:steve.bister@openstudycollege.com');
    });

    it('renders the images correctly', () => {
        render(
            <MemoryRouter>
                <Module module={moduleContentMock} />
            </MemoryRouter>
        );

        const img = screen.getByRole('img');

        expect(img).toHaveAttribute(
            'src',
            'https://cdn.sanity.io/images/v6lebos6/production/586e498d79a8d15c6799af5409c43db2cff08477-1920x1442.jpg'
        );
        expect(img).toHaveAttribute('alt', 'Open books on a desk with a pen');
    });
});

describe('media text module', () => {
    it('renders the media/text module', () => {
        const { container } = render(
            <MemoryRouter>
                <Module module={moduleMediaText} />
            </MemoryRouter>
        );

        const mediaTextModule = container.getElementsByClassName('media-text-module');

        expect(mediaTextModule).toHaveLength(1);
    });
});
