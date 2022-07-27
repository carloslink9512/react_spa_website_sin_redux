import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

//...we import the css style file...
import './user_login_view.component.css';

//...we import the translator...
import { translator } from './user_login_view.translator';

//...we import the "view" component...
import UserLoginInfoView from '../user_login_info_view/user_login_info_view.component';

//...we import the "active" component...
import UserLoginEmailFormActive from '../../active/user_login_email_form_active/user_login_email_form_active.component';
import UserLoginPassFormActive from '../../active/user_login_pass_form_active/user_login_pass_form_active.component';

//...component...
const UserLoginView = (props) => {

    //...prosp...
    const userName = props.userName;
    const setUserName = props.setUserName;
    const userLastname = props.userLastname;
    const setUserLastname = props.setUserLastname;
    const email = props.email;
    const setEmail = props.setEmail;
    const setUserId = props.setUserId;
    const setUserToken = props.setUserToken;
    const setUserNewsletter = props.setUserNewsletter;

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [optionSelect, setOptionSelect] = useState('op_login_email');

    //...render...
    return (
        <Fragment>
            <div className='user_login_view-base'>
                <div className='my-container'>
                    <div className='user_login_view-container'>
                        <div className='user_login_view-container-leftblock'>
                            <div>
                                {optionSelect === 'op_login_email' &&
                                    <UserLoginEmailFormActive
                                        setOptionSelect={setOptionSelect}
                                        setUserName={setUserName}
                                        setUserLastname={setUserLastname}
                                        setEmail={setEmail}
                                    />
                                }
                                {optionSelect === 'op_login_pass' &&
                                    <UserLoginPassFormActive 
                                        userName={userName}
                                        userLastname={userLastname}
                                        email={email}
                                        setUserId={setUserId}
                                        setUserToken={setUserToken}
                                        setUserNewsletter={setUserNewsletter}
                                    />
                                }
                            </div>
                            <div className='user_login_view-container-leftblock-recovery'>
                                <span className='user_login_view-container-leftblock-recovery-text'>{translator(siteLanguage).legend} <Link to="/user/recovery">{translator(siteLanguage).here}</Link></span>
                            </div>
                        </div>
                        <div className='user_login_view-container-rightblock'>
                            <UserLoginInfoView />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the "view" component...
export default UserLoginView;