import React, { Fragment, useState } from 'react';

//...we import the css style file...
import './user_server_message_view.component.css';

//...we import the translator...
import { translator } from './user_server_message_view.translator';

//...we import the "react-bootstrap" elements...
import Alert from 'react-bootstrap/Alert';

//...component...
const UserServerMessageView = (props) => {

    //...props...
    const messageCode = props.messageCode;

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    switch (true) {

        case (messageCode === ''):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerCompleted 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageOk1}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (messageCode === 'USER0063'):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerCompleted 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageOk2}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (messageCode === 'USER0135'):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerCompleted 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageOk3}
                        />
                    </div>
                </Fragment>
            )

        case (
            messageCode === 'USER0001' ||
            messageCode === 'USER0002' ||
            messageCode === 'USER0003' ||
            messageCode === 'USER0004' ||
            messageCode === 'USER0008' ||
            messageCode === 'USER0009' ||
            messageCode === 'USER0010' ||
            messageCode === 'USER0011' ||
            messageCode === 'USER0012' ||
            messageCode === 'USER0013' ||
            messageCode === 'USER0014' ||
            messageCode === 'USER0015' ||
            messageCode === 'USER0016' ||
            messageCode === 'USER0017' ||
            messageCode === 'USER0018' ||
            messageCode === 'USER0030' ||
            messageCode === 'USER0031' ||
            messageCode === 'USER0032' ||
            messageCode === 'USER0033' ||
            messageCode === 'USER0037' ||
            messageCode === 'USER0038' ||
            messageCode === 'USER0039' ||
            messageCode === 'USER0040' ||
            messageCode === 'USER0041' ||
            messageCode === 'USER0042' ||
            messageCode === 'USER0043' ||
            messageCode === 'USER0044' ||
            messageCode === 'USER0054' ||
            messageCode === 'USER0055' ||
            messageCode === 'USER0058' ||
            messageCode === 'USER0059' ||
            messageCode === 'USER0060' ||
            messageCode === 'USER0061' ||
            messageCode === 'USER0062' ||
            messageCode === 'USER0064' ||
            messageCode === 'USER0065' ||
            messageCode === 'USER0066' ||
            messageCode === 'USER0068' ||
            messageCode === 'USER0072' ||
            messageCode === 'USER0073' ||
            messageCode === 'USER0074' ||
            messageCode === 'USER0076' ||
            messageCode === 'USER0077' ||
            messageCode === 'USER0078' ||
            messageCode === 'USER0079' ||
            messageCode === 'USER0080' ||
            messageCode === 'USER0084' ||
            messageCode === 'USER0085' ||
            messageCode === 'USER0086' ||
            messageCode === 'USER0087' ||
            messageCode === 'USER0089' ||
            messageCode === 'USER0090' ||
            messageCode === 'USER0091' ||
            messageCode === 'USER0092' ||
            messageCode === 'USER0093' ||
            messageCode === 'USER0103' ||
            messageCode === 'USER0104' ||
            messageCode === 'USER0106' ||
            messageCode === 'USER0110' ||
            messageCode === 'USER0111' ||
            messageCode === 'USER0115' ||
            messageCode === 'USER0121' ||
            messageCode === 'USER0124' ||
            messageCode === 'USER0125' ||
            messageCode === 'USER0126' ||
            messageCode === 'USER0127' ||
            messageCode === 'USER0128' ||
            messageCode === 'USER0130' ||
            messageCode === 'USER0131' ||
            messageCode === 'USER0132' ||
            messageCode === 'USER0133' ||
            messageCode === 'USER0134' ):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerError 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageError}
                        />
                    </div>
                </Fragment>
            )

        case (
            messageCode === 'USER0005' ||
            messageCode === 'USER0034' ||
            messageCode === 'USER0081' ):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning1}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (messageCode === 'USER0006'):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning2}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (messageCode === 'USER0036'):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning4}
                        />
                    </div>
                </Fragment>
            )

        //..
        case (messageCode === 'USER0007' || messageCode === 'USER0035' || messageCode === 'USER0057'):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning3}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (
            messageCode === 'USER0056' ||
            messageCode === 'USER0069' ||
            messageCode === 'USER0107' ||
            messageCode === 'USER0112' ||
            messageCode === 'USER0129' ):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning5}
                        />
                    </div>
                </Fragment>
            )

         //...
         case (
            messageCode === 'USER0070' ||
            messageCode === 'USER0108' ||
            messageCode === 'USER0113' ):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning6}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (messageCode === 'USER0082'):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning8}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (
            messageCode === 'USER0067' ||
            messageCode === 'USER0097' ||
            messageCode === 'USER0105' ||
            messageCode === 'USER0114' ):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning9}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (
            messageCode === 'USER0096' ||
            messageCode === 'USER0102' ):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning10}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (messageCode === 'USER0101'):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning11}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (
            messageCode === 'USER0105' ||
            messageCode === 'USER0116' ):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning12}
                        />
                    </div>
                </Fragment>
            )

        //...
        case (
            messageCode === 'USER0122' ||
            messageCode === 'USER0123' ):
            return (
                <Fragment>
                    <div className='user_server_message_view-base'>
                        <MessageServerWarning 
                            messageCode={messageCode}
                            messageText={translator(siteLanguage).messageWarning13}
                        />
                    </div>
                </Fragment>
            )
    }
}


//...auxiliary components...
const MessageServerWarning = (props) => {

    //...props...
    const messageCode = props.messageCode;
    const messageText = props.messageText;

    //...render...
    return (
        <Fragment>
            <Alert variant='warning'>
                {messageText} ({messageCode})
            </Alert>
        </Fragment>
    )
}

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
export default UserServerMessageView;