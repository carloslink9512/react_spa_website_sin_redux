import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';

//...we import the css style file...
import './app.manager.css';

//...we import the translator
import { translator } from './app.translator';

//...we import the "screen" component...
import HomeScreen from '../site/module/home.module/screen/home_screen/home_screen.component';
import AboutScreen from '../site/module/about.module/screen/about_screen/about_screen.component';
import TcScreen from '../site/module/tc.module/screen/tc_screen/tc_screen.component';
import PoliticsScreen from '../site/module/politics.module/screen/politics_screen/politics_screen.component';
import NotFoundScreen from '../site/module/notfound.module/screen/notfound_screen/notfound_screen.component';
import ContactScreen from '../site/module/contact.module/screen/contact_screen/contact_screen.component';
import ProductScreen from '../site/module/product.module/screen/product_screen/product_screen.component';
import ProductDetailScreen from '../site/module/product.module/screen/product_detail_screen/product_detail_screen.component';
import UserScreen from '../site/module/user.module/screen/user_screen/user_screen.component';
import UserRegisterScreen from '../site/module/user.module/screen/user_register_screen/user_register_screen.component';
import UserRecoveryScreen from '../site/module/user.module/screen/user_recovery_screen/user_recovery_screen.component';
import UserLoginScreen from '../site/module/user.module/screen/user_login_screen/user_login_screen.component';
import UserDataScreen from '../site/module/user.module/screen/user_data_screen/user_data_screen.component';

//...we import the "view" component...
import SharedFooterView from '../site/module/shared.module/view/shared_footer_view/shared_footer_view.component';
import SharedFooterBottomView from '../site/module/shared.module/view/shared_footer_bottom_view/shared_footer_bottom_view.component';

//...component...
const AppManager = () => {

    //...states...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [login, setLogin] = useState(false);

    //...estados para datos personales...
    const [userName, setUserName] = useState('');
    const [userLastname, setUserLastname] = useState('');
    const [userNewsletter, setUserNewsletter] = useState(false);
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState(undefined);
    const [userToken, setUserToken] = useState('');

    //...
    useEffect(() => {
        const setLanguage = async () => {
            let codeLanguage = window.navigator.userLanguage || window.navigator.language;
            let language = await codeLanguage.substring(0, 2);
            localStorage.setItem('siteLanguage', language);
        };
        setLanguage();
    }, []);

    useEffect(() => {

        //...we create the cookies...
        if (userId !== undefined){
            createCookies(userId, userName, userLastname, userToken, userNewsletter);
            setLogin(true);
        }
        
        readCookies(userId);
        
    }, [userId]);

    useEffect(() => {
        modifyCookies(userName, userLastname, userNewsletter);
    }, [userName, userLastname, userNewsletter]);

    //..................................................
    //...modify cookies...
    const modifyCookies = (userName, userLastname, userNewsletter) => {
        const cookie = new Cookies();
        //...es una sobreescritura...
        //...user name cookie...
        cookie.set('userName', userName, {
            secure: false,
            httpOnly: false,
            sameSite: 'strict'
        });

        //...user lastname cookie...
        cookie.set('userLastname', userLastname, {
            secure: false,
            httpOnly: false,
            sameSite: 'strict'
        });

        //...user newsletter cookie...
        cookie.set('userNewsletter', userNewsletter, {
            secure: false,
            httpOnly: false,
            sameSite: 'strict'
        });
    }

    //...read cookies...
    const readCookies = () => {
        const cookie = new Cookies();

        //...user id cookie...
        setUserId(cookie.get('userId'));

        //...user name cookie...
        setUserName(cookie.get('userName'));

        //...user lastname cookie...
        setUserLastname(cookie.get('userLastname'));

        //...user token cookie...
        setUserToken(cookie.get('userToken'));

        //...user newsletter cookie...
        setUserNewsletter(cookie.get('userNewsletter'));
    }


    //...create cookies....
    const createCookies = (userId, userName, userLastname, userToken) => {
        const cookie = new Cookies();

        //...user id cookie...
        cookie.set('userId', userId, {
            secure: false,
            httpOnly: false,
            sameSite: 'strict'
        });

        //...user name cookie...
        cookie.set('userName', userName, {
            secure: false,
            httpOnly: false,
            sameSite: 'strict'
        });

        //...user lastname cookie...
        cookie.set('userLastname', userLastname, {
            secure: false,
            httpOnly: false,
            sameSite: 'strict'
        });

        //...user token cookie...
        cookie.set('userToken', userToken, {
            secure: false,
            httpOnly: false,
            sameSite: 'strict'
        });

        //...user newsletter cookie...
        cookie.set('userNewsletter', userNewsletter, {
            secure: false,
            httpOnly: false,
            sameSite: 'strict'
        });
    }

    const deleteCookies = () => {
        const cookie = new Cookies();

        //...user id cookie...
        cookie.remove('userId');

        //...user name cookie...
        cookie.remove('userName');

        //...user lastname cookie...
        cookie.remove('userLastname');

        //...user token cookie...
        cookie.remove('userToken');

        //...user newsletter cookie...
        cookie.remove('userNewsletter');

        //...actualizar userId
        setLogin(false);
        setUserId(undefined);
    }

    //...render...
    return (
        <Fragment>
            <BrowserRouter>
                <Navbar expand='lg' className='app_manager-nav my-container'>
                    <div id='app_manager-menuadmin'>
                        <div>
                            <Nav>
                                <NavLink to='/' className='app_manager-nav-logo'>Example</NavLink>
                            </Nav>
                        </div>
                    </div>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className='app_manager-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav' className='app_manager-nav'>
                        <Nav className='me-auto'>
                            <NavLink to='/' className='app_manager-link'>{translator(siteLanguage).home}</NavLink>
                            <NavLink to='/contact' className='app_manager-link'>{translator(siteLanguage).contact}</NavLink>
                            <NavLink to='/product' className='app_manager-link'>{translator(siteLanguage).product}</NavLink>
                        </Nav>
                        {login === false &&
                            <Nav>
                                <NavLink to='/user/register' className='app_manager-link'>{translator(siteLanguage).register}</NavLink>
                                <NavLink to='/user/login' className='app_manager-link'>{translator(siteLanguage).login}</NavLink>
                            </Nav>
                        }
                        {login === true &&
                            <Nav>
                                <NavLink to='/user/mydata' className='app_manager-link'>{userName} {userLastname}</NavLink>
                                <NavLink 
                                    to='/' 
                                    className='app_manager-link'
                                    onClick={deleteCookies}
                                    >{translator(siteLanguage).exit}</NavLink>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route index element={<HomeScreen />} />
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='home' element={<HomeScreen />} />
                    <Route path='contact' element={<ContactScreen />} />
                    <Route path='product' element={<ProductScreen />} />
                    <Route path='product/:id' element={<ProductDetailScreen />} />
                    <Route path='user' element={<UserScreen />} >
                        <Route path='register' element={<UserRegisterScreen />} />
                        <Route path='recovery' element={<UserRecoveryScreen />} />
                        {login === false &&
                            <Route path='login' element={
                                <UserLoginScreen 
                                    setUserName={setUserName} 
                                    setUserLastname={setUserLastname} 
                                    setEmail={setEmail} 
                                    userName={userName} 
                                    userLastname={userLastname} 
                                    email={email} 
                                    setUserId={setUserId}
                                    setUserNewsletter={setUserNewsletter}
                                    setUserToken={setUserToken}
                                    />}
                                />
                        }
                        {(login === true) &&
                            <Route 
                                path='mydata'
                                element={
                                    <UserDataScreen 
                                        userName={userName}
                                        userLastname={userLastname}
                                        userId={userId}
                                        userToken={userToken}
                                        setUserName={setUserName}
                                        setUserLastname={setUserLastname}
                                        userNewsletter={userNewsletter}
                                        setUserNewsletter={setUserNewsletter}
                                    />
                                }    
                            />
                        }
                    </Route>
                    <Route path='about' element={<AboutScreen />} />
                    <Route path='tc' element={<TcScreen />} />
                    <Route path='politics' element={<PoliticsScreen />} />
                    <Route path='*' element={<NotFoundScreen />} />
                </Routes>
                <SharedFooterView />
                <SharedFooterBottomView />
            </BrowserRouter>
        </Fragment>
    )
}


//...we export the "manager" component...
export default AppManager;