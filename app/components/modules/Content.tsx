import type { PortableTextBlock } from '@portabletext/types';
import { Stack } from '@chakra-ui/react';
import PortableText from '../portableText/PortableText';

export default function ContentModule({ content }: { content: PortableTextBlock }) {
    return (
        <Stack spacing={6} className="content-module">
            <PortableText value={content} />;
        </Stack>
    );
}
