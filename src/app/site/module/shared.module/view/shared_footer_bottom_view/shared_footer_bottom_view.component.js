import React, { Fragment, useState } from 'react';

//...we import the css style file...
import './shared_footer_bottom_view.component.css';

//...component...
const SharedFooterBottomView = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    return (
        <Fragment>
            <div className='shared_footer_bottom_view-base'>
                <div className='my-container'>
                    <div className='shared_footer_bottom_view-container'>
                        <div className='shared_footer_bottom_view-container-leftbox'>
                            <span className='shared_footer_bottom_view-container-leftbox-item'>item solitario</span>
                            <span className='shared_footer_bottom_view-container-leftbox-item'>item derecho 1</span>
                            <span className='shared_footer_bottom_view-container-leftbox-item'>item derecho 2</span>
                            <span className='shared_footer_bottom_view-container-leftbox-item'>item derecho 3</span>
                            <span className='shared_footer_bottom_view-container-leftbox-item'>item derecho 4</span>
                            <span className='shared_footer_bottom_view-container-leftbox-item'>item derecho 5</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the component "view"...
export default SharedFooterBottomView;