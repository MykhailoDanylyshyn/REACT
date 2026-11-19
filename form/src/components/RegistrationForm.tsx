import React, { useRef } from 'react';
import Swal from 'sweetalert2';

import FullNameField from "./FullNameField";
import GenderField from "./GenderField";
import LoginField from "./LoginField";
import PasswordField from "./PasswordField";
import PositionField from "./PositionField";
import SpecializationField from "./SpecializationField";

export default function RegistrationForm() {
    const fullnameRef = useRef<any>(null);
    const genderRef = useRef<any>(null);
    const loginRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const positionRef = useRef<any>(null);
    const specializationRef = useRef<any>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const fullname = fullnameRef.current?.getValue();
        const valid = fullnameRef.current?.getValidity();

        const gender = genderRef.current?.getValue();
        const genderValid = genderRef.current?.getValidity();

        const login = loginRef.current?.getValue();
        const loginValid = loginRef.current?.getValidity();

        const passwordValid = passwordRef.current?.getValidity();

        const position = positionRef.current?.getValue();
        const positionValid = positionRef.current?.getValidity();

        const specialization = specializationRef.current?.getValue();
        const specializationValid = specializationRef.current?.getValidity();

        if (
            valid &&
            genderValid &&
            loginValid &&
            passwordValid &&
            positionValid &&
            specializationValid
        ) {
            Swal.fire({
                title: 'Дані працівника',
                html: `
                    <div style="text-align: left; font-size: 16px;">
                        <b>ПІБ:</b> ${fullname}<br/>
                        <b>Стать:</b> ${gender}<br/>
                        <b>Логін:</b> ${login}<br/>
                        <b>Посада:</b> ${position}<br/>
                        <b>Спеціалізація:</b> ${specialization.join(', ')}
                    </div>
                `,
                icon: 'info',
                confirmButtonColor: '#32a6a8',
                confirmButtonText: 'Зрозуміло'
            });
        } else {
            Swal.fire({
                title: 'Помилка!',
                text: 'Заповніть правильно всі поля.',
                icon: 'error',
                confirmButtonColor: '#32a6a8'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FullNameField ref={fullnameRef} value="" />

            <GenderField ref={genderRef} value="" />

            <LoginField ref={loginRef} value="" />

            <PasswordField ref={passwordRef} value="" />

            <PositionField ref={positionRef} value="" />

            <SpecializationField ref={specializationRef} value={[]} />

            <div style={{ marginTop: 16 }}>
                <button type="submit">Надіслати</button>
            </div>
        </form>
    );
}
