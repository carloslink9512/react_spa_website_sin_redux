export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                message_up: '¡Lo sentimos. La dirección solicitada no existe!',
                message_down: 'Inténtalo nuevamente utilizando el menú superior.'
            };
            break;

        default:
            language = {
                message_up: "We're sorry. The requested address does not exist!",
                message_down: 'Please try again using the top menu.'
            };
    }

    return language;
}