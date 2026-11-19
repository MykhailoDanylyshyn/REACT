import React, { useState, forwardRef, useImperativeHandle } from "react";

type Props = { value: string };

export interface GenderFieldHandle {
    getValue: () => string;
    getValidity: () => boolean;
}

const GenderField = forwardRef<GenderFieldHandle, Props>(({ value }, ref) => {
    const [gender, setGender] = useState(value);
    const [touched, setTouched] = useState(false);

    const onChange = (v: string) => {
        setGender(v);
        setTouched(true);
    };

    useImperativeHandle(ref, () => ({
        getValue: () => gender,
        getValidity: () => gender !== '',
    }));

    return (
        <div className="field">
            <label>Стать</label>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={gender === "Чоловіча"}
                        onChange={() => onChange(
                            gender === "Чоловіча" ? "" : "Чоловіча"
                        )}
                    />
                    Чоловіча
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={gender === "Жіноча"}
                        onChange={() => onChange(
                            gender === "Жіноча" ? "" : "Жіноча"
                        )}
                    />
                    Жіноча
                </label>
            </div>

            {touched && gender === "" &&
                <div className="error">Оберіть стать</div>
            }
        </div>
    );
});

export default GenderField;
