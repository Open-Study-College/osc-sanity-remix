import { Link } from '@remix-run/react';
import { Button, Link as ChakraLink, ButtonGroup as ChakraButtonGroup } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import type { InternalSanityLinkItem, ExternalSanityLinkItem } from '~/types';

interface Props {
    links: InternalSanityLinkItem[] | ExternalSanityLinkItem[];
}

function InternalButton({ link }: { link: InternalSanityLinkItem }) {
    if ('slug' in link && link.slug) {
        return (
            <Button as={Link} to={link.slug} className="u-bg-primary">
                {link.title}
            </Button>
        );
    }

    return null;
}

function ExternalButton({ link }: { link: ExternalSanityLinkItem }) {
    if ('url' in link) {
        return (
            <Button
                as={ChakraLink}
                href={link.url}
                isExternal={link.newWindow}
                rel="noreferrer"
                className="u-bg-primary"
            >
                {link.title}
                {link.newWindow ? <ExternalLinkIcon mx={2} /> : null}
            </Button>
        );
    }

    return null;
}

export default function ButtonGroup({ links }: Props) {
    return (
        <ChakraButtonGroup size="lg" spacing={4}>
            {links.map((link) =>
                link._type === 'linkInternal' ? (
                    <InternalButton key={link._key} link={link} />
                ) : (
                    <ExternalButton key={link._key} link={link} />
                )
            )}
        </ChakraButtonGroup>
    );
}
