import React, { Fragment } from "react";

//...we import the "view" component...
import NotFoundView from "../../view/notfound_view/notfound_view.component";

//...component...
const NotFoundScreen = () => {

    //...render...
    return (
        <Fragment>
            <NotFoundView />
        </Fragment>
    )
}

//...we export the "screen" component...
export default NotFoundScreen;