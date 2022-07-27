import { Fragment, useState } from 'react';
import { Truck, Cart4, Building } from 'react-bootstrap-icons';

//...we import the css style file...
import './product_card_view.component.css';

//...we import the translator...
import { translator } from './product_card_view.translator';

//...component...
const ProductCardView = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    return (
        <Fragment>
            <div className='product_card_view-base'>
                <div className='my-container'>
                    <div className='product_card_view-container'>
                        <div className='product_card_view-container-box'>
                            <div className='product_card_view-container-box-categoryblock'>
                                <span className='product_card_view-container-box-categoryblock-title'>{translator(siteLanguage).category}</span>
                            </div>
                            <div className='product_card_view-container-box-titleblock'>
                                <span className='product_card_view-container-box-titleblock-title'>{translator(siteLanguage).title}</span>
                            </div>
                            <div className='product_card_view-container-box-imgblock'>
                                <Truck className='product_card_view-container-box-imgblock-img' />
                            </div>
                            <div className='product_card_view-container-box-detailblock'>
                                <p className='product_card_view-container-box-detailblock-text'>
                                    Lorem Ipsum es simplemente el texto de relleno de las imprentas 
                                    y archivos de texto. Lorem Ipsum ha sido el texto de relleno 
                                    estándar de las industrias desde el año 1500, cuando un 
                                    impresor (N. del T. persona que se dedica a la imprenta) desconocido 
                                    usó una galería de textos y los mezcló de tal manera que logró hacer 
                                    un libro de textos especimen.
                                </p>
                            </div>
                            <hr className='product_card_view-container-box-footerline' />
                        </div>
                        
                        <div className='product_card_view-container-box'>
                            <div className='product_card_view-container-box-categoryblock'>
                                <span className='product_card_view-container-box-categoryblock-title'>{translator(siteLanguage).category}</span>
                            </div>
                            <div className='product_card_view-container-box-titleblock'>
                                <span className='product_card_view-container-box-titleblock-title'>{translator(siteLanguage).title}</span>
                            </div>
                            <div className='product_card_view-container-box-imgblock'>
                                <Cart4 className='product_card_view-container-box-imgblock-img' />
                            </div>
                            <div className='product_card_view-container-box-detailblock'>
                                <p className='product_card_view-container-box-detailblock-text'>
                                    Lorem Ipsum es simplemente el texto de relleno de las imprentas 
                                    y archivos de texto. Lorem Ipsum ha sido el texto de relleno 
                                    estándar de las industrias desde el año 1500, cuando un 
                                    impresor (N. del T. persona que se dedica a la imprenta) desconocido 
                                    usó una galería de textos y los mezcló de tal manera que logró hacer 
                                    un libro de textos especimen.
                                </p>
                            </div>
                            <hr className='product_card_view-container-box-footerline' />
                        </div>
                        <div className='product_card_view-container-box'>
                            <div className='product_card_view-container-box-categoryblock'>
                                <span className='product_card_view-container-box-categoryblock-title'>{translator(siteLanguage).category}</span>
                            </div>
                            <div className='product_card_view-container-box-titleblock'>
                                <span className='product_card_view-container-box-titleblock-title'>{translator(siteLanguage).title}</span>
                            </div>
                            <div className='product_card_view-container-box-imgblock'>
                                <Building className='product_card_view-container-box-imgblock-img' />
                            </div>
                            <div className='product_card_view-container-box-detailblock'>
                                <p className='product_card_view-container-box-detailblock-text'>
                                    Lorem Ipsum es simplemente el texto de relleno de las imprentas 
                                    y archivos de texto. Lorem Ipsum ha sido el texto de relleno 
                                    estándar de las industrias desde el año 1500, cuando un 
                                    impresor (N. del T. persona que se dedica a la imprenta) desconocido 
                                    usó una galería de textos y los mezcló de tal manera que logró hacer 
                                    un libro de textos especimen.
                                </p>
                            </div>
                            <hr className='product_card_view-container-box-footerline' />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the "view" component...
export default ProductCardView;