import React, { Fragment } from 'react';

//...we import the css style file...
import './user_spinner_message_view.component.css';

//...we import the "react-bootstrap" elements...
import Spinner from 'react-bootstrap/Spinner';

//...component...
const UserSpinnerMessageView = () => {

    //...render...
    return (
        <Fragment>
            <div className='user_message_spinner_view-base'>
                <Spinner animation='grow' size='sm' className='user_message_spinner_view-element' />
                <Spinner animation='grow' size='sm' className='user_message_spinner_view-element' />
                <Spinner animation='grow' size='sm' className='user_message_spinner_view-element' />
                <Spinner animation='grow' size='sm' className='user_message_spinner_view-element' />
            </div>
        </Fragment>
    )
}

//...we export the "view" component...
export default UserSpinnerMessageView;