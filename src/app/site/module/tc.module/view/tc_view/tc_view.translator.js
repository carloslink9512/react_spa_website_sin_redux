export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Términos y condiciones de uso de este sitio'
            };
            break;

        default:
            language = {
                title: 'Terms and conditions of use of this site'
            };
    }

    return language;
}