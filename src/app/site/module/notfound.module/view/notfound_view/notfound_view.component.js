import React, { Fragment, useState } from "react";

//...we import the css style file...
import './notfound_view.component.css';

//...we import the translator...
import { translator } from './notfound_view.translator';

//...componente...
const NotFoundView = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    return (
        <Fragment>
            <div className='notfound_view-base my-container'>
                <p className='notfound_view-item-up'>{translator(siteLanguage).message_up}</p>
                <p className='notfound_view-item-down'>{translator(siteLanguage).message_down}</p>
            </div>
        </Fragment>
    )
}

//...we export the "view" component...
export default NotFoundView;