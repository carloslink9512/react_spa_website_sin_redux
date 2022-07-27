import React, { Fragment } from 'react';

//...we import the "view" component...
import SharedBannerCarouselView from '../../../shared.module/view/shared_banner_carousel_view/shared_banner_carousel_view.component';
import ProductCardView from '../../../product.module/view/product_card_view/product_card_view.component';

//...component...
const HomeScreen = () => {

    //...render...
    return (
        <Fragment>
            <SharedBannerCarouselView />
            <ProductCardView />
        </Fragment>
    )
}

//...we export the "screen" component...
export default HomeScreen;