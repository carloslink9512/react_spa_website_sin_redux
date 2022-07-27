export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Regístrate',

                form_name: 'Nombre',
                form_lastname: 'Apellido',
                form_email: 'Correo electrónico',
                form_pass: 'Contraseña',
                form_pass_control: 'Repite tu contraseña',
                form_check_accept_label: 'Acepto los términos y condiciones de uso de este sitio. Acepto las políticas de privacidad y uso de datos de este sitio.',
                form_btn: 'Aceptar',

                form_message_name: 'Debes ingresar tu nombre',
                form_message_lastname: 'Debes ingresar tu apellido',
                form_message_email: 'Debes ingresar tu correo electrónico',
                form_message_pass: 'Debes ingresar una contraseña',
                form_message_controlpass: 'Debes repetir tu contraseña',
                form_message_pass_controlpass: 'Ambas contraseñas deben coincidir',
                form_message_accept: 'Debes leer y aceptar los términos y condiciones de uso de este sitio, y las políticas de privacidad sobre los datos.',
            };
            break;

        default:
            language = {
                title: 'Sign up',

                form_name: 'Name',
                form_lastname: 'Last name',
                form_email: 'Email',
                form_pass: 'Password',
                form_pass_control: 'Repeat your password',
                form_check_accept_label: 'I accept the terms and conditions of use of this site. I accept the privacy and data use policies of this site.',
                form_btn: 'Accept',

                form_message_name: 'You must enter your name',
                form_message_lastname: 'You must enter your last name',
                form_message_email: 'You must enter your email',
                form_message_pass: 'You must enter a password',
                form_message_controlpass: 'You must repeat your password',
                form_message_pass_controlpass: 'Both passwords must match',
                form_message_accept: 'You must read and accept the terms and conditions of use of this site, and the privacy policies on data.',
            };
    }

    return language;
}