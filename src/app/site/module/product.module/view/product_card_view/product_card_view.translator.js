//...translator...
export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                category: 'Categoría',
                title: 'Este es el título',
            };
            break;

        default:
            language = {
                category: 'Category',
                title: 'This is the title',
            };
    }

    return language;
}