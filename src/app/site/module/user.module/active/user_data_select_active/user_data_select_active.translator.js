export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Datos personales',
                form_name: 'Nombre',
                form_lastname: 'Apellido',
                form_label_check: 'He leido y acepto los términos y condiciones de uso de este sitio',
                form_edit_btn: 'Editar',
                form_accept_btn: 'Aceptar',
                form_cancel_btn: 'Cancelar',

                form_placeholder_name: 'Ingresa tu nombre',
                form_placeholder_lastname: 'Ingresa tu apellido',
                
                message_name: 'Por favor ingresa tu nombre.',
                message_lastname: 'Por favor ingresa tu apellido.',
                message_accept: 'Debes leer y aceptar los términos y condiciones de uso de este sitio.',

                radio1: 'NO deseo recibir publicaciones en mi correo electrónico registrado.',
                radio2: 'SI deseo recibir publicaciones en mi correo electrónico registrado.',
            };
            break;

        default:
            language = {
                title: 'Personal information',
                form_name: 'Name',
                form_lastname: 'Lastname',
                form_label_check: 'I have read and accept the terms and conditions of use of this site',
                form_edit_btn: 'Edit',
                form_accept_btn: 'Accept',
                form_cancel_btn: 'Cancel',

                form_placeholder_name: 'Enter your name',
                form_placeholder_lastname: 'Enter your last name',

                message_name: 'Please enter your name.',
                message_lastname: 'Please enter your last name.',
                message_accept: 'You must read and accept the terms and conditions of use of this site.',

                radio1: 'I do NOT want to receive publications in my registered email.',
                radio2: 'YES I want to receive publications in my registered email.',
            }
    }

    return language;
}