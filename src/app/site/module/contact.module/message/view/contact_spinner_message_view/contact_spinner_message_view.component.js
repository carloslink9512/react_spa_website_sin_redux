import React, { Fragment } from 'react';

//...importamos el archivo de estilos css...
import './contact_spinner_message_view.component.css';

//...importamos elementos de "react-bootstrap"...
import Spinner from 'react-bootstrap/Spinner';

//...componente...
function ContactSpinnerMessageView(){

    //...render...
    return (
        <Fragment>
            <div className='contact_spinner_message_view-base'>
                <Spinner animation="grow" variant="primary" size="sm" className='contact_spinner_message_view-element' />
                <Spinner animation="grow" variant="primary" size="sm" className='contact_spinner_message_view-element' />
                <Spinner animation="grow" variant="primary" size="sm" className='contact_spinner_message_view-element' />
                <Spinner animation="grow" variant="primary" size="sm" className='contact_spinner_message_view-element' />
            </div>
        </Fragment>
    )
}

//...exportamos el componente "view"...
export default ContactSpinnerMessageView;