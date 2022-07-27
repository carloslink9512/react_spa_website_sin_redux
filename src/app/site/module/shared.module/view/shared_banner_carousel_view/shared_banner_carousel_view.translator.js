export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                legend: 'Tu nueva experiencia digital'
            };
            break;

        default:
            language = {
                legend: 'Your new digital experience'
            };
    }

    return language;
}