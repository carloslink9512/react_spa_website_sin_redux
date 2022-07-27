const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                messageOk1: '¡Tus datos personales fueron modificados satisfactoriamente!',
                messageOk2: '¡El correo electrónico con el código de verificación fue enviado satisfactoriamente!. Cópialo y pégalo en el casillero correspondiente.',
                messageOk3: '¡Los cambios que has realizado de los datos de tu perfil han sido correctos!',
                messageError: `Lo sentimos. En este momento nuestros servidores están fuera de línea. 
                Inténtalo en unos minutos. Si este mensaje persiste, envíanos un email a 'info@example.com' y 
                nos comunicaremos a la brevedad. ¡Muchas gracias!,
                `,
                messageWarning1: `El correo electrónico ingresado se encuentra registrado, pero deshabilitado. 
                Ingresa uno diferente o comunícate con nosotros a través del formulario de contracto, o bien 
                envíandonos un mensaje a 'info@example.com' y lo resolveremos a la brevedad. ¡Muchas gracias!
                `,
                messageWarning2: `El correo electrónico ingresado se encuentra registrado, pero pendiente de 
                confirmar. Por favor, ingresa por 'Ingresar' y el sistema te guiará. ¡Muchas gracias!
                `,
                messageWarning3: `El correo electrónico se encuentra correctamente registrado. Si no recuerdas 
                tu contraseña, por favor inicia el proceso de recuperación de la misma. ¡Muchas gracias!
                `,
                messageWarning4: `El código de verificación ingresado no es correcto. Por favor cópialo y pégalo 
                nuevamente. Si el error persiste, comunícate con nosotros y lo resolveremos a la brevedad. Puedes 
                usar el formulario de contacto o enviarnos un correo a 'info@example.com'. ¡Muchas gracias!
                `,
                messageWarning5: `Tu correo electrónico se encuentra registrado, pero tu usuario fue deshabilitado. Por 
                favor, envíanos un mensaje y lo resolveremos a la brevedad. Puedes usar el formulario de contacto, o bien 
                enviándonos un correo electrónico a 'info@example.com'. ¡Muchas gracias!
                `,
                messageWarning6: `Tu correo electrónico se encuentra registrado, pero tienes pendiente la confirmación. 
                Para recuperar tu contraseña deberás continuar con el proceso de confirmación. Una vez finalizado, 
                podrás recuperar tu contraseña. Debes buscar el correo que te enviamos durante el mismo. Si aún tienes dudas, 
                envíanos un mensaje completando el formulario de contacto, o bien un correo electrónico a 'info@example.com', y 
                lo resolveremos a la brevedad. ¡Muchas gracias!
                `,
                messageWarning7: `Lo sentimos, tu cuenta fue deshabilitada durante el proceso. Por favor envíanos un mensaje y lo 
                resolveremos a la brevedad. Puedes usar el formulario de contacto, o bien enviarnos un correo electrónico a 
                'info@example.com'. ¡Muchas gracias!
                `,
                messageWarning8: `El código de verificación ingresado no coincide con el que te enviamos. Por favor vuelve a 
                consultar el correo electrónico, cópialo y pégalo nuevamente. Si el problema persiste envíanos un mensaje y lo 
                resolveremos a la brevedad. Puedes usar el formulario de contacto, o bien un correo electrónico a 'info@example.com'. 
                ¡Muchas gracias!
                `,
                messageWarning9: `Lo sentimos. La cuenta de correo electrónico ingresada no se encuentra registrada. Por favor inicia 
                el proceso de registración. Te esperamos. ¡Muchas gracias!
                `,
                messageWarning10: `Tu cuenta se encuentra parcialmente registrada, siendo necesario continuar con la confirmación. ¡Te guiaremos!
                `,
                messageWarning11: `Lo sentimos. Tu cuenta fue deshabilitada. Por favor comunícate con nosotros y lo resolveremos a la brevedad. 
                Puedes utilizar el formulario de contacto, o mediante un correo electrónico a 'info@example.com'. ¡Muchas gracias!
                `,
                messageWarning12: `Lo sentimos. La contraseña ingresada no pertenece a tu usuario. Por favor inténtalo nuevamente. Si no recuerdas 
                tu contraseña, podrás iniciar el proceso de recuperación. ¡Muchas gracias!
                `,
                messageWarning13: `Lo sentimos. El tiempo de sesión segura a expirado. Es necesario que ingreses nuevamente. 
                Si tienes dudas, completa el formulario de contacto o bien envíanos un email a info@example.com. ¡Muchas gracias!
                `
            }
            break;

        default: 
            language = {
                messageOk1: 'Your personal data was successfully modified!',
                messageOk2: 'The email with the verification code was sent successfully! Copy it and paste it in the corresponding box.',
                messageOk3: 'The changes you have made to your profile data have been correct!',
                messageError: `We're sorry. At this time our servers are offline.
                Try it in a few minutes. If this message persists, send us an email to 'info@example.com' and
                We will contact you shortly. Thank you very much!`,
                messageWarning1: `The entered email is registered, but disabled.
                Enter a different one or contact us through the contact form, or
                sending us a message to 'info@example.com' and we will resolve it as soon as possible. Thank you very much!
                `,
                messageWarning2: `The entered email is registered, but pending
                confirm. Please enter by 'Enter' and the system will guide you. Thank you very much!
                `,
                messageWarning3: `The email is correctly registered. if you don't remember
                your password, please start the password recovery process. Thank you very much!
                `,
                messageWarning4: `The verification code entered is not correct. please copy and paste it
                again. If the error persists, contact us and we will resolve it as soon as possible. You can
                use the contact form or send us an email to 'info@example.com'. Thank you very much!
                `,
                messageWarning5: `Your email is registered, but your username was disabled. By
                Please send us a message and we will resolve it as soon as possible. You can use the contact form, or
                by sending us an email to 'info@example.com'. Thank you very much!
                `,
                messageWarning6: `Your email is registered, but you have pending confirmation.
                To recover your password you must continue with the confirmation process. Once finished,
                you can recover your password. You must look for the mail that we sent you during it. If you still have doubts,
                send us a message by completing the contact form, or an email to 'info@example.com', and
                we will solve it soon. Thank you very much!
                `,
                messageWarning7: `Sorry, your account was disabled during the process. Please send us a message and
                We will resolve shortly. You can use the contact form, or send us an email to
                'info@example.com'. Thank you very much!
                `,
                messageWarning8: `The verification code you entered does not match the one we sent you. please come back to
                check the email, copy it and paste it again. If the problem persists send us a message and
                We will resolve shortly. You can use the contact form, or an email to 'info@example.com'.
                Thank you very much!
                `,
                messageWarning9: `We're sorry. The email account entered is not registered. please start
                the registration process. We will wait for you. Thank you very much!
                `,
                messageWarning10: `Your account is partially registered, being necessary to continue with the confirmation. We will guide you!
                `,
                messageWarning11: `We're sorry. Your account was disabled. Please contact us and we will resolve it as soon as possible.
                You can use the contact form, or by sending an email to 'info@example.com'. Thank you very much!
                `,
                messageWarning12: `We're sorry. The password entered does not belong to your user. Please try again. if you don't remember
                your password, you can start the recovery process. Thank you very much!
                `,
                messageWarning13: `We're sorry. The secure session time has expired. You need to login again.
                If you have questions, fill out the contact form or send us an email to info@example.com. Thank you very much!
                `
            }
            break;
    }
    return language;
}

//...we export the translator...
module.exports = {
    translator
}