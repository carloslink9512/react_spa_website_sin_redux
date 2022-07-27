export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Acerca de Example'
            };
            break;

        default:
            language = {
                title: 'About Example'
            }
    }

    return language;
}