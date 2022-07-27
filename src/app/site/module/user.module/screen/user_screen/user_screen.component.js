import React, { Fragment } from 'react';
import { Outlet} from 'react-router-dom';

//...component...
const UserScreen = () => {

    //...render...
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}

//...we export the "screen" component...
export default UserScreen;