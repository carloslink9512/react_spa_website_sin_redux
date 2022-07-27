export const translator = (lang) => {
    let language;

    switch (true){
        case (lang === 'es'):
            language = {
                home: 'Inicio',
                contact: 'Contacto',
                product: 'Productos',
                login: 'Ingresar',
                register: 'Regístrate',
                exit: 'Salir'
            }
            break;

        default:
            language = {
                home: 'Home',
                contact: 'Contact',
                product: 'Products',
                login: 'Login',
                register: 'Register',
                exit: 'Exit'
            }
    }
    return language;
}