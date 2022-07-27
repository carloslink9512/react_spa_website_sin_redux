import React, { Fragment } from 'react';

//...we import the css style file...
import './contact_view.component.css';

//...we import the "view" component...
import ContactInfoView from '../contact_info_view/contact_info_view.component';

//...we import the "active" component...
import ContactFormActive from '../../active/contact_form_active/contact_form_active.component';

//...component...
const ContactView = () => {

    //...render...
    return (
        <Fragment>
            <div className='contact_view-base'>
                <div className='my-container'>
                    <div className='contact_view-container'>
                        <div className='contact_view-container-leftblock'>
                            <ContactFormActive />
                        </div>
                        <div className='contact_view-container-rightblock'>
                            <ContactInfoView />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the "view" component...
export default ContactView;