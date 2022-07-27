export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Confirma tu registración',
                detail1: 'Ingresa el código que te hemos enviado a tu correo electrónico registrado.',
                detail2_1: `Ya te encuentras parcialmente registrado. Busca el correo electrónico que te hemos enviado en esa ocación y utiliza 
                el código de verificación, sigue siendo válido. Cópialo y pégalo en la casilla correspondiente.`,
                detail2_2: `Si no encuentras el correo electrónico, presiona el botón de "Reenviarme el código por correo electrónico" 
                y el sistema te lo volverá a enviar. Luego cópialo y pégalo en la casilla correspondiente.`,

                form_control_code: 'Agrega el código',
                form_accept_label: 'Acepta los términos y condiciones de uso de este sitio.',
                form_btn: 'Aceptar',
                form_btn_code: 'Reenviarme el código de verificación a mi correo electrónico',

                form_message_email: 'Agrega tu correo electrónico',
                form_message_controlcode: 'Agrega el código de control',
                form_message_accept: 'Debes aceptar los términos y condiciones de uso de este sitio.'
            };
            break;

        default:
            language = {
                title: 'Confirm your registration',
                detail1: 'Enter the code that we have sent to your registered email.',
                detail2_1: `You are already partially registered. Find the email we sent you on that occasion and use
                the verification code is still valid. Copy it and paste it in the corresponding box.`,
                detail2_2: `If you can't find the email, press the button "Email me the code"
                and the system will resend it to you. Then copy and paste it in the corresponding box.`,

                form_control_code: 'Add the code',
                form_accept_label: 'Accept the terms and conditions of use of this site.',
                form_btn: 'To accept',
                form_btn_code: 'Resend the verification code to my email',

                form_message_email: 'Add your email',
                form_message_controlcode: 'Add the control code',
                form_message_accept: 'You must accept the terms and conditions of use of this site.'
            };
    }

    return language;
}