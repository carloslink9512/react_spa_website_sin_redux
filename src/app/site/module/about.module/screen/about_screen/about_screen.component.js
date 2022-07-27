import React, { Fragment } from 'react';

//...we import the "view" component...
import AboutView from '../../view/about_view/about_view.component';

//...component...
const AboutScreen = () => {

    //...render...
    return (
        <Fragment>
            <AboutView />
        </Fragment>
    )
}

//...we export the "screen" component...
export default AboutScreen;