export const translator = (lang) => {
    let language;

    switch (true){
        case (lang === 'es'):
            language = {
                btn_detail: 'Detalle'
            };
            break;

        default:
            language = {
                btn_detail: 'Detail'
            }
    }

    return language;
}