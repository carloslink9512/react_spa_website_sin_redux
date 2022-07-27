import React, { Fragment, useState } from 'react';

//...we import the "view" component...
import UserLoginView from '../../view/user_login_view/user_login_view.component';

//...component...
const UserLoginScreen = (props) => {

    //...props...
    const userName = props.userName;
    const setUserName = props.setUserName;
    const userLastname = props.userLastname;
    const setUserLastname = props.setUserLastname;
    const email = props.email;
    const setEmail = props.setEmail;
    const setUserId = props.setUserId;
    const setUserToken = props.setUserToken;
    const setUserNewsletter = props.setUserNewsletter;

    //...render...
    return (
        <Fragment>
            <UserLoginView
                userName={userName}
                setUserName={setUserName}
                userLastname={userLastname}
                setUserLastname={setUserLastname}
                email={email}
                setEmail={setEmail}
                setUserId={setUserId}
                setUserToken={setUserToken}
                setUserNewsletter={setUserNewsletter}
            />
        </Fragment>
    )
}

//...we export the "screen" component...
export default UserLoginScreen;