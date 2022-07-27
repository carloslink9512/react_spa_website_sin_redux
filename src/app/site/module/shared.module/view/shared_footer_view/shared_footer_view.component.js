import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

//...we import the css style file...
import './shared_footer_view.component.css';

//...component...
const SharedFooterView = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    switch (true) {
        case (siteLanguage === 'es'):
            
            return (
                <Fragment>
                    <div className='shared_footer_view-base'>
                        <div className='my-container'>
                            <div className='shared_footer_view-container'>
                                <div className='shared_footer_view-container-box'>
                                    <h5 className='shared_footer_view-container-box-title'>Acerca de Example</h5>
                                    <p className='shared_footer_view-container-box-item'>
                                        <Link to='/about' className='shared_footer_view-container-box-item-link'>Acerca</Link>
                                    </p>
                                    <p className='shared_footer_view-container-box-item'>
                                        <Link to='/tc' className='shared_footer_view-container-box-item-link'>Términos y condiciones de uso</Link>
                                    </p>
                                    <p className='shared_footer_view-container-box-item'>
                                        <Link to='/politics' className='shared_footer_view-container-box-item-link'>Políticas de privacidad sobre los datos</Link>
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )

        default:
            return (
                <Fragment>                    
                    <div className='shared_footer_view-base'>
                        <div className='my-container'>
                            <div className='shared_footer_view-container'>
                                <div className='shared_footer_view-container-box'>
                                    <h5 className='shared_footer_view-container-box-title'>About example.com</h5>
                                    <p className='shared_footer_view-container-box-item'>
                                        <Link to='/about' className='shared_footer_view-container-box-item-link'>About Example</Link>
                                    </p>
                                    <p className='shared_footer_view-container-box-item'>
                                        <Link to='/tc' className='shared_footer_view-container-box-item-link'>Terms and conditions of use</Link>
                                    </p>
                                    <p className='shared_footer_view-container-box-item'>
                                        <Link to='/politics' className='shared_footer_view-container-box-item-link'>Data privacy policies</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
    }
}

//...we export the component "view"...
export default SharedFooterView;