import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

//...importamos el archivo de estilos css...
import './contact_info_view.component.css';

//...importamos elementos "react-bootstrap-icons"...
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { CircleFill } from 'react-bootstrap-icons';

//...we import the translator...
import { translator } from './contact_info_view.translator';

//...componente...
const ContactInfoView = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    return (
        <Fragment>
            <div className='contact_info_view-base'>
                <div className='my-container'>
                    <div className='contact_info_view-container'>

                        <div className='contact_info_view-container-detailBlock'>
                            <h4 className='contact_info_view-container-detailBlock-title'>{translator(siteLanguage).title1}</h4>
                            <span className='contact_info_view-container-detailBlock-item'><CircleFill className='contact_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item1}</span>
                            <span className='contact_info_view-container-detailBlock-item'><CircleFill className='contact_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item2}</span>
                        </div>
                        <div className='contact_info_view-container-detailBlock'>
                            <h4 className='contact_info_view-container-detailBlock-title'>{translator(siteLanguage).title2}</h4>
                            <span className='contact_info_view-container-detailBlock-item'><CircleFill className='contact_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item3}</span>
                            <span className='contact_info_view-container-detailBlock-item'><CircleFill className='contact_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item4}</span>
                            <span className='contact_info_view-container-detailBlock-item'><CircleFill className='contact_info_view-container-detailBlock-item-icon' />{translator(siteLanguage).item5}</span>
                        </div>
                        <div className='contact_info_view-container-socialBlock'>
                            <h4 className='contact_info_view-container-socialBlock-title'>{translator(siteLanguage).title3}</h4>
                            <Link to="#" className="contact_info_view-container-socialBlock-item"><Instagram className="contact_info_view-container-socialBlock-item-icon" /></Link>
                            <Link to="#" className="contact_info_view-container-socialBlock-item"><Facebook className="contact_info_view-container-socialBlock-item-icon" /></Link>
                            <Link to="#" className="contact_info_view-container-socialBlock-item"><Twitter className="contact_info_view-container-socialBlock-item-icon" /></Link>
                            <Link to="#" className="contact_info_view-container-socialBlock-item"><Youtube className="contact_info_view-container-socialBlock-item-icon" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...exportamos el componente "view"...
export default ContactInfoView;