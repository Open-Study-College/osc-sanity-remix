import { NavLink, useMatches } from '@remix-run/react';
import { HStack, Link as ChakraLink } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import type { InternalSanityLinkItem, ExternalSanityLinkItem } from '~/types';

type Props = {
    menuItemsName: 'headerMenuItems' | 'footerMenuItems';
};

type MenuItem = InternalSanityLinkItem | ExternalSanityLinkItem;

function InternalMenuItem({ menuItem }: { menuItem: MenuItem }) {
    const activeStyle = {
        textDecoration: 'underline'
    };

    if ('slug' in menuItem && menuItem.slug) {
        return (
            <ChakraLink
                as={NavLink}
                to={menuItem.slug}
                // @ts-ignore -- expect null to happen
                style={({ isActive }: { isActive: boolean }) => (isActive ? activeStyle : null)}
            >
                {menuItem.title}
            </ChakraLink>
        );
    }

    return null;
}

function ExternalMenuItem({ menuItem }: { menuItem: MenuItem }) {
    if ('url' in menuItem) {
        return (
            <ChakraLink href={menuItem.url} isExternal={menuItem.newWindow} rel="noreferrer">
                {menuItem.title}
                {menuItem.newWindow ? <ExternalLinkIcon mx={2} /> : null}
            </ChakraLink>
        );
    }

    return null;
}

export default function Navigation({ menuItemsName }: Props) {
    // The useMatches hook allows us to target parent routes and pull the data loaded into them
    // https://remix.run/docs/en/v1/api/remix#usematches
    const matches = useMatches();

    const menuItems = matches
        .filter((match) => match.id === 'root')
        .map((match) =>
            menuItemsName === 'headerMenuItems'
                ? match.data.headerMenuItems
                : match.data.footerMenuItems
        );

    return (
        <nav>
            <HStack as="ul" spacing={4}>
                {menuItems[0]?.links?.map((menuItem: MenuItem) => (
                    <li className="" key={menuItem._key}>
                        {menuItem._type === 'linkInternal' ? (
                            <InternalMenuItem menuItem={menuItem} />
                        ) : (
                            <ExternalMenuItem menuItem={menuItem} />
                        )}
                    </li>
                ))}
            </HStack>
        </nav>
    );
}
