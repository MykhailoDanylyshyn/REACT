import React, { useState, forwardRef, useImperativeHandle } from "react";

type Props = { value: string[] };

export interface SpecializationFieldHandle {
    getValue: () => string[];
    getValidity: () => boolean;
}

const SpecializationField = forwardRef<SpecializationFieldHandle, Props>(({ value }, ref) => {
    const [specializations, setSpecializations] = useState<string[]>(value);
    const [touched, setTouched] = useState(false);

    const options = [
        "Програмування",
        "Дизайн",
        "Маркетинг",
        "Менеджмент",
        "Бухгалтерія",
    ];

    const onChange = (option: string) => {
        setSpecializations(prev =>
            prev.includes(option)
                ? prev.filter(item => item !== option)
                : [...prev, option]
        );

        setTouched(true);
    };

    useImperativeHandle(ref, () => ({
        getValue: () => specializations,
        getValidity: () => specializations.length > 0,
    }));

    return (
        <div className="field">
            <label>Спеціалізація</label>

            <div>
                {options.map(option => (
                    <label key={option}>
                        <input
                            type="checkbox"
                            checked={specializations.includes(option)}
                            onChange={() => onChange(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>

            {touched && specializations.length === 0 &&
                <div className="error">Оберіть спеціалізацію</div>
            }
        </div>
    );
});

export default SpecializationField;
