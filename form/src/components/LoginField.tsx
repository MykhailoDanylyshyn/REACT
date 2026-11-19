
import React, { useState, forwardRef, useImperativeHandle } from "react";

type Props = { value: string };

export interface LoginFieldHandle {
    getValue: () => string;
    getValidity: () => boolean;
}

const LoginField = forwardRef<LoginFieldHandle, Props>(({ value }, ref) => {
    const validate = (v: string) => v.trim().length >= 4;

    const [login, setLogin] = useState(value);
    const [touched, setTouched] = useState(false);

    const valid = validate(login);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
        setTouched(true);
    };

    useImperativeHandle(ref, () => ({
        getValue: () => login,
        getValidity: () => validate(login),
    }));

    return (
        <div className="field">
            <label>Логін</label>
            <input
                type="text"
                value={login}
                onChange={onChange}
                className={!touched ? '' : valid ? 'valid' : 'invalid'}
            />

            {touched && !valid &&
                <div className="error">Логін має містити щонайменше 4 символи</div>
            }
        </div>
    );
});

export default LoginField;
