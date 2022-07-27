export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Contáctanos',

                form_name: 'Nombre',
                form_lastname: 'Apellido',
                form_email: 'Correo electrónico',
                form_phone: 'Teléfono',
                form_commentary: 'Ingresa tu comentario',
                form_accept: 'Acepto los términos y condiciones de uso de este sitio.',
                form_btn: 'Enviar comentario',

                form_name_message: 'Por favor ingresa tu nombre.',
                form_lastname_message: 'Por favor ingresa tu apellido.',
                form_email_message: 'Por favor ingresa tu correo electrónico de contacto.',
                form_commentary_message: 'Por favor ingresa tu comentario.',
                form_accept_message: 'Debes leer y aceptar los términos y condiciones de uso de este sitio.'
            };
            break;

        default:
            language = {
                title: 'Contact us',

                form_name: 'Name',
                form_lastname: 'Lastname',
                form_email: 'Email',
                form_phone: 'Phone',
                form_commentary: 'Enter your comment',
                form_accept: 'I accept the terms and conditions of use of this site.',
                form_btn: 'Send comment',

                form_name_message: 'Please enter your name.',
                form_lastname_message: 'Please enter your last name.',
                form_email_message: 'Please enter your contact email.',
                form_commentary_message: 'Please enter your comment.',
                form_accept_message: 'You must read and accept the terms and conditions of use of this site.'
            };
    }

    return language;
}