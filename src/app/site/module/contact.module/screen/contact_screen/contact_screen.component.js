import React, { Fragment } from 'react';

//...we import the "view" component...
import ContactView from '../../view/contact_view/contact_view.component';

//...component...
const ContactScreen = () => {

    //...render...
    return (
        <Fragment>
            <ContactView />
        </Fragment>
    )
}

//...we export the "screen" component...
export default ContactScreen;