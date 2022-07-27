export const translator = (lang) => {
    let language;
    
    switch (true) {
        case (lang === 'es'):
            language = {
                title1: 'Experiencia de usuario Example',
                title2: 'En Example podrás',
                title3: 'Síguenos en',
                item1: 'Tus comentarios son fundamentales para nuestro desarrollo.',
                item2: 'Envíanos tus consultas, te responderemos a la brevedad.',
                item3: 'Frecuentemente agregaremos publicaciones referidas a la ciencia, tecnología, conocimiento y desarrollo.',
                item4: 'Navega nuestros productos descargables Example. Trabajamos para darte y para darnos la mejor experiencia de usuario.',
                item5: '¿Programamos? Construyamos aplicaciones basados en el stack MERN + React Native. Apliquemos Javascript.',
            }
            break;

        default:
            language = {
                title1: 'Example user experience',
                title2: 'In Example you can',
                title3: 'Follow us on',
                item1: 'Your feedback is fundamental to our development.',
                item2: 'Send us your queries, we will respond as soon as possible.',
                item3: 'We will frequently add publications related to science, technology, knowledge and development.',
                item4: 'Browse our Example downloadable products. We work to give you and to give us the best user experience.',
                item5: "Do we program? Let's build applications based on the MERN + React Native stack. Let's apply Javascript.",
            }
    }

    return language;
}