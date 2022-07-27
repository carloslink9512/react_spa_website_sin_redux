export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                messageOk1: 'Hola, hemos recibido tu mensaje. Te responderemos a la brevedad. ¡Muchas gracias!',
                messageError1: 'Lo sentimos. En este momento nuestros servidores estan fuera de línea. Espera unos minutos y vuelve a intentarlo, o envíanos tu comentario a info@example.com y te responderemos a la brevedad. ¡Muchas gracias!'
            };
            break;

        default:
            language = {
                messageOk1: 'Hello, we have received your message. We will respond to you shortly. Thank you very much!',
                messageError1: "We're sorry. At this time our servers are offline. Please wait a few minutes and try again, or send us your comment to info@example.com and we will get back to you as soon as possible. Thank you very much!"
            };
    }

    return language;
}