import React, { useState, useEffect, ChangeEvent } from 'react';

interface DebounceInputProps {
    value: string;
    onChange: (value: string) => void;
    delay?: number;
    placeholder?: string;
    className?: string;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const DebounceInput: React.FC<DebounceInputProps> = ({
    value,
    onChange,
    delay = 500,
    placeholder = '',
    className,
    onFocus,
    onBlur,
}) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            onChange(inputValue);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue, delay, onChange]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            className={className}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

export default DebounceInput;