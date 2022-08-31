import { NavLink, useMatches } from '@remix-run/react';
import { HStack, Link as ChakraLink } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import type { SanityLinkItem } from '~/types';

type Props = {
    menuItemsName: 'headerMenuItems' | 'footerMenuItems';
};

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

    const activeStyle = {
        textDecoration: 'underline'
    };

    return (
        <nav>
            <HStack as="ul" spacing={4}>
                {menuItems[0].links.map((menuItem: SanityLinkItem) => (
                    <li className="" key={menuItem._key}>
                        {menuItem._type === 'linkInternal' ? (
                            <ChakraLink
                                as={NavLink}
                                to={menuItem.slug}
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                {menuItem.title}
                            </ChakraLink>
                        ) : (
                            <ChakraLink
                                href={menuItem.url}
                                isExternal={menuItem.newWindow}
                                rel="noreferrer"
                            >
                                {menuItem.title}
                                {menuItem.newWindow ? <ExternalLinkIcon mx={2} /> : null}
                            </ChakraLink>
                        )}
                    </li>
                ))}
            </HStack>
        </nav>
    );
}
