import React, { Fragment } from 'react';

//...we import the "view" component...
import UserDataView from '../../view/user_data_view/user_data_view.component';

//...component...
const UserDataScreen = (props) => {

    //...props...
    const userName = props.userName;
    const userLastname = props.userLastname;
    const userId = props.userId;
    const userToken = props.userToken;
    const setUserName = props.setUserName;
    const setUserLastname = props.setUserLastname;
    const userNewsletter = props.userNewsletter;
    const setUserNewsletter = props.setUserNewsletter;


    //...render...
    return (
        <Fragment>
            <UserDataView
                userName={userName}
                userLastname={userLastname}
                userId={userId}
                userToken={userToken}
                setUserName={setUserName}
                setUserLastname={setUserLastname}
                userNewsletter={userNewsletter}
                setUserNewsletter={setUserNewsletter}
            />
        </Fragment>
    )
}

//...we export the "screen" component...
export default UserDataScreen;