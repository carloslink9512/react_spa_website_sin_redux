import React, { Fragment, useState } from 'react';

//...we import the css style file...
import './shared_banner_carousel_view.component.css';

//...we import the "react-bootstrap" elements...
import { Carousel, Image } from 'react-bootstrap';
import imagen1 from '../../../../../../assets/images/img1.png';
import imagen2 from '../../../../../../assets/images/img2.jpg';
import imagen3 from '../../../../../../assets/images/img3.jpg';

//...we import the translator...
import { translator } from './shared_banner_carousel_view.translator';

//...component...
const SharedBannerCarouselView = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));

    //...render...
    return (
        <Fragment>
            <div className='my-container'>
                <div className='shared_banner_carousel_view-base'>
                    <Carousel variant="dark" fade>
                        <Carousel.Item>
                            <Image src={imagen1} className='shared_banner_carousel_view-img' />
                            <Carousel.Caption className='shared_banner_carousel_view_back'>
                                <h2 className='shared_banner_carousel_view-carousel-brand'>Example</h2>
                                <h6 className='shared_banner_carousel_view-carousel-model'>IMAGE1</h6>
                                <p className='shared_banner_carousel_view-carousel-detail'>{translator(siteLanguage).legend}</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={imagen2} className='shared_banner_carousel_view-img' />
                            <Carousel.Caption className='shared_banner_carousel_view-back'>
                                <h2 className='shared_banner_carousel_view-carousel-brand'>Example</h2>
                                <h6 className='shared_banner_carousel_view-carousel-model'>IMAGE2</h6>
                                <p className='shared_banner_carousel_view-carousel-detail'>{translator(siteLanguage).legend}</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={imagen3} className='shared_banner_carousel_view-img' />
                            <Carousel.Caption className='shared_banner_carousel_view-back'>
                                <h2 className='shared_banner_carousel_view-carousel-brand'>Example</h2>
                                <h6 className='shared_banner_carousel_view-carousel-model'>IMAGE3</h6>
                                <p className='shared_banner_carousel_view-carousel-detail'>{translator(siteLanguage).legend}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </Fragment>
    )
}


//...we export the "view" component...
export default SharedBannerCarouselView;