const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Confirma tu recuperación de contraseña',
                subtitle: `Te hemos enviado un código de verificación a tu correo registrado. 
                Por favor, cópialo y pégalo en el casillero correspondiente a "Código". 
                ¡Muchas gracias!`,
                hello: 'Hola',
                form_code: 'Código',
                form_check_label: 'He leído y acepto los términos y condiciones de uso de este sitio.',
                form_btn: 'Enviar código',
                message_email: 'El correo electrónico no es válido.',
                message_controlcode: `Es necesario que ingreses el código que te hemos enviado a tu cuenta de correo electrónico. 
                Cópialo y pégalo en este casillero.
                `,
                message_accept: 'Es necesario que leas y aceptes los términos y condiciones de uso de este sitio.'
            }
            break;

        default: 
            language = {
                title: 'Confirm your password recovery',
                subtitle: `We have sent a verification code to your registered email.
                Please copy and paste it into the box corresponding to "Code".
                Thank you very much!`,
                hello: 'Hello',
                form_code: 'Code',
                form_check_label: 'I have read and accept the terms and conditions of use of this site.',
                form_btn: 'Send code',
                message_email: 'The email is not valid.',
                message_controlcode: `You need to enter the code that we have sent to your email account.
                Copy it and paste it in this box.
                `,
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