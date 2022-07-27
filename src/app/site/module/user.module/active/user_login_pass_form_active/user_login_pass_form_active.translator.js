export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Ingresa tu contraseña',
                form_pass: 'Contraseña',
                form_btn: 'Ingresar',
                hello: 'Hola',
                welcome: 'bienvenido',
                message_pass: 'Es necesario que ingreses tu contraseña.'
            }
            break;

        default:
            language = {
                title: 'Enter your password',
                form_pass: 'Password',
                form_btn: 'Get into',
                hello: 'Hello',
                welcome: 'welcome',
                message_pass: 'You need to enter your password.'
            }
    }

    return language;
}