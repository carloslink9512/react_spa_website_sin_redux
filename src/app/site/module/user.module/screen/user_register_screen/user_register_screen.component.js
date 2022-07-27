import React, { Fragment } from 'react';

//...we import the "view" component...
import UserRegisterView from '../../view/user_register_view/user_register_view.component';

//...component...
const UserRegisterScreen = () => {

    //...render...
    return (
        <Fragment>
            <UserRegisterView />
        </Fragment>
    )
}

//...we export the "screen" component...
export default UserRegisterScreen;