import React, { useState, forwardRef, useImperativeHandle } from "react";

type Props = { value: string };

export interface PasswordFieldHandle {
    getValue: () => string;
    getValidity: () => boolean;
}

const PasswordField = forwardRef<PasswordFieldHandle, Props>(({ value }, ref) => {
    const validate = (v: string) => v.length >= 6;

    const [password, setPassword] = useState(value);
    const [confirmPassword, setConfirmPassword] = useState("");

    const [touched, setTouched] = useState(false);
    const [confirmTouched, setConfirmTouched] = useState(false);

    const valid = validate(password);
    const passwordsMatch = password === confirmPassword;

    useImperativeHandle(ref, () => ({
        getValue: () => password,
        getValidity: () => validate(password) && passwordsMatch && confirmPassword !== "",
    }));

    return (
        <div className="field">
            <label>Пароль</label>

            <input
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setTouched(true);
                }}
                className={!touched ? '' : valid ? 'valid' : 'invalid'}
            />

            {touched && !valid &&
                <div className="error">
                    Пароль має містити щонайменше 6 символів
                </div>
            }

            <label>Повторіть пароль</label>

            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setConfirmTouched(true);
                }}
                className={
                    !confirmTouched ? '' : passwordsMatch && confirmPassword !== ''
                        ? 'valid' : 'invalid'
                }
            />

            {confirmTouched && !passwordsMatch &&
                <div className="error">
                    Паролі не збігаються
                </div>
            }

            {confirmTouched && confirmPassword === '' &&
                <div className="error">
                    Повторіть пароль
                </div>
            }
        </div>
    );
});

export default PasswordField;
