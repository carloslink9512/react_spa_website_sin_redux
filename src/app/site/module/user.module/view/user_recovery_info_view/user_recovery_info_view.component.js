import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

//...we import the css style file...
import './user_recovery_info_view.component.css';

//...we import the translator...
import { translator } from './user_recovery_info_view.translator';

//...we import the "react-bootstrap-icons" elements...
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { CircleFill } from 'react-bootstrap-icons';

//...component...
const UserRecoveryInfoView = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    
    //...render...
    return (
        <Fragment>
            <div className='user_recovery_info_view-base'>
                <div className='my-container'>
                    <div className='user_recovery_info_view-container'>

                        <div className='user_recovery_info_view-container-detailBlock'>
                            <h4 className='user_recovery_info_view-container-detailBlock-title'>{translator(siteLanguage).title1}</h4>
                            <span className='user_recovery_info_view-container-detailBlock-item'><CircleFill className='user_recovery_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item1_1}</span>
                            <span className='user_recovery_info_view-container-detailBlock-item'><CircleFill className='user_recovery_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item1_2}</span>
                            
                        </div>
                        
                        <div className='user_recovery_info_view-container-detailBlock'>
                            <h4 className='user_recovery_info_view-container-detailBlock-title'>{translator(siteLanguage).title2}</h4>
                            <span className='user_recovery_info_view-container-detailBlock-item'><CircleFill className='user_recovery_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item2_1}</span>
                            <span className='user_recovery_info_view-container-detailBlock-item'><CircleFill className='user_recovery_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item2_2}</span>
                            <span className='user_recovery_info_view-container-detailBlock-item'><CircleFill className='user_recovery_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item2_3}</span>
                            <span className='user_recovery_info_view-container-detailBlock-item'><CircleFill className='user_recovery_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item2_4}</span>
                            <span className='user_recovery_info_view-container-detailBlock-item'><CircleFill className='user_recovery_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item2_5}</span>
                        </div>
                        <div className='user_recovery_info_view-container-socialBlock'>
                            <h4>{translator(siteLanguage).title3}</h4>
                            <Link to="#" className="user_recovery_info_view-container-socialBlock-item"><Instagram className="user_recovery_info_view-container-socialBlock-item-icon" /></Link>
                            <Link to="#" className="user_recovery_info_view-container-socialBlock-item"><Facebook className="user_recovery_info_view-container-socialBlock-item-icon" /></Link>
                            <Link to="#" className="user_recovery_info_view-container-socialBlock-item"><Twitter className="user_recovery_info_view-container-socialBlock-item-icon" /></Link>
                            <Link to="#" className="user_recovery_info_view-container-socialBlock-item"><Youtube className="user_recovery_info_view-container-socialBlock-item-icon" /></Link>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the component "view"...
export default UserRecoveryInfoView;