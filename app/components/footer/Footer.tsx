import { useMatches } from '@remix-run/react';
import { PortableText } from '@portabletext/react';
import Navigation from '../navigation/Navigation';

export default function Footer() {
    const matches = useMatches();

    const footerData = matches
        .filter((match) => match.id === 'root')
        .map((match) => match.data.footerText);

    return (
        <footer>
            <Navigation menuItemsName="footerMenuItems" />

            <PortableText value={footerData[0]} />
        </footer>
    );
}
