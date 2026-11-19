import React, { useState, forwardRef, useImperativeHandle } from "react";

type Props = { value: string };

export interface FullNameFieldHandle {
    getValue: () => string;
    getValidity: () => boolean;
}

const FullNameField = forwardRef<FullNameFieldHandle, Props>(({ value }, ref) => {
    const validate = (v: string) => v.trim().length >= 4;

    const [state, setState] = useState({
        value,
        touched: false,
        valid: false,
        error: '',
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        const ok = validate(v);

        setState({
            value: v,
            touched: true,
            valid: ok,
            error: ok ? '' : 'Ім\'я має містити щонайменше 4 символи',
        });
    };

    useImperativeHandle(ref, () => ({
        getValue: () => state.value,
        getValidity: () => validate(state.value),
    }));

    return (
        <div className="field">
            <label>Повне ім'я</label>

            <input
                type="text"
                value={state.value}
                onChange={onChange}
                className={
                    !state.touched ? '' : state.valid ? 'valid' : 'invalid'
                }
            />

            {state.touched && !state.valid &&
                <div className="error">{state.error}</div>
            }
        </div>
    );
});

export default FullNameField;