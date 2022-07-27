import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

//...we import the css style file...
import './user_register_info_view.component.css';

//...we import the translator...
import { translator } from './user_register_info_view.translator';

//...we import the "react-bootstrap-icons" elements...
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { CircleFill } from 'react-bootstrap-icons';


//...component...
const UserRegisterInfoView = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    return (
        <Fragment>
            <div className='user_register_info_view-base'>
                <div className='my-container'>
                    <div className='user_register_info_view-container'>

                        <div className='user_register_info_view-container-detailblock'>
                            <h4 className='user_register_info_view-container-detailblock-title'>{translator(siteLanguage).title1}</h4>
                            <span className='user_register_info_view-container-detailblock-item'><CircleFill className='user_register_info_view-container-detailblock-item-icon' />{translator(siteLanguage).item1_1}</span>
                            <span className='user_register_info_view-container-detailblock-item'><CircleFill className='user_register_info_view-container-detailblock-item-icon' />{translator(siteLanguage).item1_2}</span>
                        </div>
                        <div className='user_register_info_view-container-detailblock'>
                            <h4 className='user_register_info_view-container-detailblock-title'>{translator(siteLanguage).title2}</h4>
                            <span className='user_register_info_view-container-detailblock-item'><CircleFill className='user_register_info_view-container-detailblock-item-icon' />{translator(siteLanguage).item2_1}</span>
                            <span className='user_register_info_view-container-detailblock-item'><CircleFill className='user_register_info_view-container-detailblock-item-icon' />{translator(siteLanguage).item2_2}</span>
                            <span className='user_register_info_view-container-detailblock-item'><CircleFill className='user_register_info_view-container-detailblock-item-icon' />{translator(siteLanguage).item2_3}</span>
                            <span className='user_register_info_view-container-detailblock-item'><CircleFill className='user_register_info_view-container-detailblock-item-icon' />{translator(siteLanguage).item2_4}</span>
                            <span className='user_register_info_view-container-detailblock-item'><CircleFill className='user_register_info_view-container-detailblock-item-icon' />{translator(siteLanguage).item2_5}</span>
                        </div>
                        <div className='user_register_info_view-container-socialblock'>
                            <h4>{translator(siteLanguage).title3}</h4>
                            <Link to="#" className="user_register_info_view-container-socialblock-item"><Instagram className="user_register_info_view-container-socialblock-item-icon" /></Link>
                            <Link to="#" className="user_register_info_view-container-socialblock-item"><Facebook className="user_register_info_view-container-socialblock-item-icon" /></Link>
                            <Link to="#" className="user_register_info_view-container-socialblock-item"><Twitter className="user_register_info_view-container-socialblock-item-icon" /></Link>
                            <Link to="#" className="user_register_info_view-container-socialblock-item"><Youtube className="user_register_info_view-container-socialblock-item-icon" /></Link>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the component "view"...
export default UserRegisterInfoView;