const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Recupera tu contraseña',
                subtitle: `Ingresa tu correo electrónico registrado. 
                Te enviaremos un código de verificación. 
                ¡Muchas gracias!`,
                form_email: 'Correo electrónico',
                form_check_label: 'He leido y acepto los términos y condiciones de uso de este sitio.',
                form_button: 'Aceptar',
                message_email: 'Por favor ingresa tu correo electrónico.',
                message_check: 'Es necesario que leas y aceptes los términos y condiciones de uso de este sitio.'
            }
            break;

        default: 
            language = {
                title: 'Recover your password',
                subtitle: `Enter your registered email.
                We will send you a verification code.
                Thank you very much!`,
                form_email: 'Email',
                form_check_label: 'I have read and accept the terms and conditions of use of this site.',
                form_button: 'To accept',
                message_email: 'Please enter your email.',
                message_check: 'It is necessary that you read and accept the terms and conditions of use of this site.'
            }
            break;
    }
    return language;
}

//...we export the translator...
module.exports = {
    translator
}