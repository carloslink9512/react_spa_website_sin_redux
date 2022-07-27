export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                caract1: 'Característica 1',
                caract2: 'Característica 2',
                modality: 'Modalidad de pago',
                modalityfree: 'Modalidad gratis (incluye publicidad)',
                detail: 'Detalle',
                sponsor: 'Auspiciado por:',
            };
            break;

        default:
            language = {
                caract1: 'Feature 1',
                caract2: 'Feature 2',
                modality: 'Payment method',
                modalityfree: 'Free mode (includes advertising)',
                detail: 'Detail',
                sponsor: 'Sponsored by:',
            };
    }

    return language;
}