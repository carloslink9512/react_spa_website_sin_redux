import React, { Fragment } from 'react' ;

//...we import the component "view"...
import UserRecoveryView from '../../view/user_recovery_view/user_recovery_view.component';

//...component...
const UserRecoveryScreen = () => {

    //...render...
    return (
        <Fragment>
            <UserRecoveryView />
        </Fragment>
    )
}

//...we export the "screen" component...
export default UserRecoveryScreen;