/* eslint-disable react/display-name */
import type { Path } from 'sanity';
import type { Document } from '~/studio/schemaTypes';
import { FormField, set, unset } from 'sanity/form';
import { TextInput } from '@sanity/ui';
import { uuid } from '@sanity/uuid';
import get from 'lodash.get';
import { forwardRef, useCallback } from 'react';

type Props = {
    document: Document;
    onBlur: () => void;
    onChange: (event: any) => void;
    onFocus: (path: Path) => void;
    readOnly: any;
    type: any;
    value: any;
};

const PlaceholderStringInput = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    const { document, onBlur, onChange, onFocus, readOnly, type, value } = props;

    const handleChange = useCallback(
        // useCallback will help with performance
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            const inputValue = event.currentTarget.value; // get current value

            // if the value exists, set the data, if not, unset the data
            onChange(inputValue ? set(inputValue) : unset());
        },
        [onChange]
    );

    const proxyValue = get(document, type?.options?.field);

    const inputId = uuid();

    return (
        <FormField description={type?.description} inputId={inputId} title={type?.title}>
            <TextInput
                defaultValue={value}
                id={inputId}
                onBlur={onBlur}
                onChange={handleChange}
                // @ts-ignore
                onFocus={onFocus}
                placeholder={proxyValue}
                readOnly={readOnly}
                ref={ref}
            />
        </FormField>
    );
});

export default PlaceholderStringInput;
