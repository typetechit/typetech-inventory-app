import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function MultiSelectInput({
    options,
    defaultOption,
    onChange
}: {
    options: any[],
    defaultOption?: any,
    onChange: (values: any) => void
}) {
    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={defaultOption}
            isMulti
            options={options}
            onChange={(values: any) => onChange(values)}
        />
    );
}
