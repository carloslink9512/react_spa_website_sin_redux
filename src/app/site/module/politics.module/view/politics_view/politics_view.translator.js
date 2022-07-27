export const translator = (lang) => {
    let language;

    switch (true){
        case (lang === 'es'):
            language = {
                title: 'Nuestras políticas de privacidad sobre datos'
            };
            break;

        default:
            language = {
                title: 'Our data privacy policies'
            };
    }
    return language;
}