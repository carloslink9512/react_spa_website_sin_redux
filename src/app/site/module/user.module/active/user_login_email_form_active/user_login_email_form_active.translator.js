export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Ingresar',
                form_email: 'Correo electrónico',
                form_btn: 'Ingresar',
                title2: 'Recupera tu contraseña',
                subtitle2: 'Para recuperar tu contraseña presiona',
                here: 'aquí',
                message_email: 'Es necesario que ingreses tu correo electrónico registrado.'
            }
            break;

        default:
            language = {
                title: 'Get into',
                form_email: 'Email',
                form_btn: 'Get into',
                title2: 'Recover your password',
                subtitle2: 'To retrieve your password press',
                here: 'here',
                message_email: 'You need to enter your registered email.'
            }
    }

    return language;
}