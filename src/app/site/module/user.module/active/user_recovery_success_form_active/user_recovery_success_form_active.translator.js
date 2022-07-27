const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title: 'Recuperación confirmada',
                subtitle: `La recuperación de tu contraseña fue exitosa. 
                Ingresa nuevamente a través de "Ingresar". 
                ¡Muchas gracias!`,
                congratulations: '¡Felicitaciones!',
                form_btn: 'Ingresar'
            }
            break;

        default: 
            language = {
                title: 'Confirmed recovery',
                subtitle: `Your password recovery was successful.
                Enter again through "Login".
                Thank you very much!`,
                congratulations: 'Congratulations!',
                form_btn: 'Get into'
            }
            break;
    }
    return language;
}

//...we export the translator...
module.exports = {
    translator
}