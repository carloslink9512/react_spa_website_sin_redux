import React, { Fragment } from 'react';

//...we import the "view" component...
import TcView from '../../view/tc_view/tc_view.component';

//...component...
const TcScreen = () => {

    //...render...
    return (
        <Fragment>
            <TcView />
        </Fragment>
    )
}

//...we export the "screen" component...
export default TcScreen;