
import React, { useState, forwardRef, useImperativeHandle } from "react";

type Props = { value: string };

export interface PositionFieldHandle {
    getValue: () => string;
    getValidity: () => boolean;
}

const PositionField = forwardRef<PositionFieldHandle, Props>(({ value }, ref) => {
    const [position, setPosition] = useState(value);
    const [touched, setTouched] = useState(false);

    const valid = position !== '';

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPosition(e.target.value);
        setTouched(true);
    };

    useImperativeHandle(ref, () => ({
        getValue: () => position,
        getValidity: () => position !== '',
    }));

    return (
        <div className="field">
            <label>Посада</label>

            <select
                value={position}
                onChange={onChange}
                className={!touched ? '' : valid ? 'valid' : 'invalid'}
            >
                <option value="">Оберіть посаду</option>
                <option value="Працівник">Працівник</option>
                <option value="Менеджер">Менеджер</option>
                <option value="Керівник">Керівник</option>
                <option value="Адміністратор">Адміністратор</option>
            </select>

            {touched && !valid &&
                <div className="error">Оберіть посаду</div>
            }
        </div>
    );
});

export default PositionField;
