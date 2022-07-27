const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Tu cuenta fue creada correctamente',
                title_legend1: '¡Felicitaciones! Bienvenidos a Example.',
                btn: 'Ir al ingreso'
            }
            break;

        default: 
            language = {
                title: 'Your account was created successfully',
                title_legend1: 'Congratulations! Welcome to Example.',
                btn: 'Go to login'
            }
            break;
    }
    return language;
}

//...we export the translator...
module.exports = {
    translator
}