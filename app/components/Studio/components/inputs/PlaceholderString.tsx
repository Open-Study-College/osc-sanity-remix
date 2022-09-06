import type { MarksObjectField, Path } from 'sanity';
import { FormField, set, unset } from 'sanity/form';
import { TextInput } from '@sanity/ui';
import { uuid } from '@sanity/uuid';
import get from 'lodash.get';
import type { RefObject } from 'react';
import { forwardRef, useCallback } from 'react';

// TODO: use correct type
type Props = {
    markers: MarksObjectField[];
    onBlur: () => void;
    onChange: (event: any) => void;
    onFocus: (path: Path) => void;
    type: any;
    value: any;
};

const PlaceholderStringInput = forwardRef((props: Props, ref: RefObject<HTMLInputElement>) => {
    const {
        compareValue,
        document,
        markers,
        onBlur,
        onChange,
        onFocus,
        presence,
        readOnly,
        type,
        value
    } = props;

    const handleChange = useCallback(
        // useCallback will help with performance
        (event) => {
            const inputValue = event.currentTarget.value; // get current value

            // if the value exists, set the data, if not, unset the data
            onChange(inputValue ? set(inputValue) : unset());
        },
        [onChange]
    );

    const proxyValue = get(document, type?.options?.field);

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
            <TextInput
                defaultValue={value}
                id={inputId}
                onBlur={onBlur}
                onChange={handleChange}
                onFocus={onFocus}
                placeholder={proxyValue}
                readOnly={readOnly}
                ref={ref}
            />
        </FormField>
    );
});

export default PlaceholderStringInput;
