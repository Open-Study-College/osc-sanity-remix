import { Link } from '@remix-run/react';
import type { PortableTextBlock } from '@portabletext/types';
import { PortableText as ReactPortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import {
    Heading,
    Text,
    ListItem,
    OrderedList,
    UnorderedList,
    Link as ChakraLink
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// https://github.com/portabletext/react-portabletext
const portableTextComponents: PortableTextComponents = {
    block: {
        h1: ({ children }) => (
            <Heading as="h1" className="t-font-alpha">
                {children}
            </Heading>
        ),
        h2: ({ children }) => (
            <Heading as="h2" className="t-font-beta">
                {children}
            </Heading>
        ),
        h3: ({ children }) => (
            <Heading as="h3" className="t-font-gamma">
                {children}
            </Heading>
        ),
        blockquote: ({ children }) => (
            <blockquote className="u-colour-primary u-text-bold">{children}</blockquote>
        ),
        normal: ({ children }) => <Text>{children}</Text>
    },
    list: {
        bullet: ({ children }) => (
            <UnorderedList style={{ listStyle: 'unset' }}>{children}</UnorderedList>
        ),
        number: ({ children }) => (
            <OrderedList style={{ listStyle: 'auto' }}>{children}</OrderedList>
        )
    },
    listItem: {
        bullet: ({ children }) => <ListItem>{children}</ListItem>,
        number: ({ children }) => <ListItem>{children}</ListItem>
    },
    marks: {
        annotationLinkInternal: ({ value, children }) => {
            let url = '/';

            if (value.Product) {
                url = `/products/${value.Product.store.slug.current}`;
            }
            if (value.Collection) {
                url = `/collections/${value.Collection.store.slug.current}`;
            }
            if (value.Page) {
                url = `/pages/${value.Page.slug.current}`;
            }

            return (
                <ChakraLink as={Link} to={url} style={{ textDecoration: 'underline' }}>
                    {children}
                </ChakraLink>
            );
        },
        annotationLinkExternal: ({ value, children }) => {
            return (
                <ChakraLink
                    href={value.url}
                    isExternal={value.newWindow}
                    rel="noreferrer"
                    style={{ textDecoration: 'underline' }}
                >
                    {children}
                    {value.newWindow ? <ExternalLinkIcon mx={2} /> : null}
                </ChakraLink>
            );
        },
        annotationLinkEmail: ({ value, children }) => {
            const email = value.email ? `mailto:${value.email}` : undefined;

            return (
                <ChakraLink href={email} style={{ textDecoration: 'underline' }}>
                    {children}
                </ChakraLink>
            );
        }
    }
};

export default function PortableText({ value }: { value: PortableTextBlock }) {
    return <ReactPortableText value={value} components={portableTextComponents} />;
}
