//...translator...
export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                legend: 'Si no recuerdas la contraseña, puedes recuperarla ingresando',
                here: '¡aquí!'
            };
            break;

        default:
            language = {
                legend: "If you don't remember your password, you can retrieve it by entering",
                here: 'here!'
            };
    }

    return language;
}