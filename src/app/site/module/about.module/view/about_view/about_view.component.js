import React, { Fragment, useState } from 'react';

//...we import the css style file...
import './about_view.component.css';

//...we import the translator...
import { translator } from './about_view.translator';

//...component...
const AboutView = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    return (
        <Fragment>
            <div className='my-container'>
                <div className='about_view-base'>
                    <div className='about_view-container'>
                        <div className='about_view-titleblock'>
                            <div className='about_view-titleblock-text'>{translator(siteLanguage).title}</div>
                        </div>
                        <div>
                            <div className='about_view-container-subtitleblock'>
                                <p className='about_view-container-subtitleblock-text'>PUNTO 1</p>
                            </div>
                            <div className='about_view-container-bodyblock'>
                                <p className='about_view-container-bodyblock-row'>
                                    Is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
                                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='about_view-container-subtitleblock'>
                                <p className='about_view-container-subtitleblock-text'>PUNTO 2</p>
                            </div>
                            <div className='about_view-container-bodyblock'>
                                <p className='about_view-container-bodyblock-row'>
                                    Is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
                                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='about_view-container-subtitleblock'>
                                <p className='about_view-container-subtitleblock-text'>PUNTO 3</p>
                            </div>
                            <div className='about_view-container-bodyblock'>
                                <p className='about_view-container-bodyblock-row'>
                                    Is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
                                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='about_view-container-subtitleblock'>
                                <p className='about_view-container-subtitleblock-text'>PUNTO 4</p>
                            </div>
                            <div className='about_view-container-bodyblock'>
                                <p className='about_view-container-bodyblock-row'>
                                    Is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
                                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the "view" component...
export default AboutView;