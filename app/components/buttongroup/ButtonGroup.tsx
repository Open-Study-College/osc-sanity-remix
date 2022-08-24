import { Link } from '@remix-run/react';
import { Button, Link as ChakraLink, ButtonGroup as ChakraButtonGroup } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import buildLinkItems from '~/utils/buildLinkItems';
import type { SanityRawLinkItem, SanityLinkItem } from '~/types';

interface Props {
    links: SanityRawLinkItem[];
}

export default function ButtonGroup({ links }: Props) {
    const linksArray = buildLinkItems({ links });

    return (
        <ChakraButtonGroup size="lg" spacing={4}>
            {linksArray.map((link: SanityLinkItem) =>
                link.__typename === 'LinkInternal' ? (
                    <Button key={link._key} as={Link} to={link.url} className="u-bg-primary">
                        {link.title}
                    </Button>
                ) : (
                    <Button
                        key={link._key}
                        as={ChakraLink}
                        href={link.url}
                        isExternal={link.newWindow}
                        rel="noreferrer"
                        className="u-bg-primary"
                    >
                        {link.title}
                        {link.newWindow ? <ExternalLinkIcon mx={2} /> : null}
                    </Button>
                )
            )}
        </ChakraButtonGroup>
    );
}
