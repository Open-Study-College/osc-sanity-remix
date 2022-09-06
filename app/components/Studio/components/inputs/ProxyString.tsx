/* eslint-disable react/display-name */
import { FormField } from 'sanity/form';
import { LockIcon } from '@sanity/icons';
import { Box, Text, TextInput, Tooltip } from '@sanity/ui';
import { uuid } from '@sanity/uuid';
import get from 'lodash.get';
import { forwardRef } from 'react';

// TODO: type correctly
type Props = any;

const ProxyString = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {
        compareValue, // Value to check for "edited" functionality
        document,
        markers,
        onFocus,
        onBlur,
        placeholder,
        presence,
        readOnly,
        type
    } = props;

    const path = type?.options?.field;
    const proxyValue = get(document, path);

    const inputId = uuid();

    return (
        <FormField
            compareValue={compareValue}
            description={type?.description}
            inputId={inputId}
            markers={markers}
            presence={presence}
            title={type?.title}
        >
            <Tooltip
                content={
                    <Box padding={2}>
                        <Text muted size={1}>
                            This value is set in Shopify (<code>{path}</code>)
                        </Text>
                    </Box>
                }
                portal
            >
                <TextInput
                    iconRight={LockIcon}
                    id={inputId}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    placeholder={placeholder}
                    readOnly={true}
                    ref={ref}
                    value={proxyValue}
                />
            </Tooltip>
        </FormField>
    );
});

export default ProxyString;
