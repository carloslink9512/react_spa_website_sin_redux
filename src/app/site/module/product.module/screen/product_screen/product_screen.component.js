import React, { Fragment } from 'react';

//...we import the "view" component...
import ProductView from '../../view/product_view/product_view.component';

//...component...
const ProductScreen = () => {

    //...render...
    return (
        <Fragment>
            <ProductView />
        </Fragment>
    )
}

//...we export the "screen" component...
export default ProductScreen;