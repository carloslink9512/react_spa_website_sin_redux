import React, { Fragment } from 'react';

//...we import the css style file...
import './product_view.component.css';

//...we import the "active" component...
import ProductSelectActive from '../../active/product_select_active/product_select_active.component';

//...component...
const ProductView = () => {

    //...render...
    return (
        <Fragment>
            <div className='product_view-base'>
                <div className='my-container'>
                    <div className='product_view-container'>
                        <div className='product_view-container-leftblock'>
                            <ProductSelectActive />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the "view" component...
export default ProductView;