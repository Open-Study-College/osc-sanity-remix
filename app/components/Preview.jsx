import { Center } from '@chakra-ui/react';
import { useEffect } from 'react';

import { usePreviewSubscription } from '~/lib/sanity/hooks/usePreviewSubscription';

export default function Preview({ data, setData, query, queryParams }) {
    const { data: previewData } = usePreviewSubscription(query, {
        params: queryParams,
        initialData: data
    });

    useEffect(() => setData(previewData[0]), [previewData, setData]);

    return <Center>Preview Mode</Center>;
}
