import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

//...we import the css style file...
import './user_recovery_success_form_active.component.css';

//...we import the "react-bootstrap" elements...
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//...we import the component "view"...
import { translator } from './user_recovery_success_form_active.translator';

//...component...
const UserRecoverySuccessFormActive = (props) => {

    //...props...
    const userName = props.userName;

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    return (
        <Fragment>
            <Form className='user_recovery_success_form_active-base'>
                <div className='user_recovery_success_form_active-titleBlock'>
                    <h4 className='user_recovery_success_form_active-titleBlock-title'>{translator(siteLanguage).title}</h4>
                    <p className='user_recovery_success_form_active-titleBlock-detail'>{translator(siteLanguage).congratulations} <span><b>{userName}</b>.</span> {translator(siteLanguage).subtitle}</p>
                </div>
                
                <Link to='/login'>
                    <Button
                        type='submit'
                        id='user_recovery_success_form_active-btn'
                        >
                        {translator(siteLanguage).form_btn}
                    </Button>
                </Link>
            </Form>
        </Fragment>
    )
}

//...we export the component "active"...
export default UserRecoverySuccessFormActive;