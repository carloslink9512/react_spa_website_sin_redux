import React, { Fragment } from 'react';

//...we import the "view" component...
import ProductDetailView from '../../view/product_detail_view/product_detail_view.component';

//...component...
const ProductDetailScreen = () => {

    //...render...
    return (
        <Fragment>
            <ProductDetailView />
        </Fragment>
    )
}

//...we export the "screen" component...
export default ProductDetailScreen;