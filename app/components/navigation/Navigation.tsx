import { useMatches } from '@remix-run/react';
import { Flex } from '@chakra-ui/react';
import { NavLink } from '@remix-run/react';
import type { SanityMenuItem } from '~/types';

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

    return (
        <nav>
            <Flex as="ul">
                {menuItems[0].map((menuItem: SanityMenuItem) => (
                    <li key={menuItem._key}>
                        {menuItem.__typename === 'LinkExternal' ? (
                            <a
                                href={menuItem.url}
                                target={menuItem.newWindow ? '_blank' : ''}
                                rel="noreferrer"
                            >
                                {menuItem.title}
                            </a>
                        ) : (
                            <NavLink to={menuItem.url}>{menuItem.title}</NavLink>
                        )}
                    </li>
                ))}
            </Flex>
        </nav>
    );
}
