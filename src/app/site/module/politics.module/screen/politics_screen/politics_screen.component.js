import React, { Fragment } from 'react';

//...we import the "view" component...
import PoliticsView from '../../view/politics_view/politics_view.component';

//...component...
const PoliticsScreen = () => {

    //...render...
    return (
        <Fragment>
            <PoliticsView />
        </Fragment>
    )
}

//...we export the "screen" component...
export default PoliticsScreen;