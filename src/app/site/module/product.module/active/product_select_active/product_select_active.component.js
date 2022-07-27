import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';

//...we import the css style file...
import './product_select_active.component.css';

//...we import the "react-bootstrap" elements...
import { Button } from 'react-bootstrap';

//...we import the "react-bootstrap-icons" elements...
import { ChevronRight } from 'react-bootstrap-icons';

//...we import the translator...
import { translator } from './product_select_active.translator';

//...component...
const ProductSelectActive = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [optionSelect, setOptionSelect] = useState('product1');

    //...
    const clockHandleClick = () => {
        setOptionSelect('product1');
    }

    const calculatorHandleClick = () => {
        setOptionSelect('product2');
    }

    const diaryHandleClick = () => {
        setOptionSelect('product3');
    }

    //...render...
    return (
        <Fragment>
            <div className="product_select_active-base">
                <div className="product_select_active-container">
                    
                    <div className="product_select_active-container-leftblock">
                        <p className='product_select_active-container-leftblock-item'>
                            <button
                                className='product_select_active-container-leftblock-item-btn'
                                onClick={clockHandleClick}
                                >
                                Example Product 1
                            </button>
                        </p>

                        <hr />

                        <p className='product_select_active-container-leftblock-item'>
                            <button
                                className='product_select_active-container-leftblock-item-btn'
                                onClick={calculatorHandleClick}
                                >
                                Example Product 2
                            </button>
                        </p>

                        <hr />

                        <p className='product_select_active-container-leftblock-item'>
                            <button
                                className='product_select_active-container-leftblock-item-btn'
                                onClick={diaryHandleClick}
                                >
                                Example Product 3
                            </button>
                        </p>
                        <hr />
                    </div>


                    {optionSelect === 'product1' &&
                        <div className='product_select_active-container-rightblock'>
                            <div className='product_select_active-container-rightblock-left'>
                                <p className='product_select_active-container-rightblock-left-top'>Example</p>
                                <h4 className='product_select_active-container-rightblock-left-title'>Product 1</h4>
                                <p className='product_select_active-container-rightblock-left-detail'>
                                    Contrary to popular belief, 
                                    Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical 
                                    Latin literature from 45 BC, making it over 2000 
                                    years old. Richard McClintock,</p>
                                <Link to="/product/product1">
                                    <Button
                                        bsPrefix='product_select_active-container-rightblock-left-btn'
                                        >
                                        {translator(siteLanguage).btn_detail}
                                        <ChevronRight className='product_select_active-container-rightblock-left-btn-icon'/>
                                    </Button>
                                </Link>
                            </div>
                            <div className='product_select_active-container-rightblock-right'>
                                Product 1 image
                            </div>
                        </div>
                    }

                    {optionSelect === 'product2' &&
                        <div className='product_select_active-container-rightblock'>
                            <div className='product_select_active-container-rightblock-left'>
                                <p className='product_select_active-container-rightblock-left-top'>Example</p>
                                <h4 className='product_select_active-container-rightblock-left-title'>Product 2</h4>
                                <p className='product_select_active-container-rightblock-left-detail'>
                                    Contrary to popular belief, 
                                    Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical 
                                    Latin literature from 45 BC, making it over 2000 
                                    years old. Richard McClintock,</p>
                                <Link to="/product/product2">
                                    <Button
                                        bsPrefix='product_select_active-container-rightblock-left-btn'
                                        >
                                        {translator(siteLanguage).btn_detail}
                                        <ChevronRight className='product_select_active-container-rightblock-left-btn-icon'/>
                                    </Button>
                                </Link>
                            </div>
                            <div className='product_select_active-container-rightblock-right'>
                                Product 2 image
                            </div>
                        </div>
                    }

                    {optionSelect === 'product3' &&
                        <div className='product_select_active-container-rightblock'>
                            <div className='product_select_active-container-rightblock-left'>
                                <p className='product_select_active-container-rightblock-left-top'>Example</p>
                                <h4 className='product_select_active-container-rightblock-left-title'>Product 3</h4>
                                <p className='product_select_active-container-rightblock-left-detail'>
                                    Contrary to popular belief, 
                                    Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical 
                                    Latin literature from 45 BC, making it over 2000 
                                    years old. Richard McClintock,</p>
                                <Link to="/product/product3">
                                    <Button
                                        bsPrefix='product_select_active-container-rightblock-left-btn'
                                        >
                                        {translator(siteLanguage).btn_detail}
                                        <ChevronRight className='product_select_active-container-rightblock-left-btn-icon'/>
                                    </Button>
                                </Link>
                            </div>
                            <div className='product_select_active-container-rightblock-right'>
                                Product 3 image
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Fragment>
    )
}

//...we export the "active" component...
export default ProductSelectActive;