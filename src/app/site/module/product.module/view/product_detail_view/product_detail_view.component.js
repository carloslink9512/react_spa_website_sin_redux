import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

//...we import the "react-bootstrap-icons" elements...
import { CheckCircleFill } from 'react-bootstrap-icons';
import { XCircleFill } from 'react-bootstrap-icons';

//...we import the css style file...
import './product_detail_view.component.css';

//...we import the translator...
import { translator } from './product_detail_view.translator';

//...component...
const ProductDetailView = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...parameters...
    const { id } = useParams();

    //...render...
    switch (true) {
        case (id === 'product1'):
            return (
                <Fragment>
                    <div className='product_detail_view-base'>
                        <div className='my-container'>

                            <div className='product_detail_view-container'>
                                <div className='product_detail_view-container-fixedbanner'>
                                    <div className='product_detail_view-container-fixedbanner-leftblock'>

                                        <p className='product_detail_view-container-fixedbanner-leftblock-top'>Example</p>
                                        <h4 className='product_detail_view-container-fixedbanner-leftblock-title'>PRODUCT 1</h4>
                                        <p className='product_detail_view-container-fixedbanner-leftblock-detail'>
                                            Contrarys to popular belief, 
                                            Lorem Ipsum is not simply random text. 
                                            It has roots in a piece of classical 
                                            Latin literature from 45 BC, making it over 2000 
                                            years old. Richard McClintock,</p>

                                    </div>
                                    <div className='product_detail_view-container-fixedbanner-rightblock'>

                                    </div>
                                </div>
                            </div>

                            <div className='product_detail_view-detailcontainer'>
                                <div className='product_detail_view-detailcontainer-comparatorblock'>
                                    <p className='product_detail_view-detailcontainer-comparatorblock-title'>{translator(siteLanguage).detail}</p>

                                    <div className='product_detail_view-detailcontainer-comparatorblock-column'>
                                        <div className='product_detail_view-detailcontainer-comparatorblock-column-rowtitle'>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-leftitem'></span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem'>{translator(siteLanguage).modalityfree}</span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-rightitem'>{translator(siteLanguage).modality}</span>
                                        </div>

                                        <div className='product_detail_view-detailcontainer-comparatorblock-column-row'>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-leftitem'>{translator(siteLanguage).caract1}</span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-rightitem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                        </div>

                                        <div className='product_detail_view-detailcontainer-comparatorblock-column-row'>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-leftitem'>{translator(siteLanguage).caract2}</span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-rightitem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                        </div>
                                    </div>

                                </div>

                                <div className='product_detail_view-detailcontainer-sponsorblock'>
                                    <div className='product_detail_view-detailcontainer-sponsorblock-titleblock'>
                                        <span className='product_detail_view-detailcontainer-sponsorblock-titleblock-brand'>Example</span>
                                        <span className='product_detail_view-detailcontainer-sponsorblock-titleblock-model'>PRODUCT 1</span>
                                        <span className='product_detail_view-detailcontainer-sponsorblock-titleblock-detail'>{translator(siteLanguage).sponsor}</span>
                                    </div>
                                    <div className='product_detail_view-detailcontainer-sponsorblock-imgblock'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )

        case (id === 'product2'):
            return (
                <Fragment>
                    <div className='my-container'>
                        <div className='product_detail_view-base'>


                            <div className='product_detail_view-container'>
                                <div className='product_detail_view-container-fixedbanner'>
                                    <div className='product_detail_view-container-fixedbanner-leftblock'>

                                        <p className='product_detail_view-container-fixedbanner-leftblock-top'>Example</p>
                                        <h4 className='product_detail_view-container-fixedbanner-leftblock-title'>PRODUCT 2</h4>
                                        <p className='product_detail_view-container-fixedbanner-leftblock-detail'>
                                            Contrarys to popular belief, 
                                            Lorem Ipsum is not simply random text. 
                                            It has roots in a piece of classical 
                                            Latin literature from 45 BC, making it over 2000 
                                            years old. Richard McClintock,</p>

                                    </div>
                                    <div className='product_detail_view-container-fixedbanner-rightblock'>

                                    </div>
                                </div>
                            </div>

                            <div className='product_detail_view-detailcontainer'>
                                <div className='product_detail_view-detailcontainer-comparatorblock'>
                                    <p className='product_detail_view-detailcontainer-comparatorblock-title'>{translator(siteLanguage).detail}</p>

                                    <div className='product_detail_view-detailcontainer-comparatorblock-column'>
                                        <div className='product_detail_view-detailcontainer-comparatorblock-column-rowtitle'>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-leftitem'></span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem'>{translator(siteLanguage).modalityfree}</span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-rightitem'>{translator(siteLanguage).modality}</span>
                                        </div>

                                        <div className='product_detail_view-detailcontainer-comparatorblock-column-row'>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-leftitem'>{translator(siteLanguage).caract1}</span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-rightitem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                        </div>

                                        <div className='product_detail_view-detailcontainer-comparatorblock-column-row'>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-leftitem'>{translator(siteLanguage).caract2}</span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-rightitem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                        </div>
                                    </div>

                                </div>

                                <div className='product_detail_view-detailcontainer-sponsorblock'>
                                    <div className='product_detail_view-detailcontainer-sponsorblock-titleblock'>
                                        <span className='product_detail_view-detailcontainer-sponsorblock-titleblock-brand'>Example</span>
                                        <span className='product_detail_view-detailcontainer-sponsorblock-titleblock-model'>PRODUCT 2</span>    
                                        <span className='product_detail_view-detailcontainer-sponsorblock-titleblock-detail'>{translator(siteLanguage).sponsor}</span>
                                    </div>
                                    <div className='product_detail_view-detailcontainer-sponsorblock-imgblock'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )

        case (id === 'product3'):
            return (
                <Fragment>
                    <div className='my-container'>
                        <div className='product_detail_view-base'>


                            <div className='product_detail_view-container'>
                                <div className='product_detail_view-container-fixedbanner'>
                                    <div className='product_detail_view-container-fixedbanner-leftblock'>

                                        <p className='product_detail_view-container-fixedbanner-leftblock-top'>Example</p>
                                        <h4 className='product_detail_view-container-fixedbanner-leftblock-title'>PRODUCT 3</h4>
                                        <p className='product_detail_view-container-fixedbanner-leftblock-detail'>
                                            Contrarys to popular belief, 
                                            Lorem Ipsum is not simply random text. 
                                            It has roots in a piece of classical 
                                            Latin literature from 45 BC, making it over 2000 
                                            years old. Richard McClintock,</p>

                                    </div>
                                    <div className='product_detail_view-container-fixedbanner-rightblock'>

                                    </div>
                                </div>
                            </div>

                            <div className='product_detail_view-detailcontainer'>
                                <div className='product_detail_view-detailcontainer-comparatorblock'>
                                    <p className='product_detail_view-detailcontainer-comparatorblock-title'>{translator(siteLanguage).detail}</p>

                                    <div className='product_detail_view-detailcontainer-comparatorblock-column'>
                                        <div className='product_detail_view-detailcontainer-comparatorblock-column-rowtitle'>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-leftitem'></span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem'>{translator(siteLanguage).modalityfree}</span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-rightitem'>{translator(siteLanguage).modality}</span>
                                        </div>

                                        <div className='product_detail_view-detailcontainer-comparatorblock-column-row'>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-leftitem'>{translator(siteLanguage).caract1}</span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-rightitem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                        </div>

                                        <div className='product_detail_view-detailcontainer-comparatorblock-column-row'>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-leftitem'>{translator(siteLanguage).caract2}</span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                            <span className='product_detail_view-detailcontainer-comparatorblock-column-row-rightitem'><CheckCircleFill className='product_detail_view-detailcontainer-comparatorblock-column-row-centeritem-yesicon' /></span>
                                        </div>
                                    </div>

                                </div>

                                <div className='product_detail_view-detailcontainer-sponsorblock'>
                                    <div className='product_detail_view-detailcontainer-sponsorblock-titleblock'>
                                        <span className='product_detail_view-detailcontainer-sponsorblock-titleblock-brand'>Example</span>
                                        <span className='product_detail_view-detailcontainer-sponsorblock-titleblock-model'>PRODUCT 3</span>
                                        <span className='product_detail_view-detailcontainer-sponsorblock-titleblock-detail'>{translator(siteLanguage).sponsor}</span>
                                    </div>
                                    <div className='product_detail_view-detailcontainer-sponsorblock-imgblock'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
    }
}

//...we export the "view" component...
export default ProductDetailView;