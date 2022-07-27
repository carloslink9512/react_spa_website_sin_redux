import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

//...we import the css style file...
import './user_confirm_success_form_active.component.css';

//...we import the "react-bootstrap" elements...
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//...we import the translator...
import { translator } from './user_confirm_success_form_active.translator';

//...component...
const UserConfirmSuccessFormActive = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    return (
        <Fragment>
            <Form className='user_confirm_success_form_active-base'>
                <div className='user_confirm_success_form_active-titleblock'>
                    <h4 className='user_confirm_success_form_active-titleblock-title'>{translator(siteLanguage).title}</h4>
                    <p className='user_confirm_success_form_active-titleblock-detail'>{translator(siteLanguage).title_legend1}</p>
                </div>
                
                <Link to="/login">
                    <Button
                        type='submit'
                        id='user_confirm_success_form_active-btn'
                        >
                        {translator(siteLanguage).btn}
                    </Button>
                </Link>
                
            </Form>
        </Fragment>
    )
}

//...we export the component "active"...
export default UserConfirmSuccessFormActive;