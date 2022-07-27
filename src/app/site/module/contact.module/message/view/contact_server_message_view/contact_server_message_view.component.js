import React, { Fragment, useState } from 'react';

//...we import the css style file...
import './contact_server_message_view.component.css';

//...we import the "react-bootstrap" elements...
import Alert from 'react-bootstrap/Alert';

//...we import the translator...
import { translator } from './contact_server_message_view.translator';

//...component...
const ContactServerMessageView = (props) => {

    //...props...
    const messageCode = props.messageCode;

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    switch (true) {

        case (messageCode === 'CONT0017'):
            return (
                <Fragment>
                    <div className='contact_server_message_view-base'>
                        <MessageServerCompleted 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageOk1}
                        />
                    </div>
                </Fragment>
            )

        case (
            messageCode === 'CONT0001' ||
            messageCode === 'CONT0002' ||
            messageCode === 'CONT0003' ||
            messageCode === 'CONT0004' ||
            messageCode === 'CONT0005' ||
            messageCode === 'CONT0006' ||
            messageCode === 'CONT0007' ||
            messageCode === 'CONT0008' ||
            messageCode === 'CONT0009' ||
            messageCode === 'CONT0010' ||
            messageCode === 'CONT0011' ):
            return (
                <Fragment>
                    <div className='contact_server_message_view-base'>
                        <MessageServerError 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageError1}
                        />
                    </div>
                </Fragment>
            )
    }
}

//...auxiliary components...
const MessageServerCompleted = (props) => {

    //...props...
    const messageCode = props.messageCode;
    const messageText = props.messageText;

    //...render...
    return (
        <Fragment>
            <Alert variant='success'>
                {messageText} ({messageCode})
            </Alert>
        </Fragment>
    )
}

const MessageServerError = (props) => {
    
    //...props...
    const messageCode = props.messageCode;
    const messageText = props.messageText;

    //...render...
    return (
        <Fragment>
            <Alert variant='danger'>
                {messageText} ({messageCode})
            </Alert>
        </Fragment>
    )
}

//...we export the component "view"...
export default ContactServerMessageView;