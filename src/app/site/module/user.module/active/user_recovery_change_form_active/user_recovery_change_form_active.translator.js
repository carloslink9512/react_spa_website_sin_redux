const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Nueva contraseña',
                subtitle: 'Ingresa tu nueva contraseña para confirmar el cambio. ¡Muchas gracias!',
                form_pass1: 'Nueva contraseña',
                form_pass2: 'Repite tu nueva contraseña',
                form_check_label: 'He leído y acepto todos los términos y condiciones de uso de este sitio.',
                form_btn: 'Enviar contraseña',
                message_email: 'El correo electrónico no es válido.',
                message_pass: 'Es necesario que ingreses tu nueva contraseña.',
                message_controlpass: 'Es necesario que repitas tu nueva contraseña.',
                message_pass_controlpass: 'Ambas contraseñas deben ser iguales.',
                message_accept: 'Es necesario que leas y aceptes los términos y condiciones de uso de este sitio.'
            }
            break;

        default: 
            language = {
                title: 'New password',
                subtitle: 'Enter your new password to confirm the change. Thank you very much!',
                form_pass1: 'New Password',
                form_pass2: 'Repeat your new password',
                form_check_label: 'I have read and accept all the terms and conditions of use of this site.',
                form_btn: 'Send password',
                message_email: 'The email is not valid.',
                message_pass: 'You need to enter your new password.',
                message_controlpass: 'You need to repeat your new password.',
                message_pass_controlpass: 'Both passwords must be the same.',
                message_accept: 'It is necessary that you read and accept the terms and conditions of use of this site.'
            }
            break;
    }
    return language;
}

//...we export the translator...
module.exports = {
    translator
}