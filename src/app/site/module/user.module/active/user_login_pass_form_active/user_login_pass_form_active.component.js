import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

//...we import the css style file...
import './user_login_pass_form_active.component.css';

//...we import the "react-bootstrap" elements...
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

//...we import the function...
import { translator } from './user_login_pass_form_active.translator';
import encryptor from '../../other/crypto/encryptor';

//...we import the message system...
import UserSpinnerMessageView from '../../message/view/user_spinner_message_view/user_spinner_message_view.component';
import UserServerMessageView from '../../message/view/user_server_message_view/user_server_message_view.component';

//...component...
const UserLoginPassFormActive = (props) => {

    //...props...
    const userName = props.userName;
    const userLastname = props.userLastname;
    const email = props.email;
    const setUserId = props.setUserId;
    const setUserToken = props.setUserToken;
    const setUserNewsletter = props.setUserNewsletter;

    //...state...
    const [dataUserLoginPassForm, setDataUserLoginPassForm] = useState({
        email: email,
        pass: ''
    });

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [generalMessage, setGeneralMessage] = useState('');
    const [message, setMessage] = useState({
        passMessage: ''
    });

    //...other...
    let navigate = useNavigate();

    //...references to clean from the form...
    const referencePass = useRef(null);

    //...event handler...
    const handleInputChange = (event) => {
        setDataUserLoginPassForm({
            ...dataUserLoginPassForm,
            [event.target.name]: event.target.value
        });
    }

    //..................................
    //...we control the data for shipping...
    const dataControl = (event) => {

        event.preventDefault();

        switch (true) {
            case (dataUserLoginPassForm.pass.trim() === ''):
                setMessage({
                    passMessage: translator(siteLanguage).message_pass
                });
                referencePass.current.focus();
                break;

            default:
                //...correct data...
                let objData = {
                    email: dataUserLoginPassForm.email.trim(),
                    encryptedPass: encryptor(dataUserLoginPassForm.pass.trim())
                }

                sendDataToServer(objData);
        }
    }

    //...we prepare the sending of data...
    const sendDataToServer = (objData) => {

        setGeneralMessage(
            <div className='user_login_pass_form_active-generalmessage'>
                <UserSpinnerMessageView />
            </div>
        );

        const sendReceived = async (objData) => {

            //...we prepare the url...
            const url = 'http://localhost:20101/user_login_pass';

            //...we create the config object...
            const config = {
                method: 'POST',
                body: JSON.stringify(objData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            };

            //...we send and receive data from the server...
            let res = await fetch(url, config);
            let jsonResponse = await res.json();
            let jsResponse = await JSON.parse(jsonResponse);

            //...We analyze the response from the server...
            if (jsResponse.code === 'USER0120'){

                //...we clean the form...
                referencePass.current.value = '';

                //...we clean the form...
                setDataUserLoginPassForm({
                    email: '',
                    pass: ''
                });

                //...we clean the message...
                setMessage({
                    passMessage: ''
                });

                setUserId(jsResponse.data.id);
                setUserToken(jsResponse.token);
                setUserNewsletter(jsResponse.data.newsletter);
                navigate('/');

            }
            else {
                setGeneralMessage(<UserServerMessageView messageCode={jsResponse.code} />);
            }
        }

        //...we call the function...
        sendReceived(objData);
    }

    //...render...
    return (
        <Fragment>
            <Form
                className='user_login_pass_form_active-base'
                onSubmit={dataControl}
                >
                <div className='user_login_pass_active-titleblock'>
                    <h4 className='user_login_pass_active-titleblock-title'>{translator(siteLanguage).title}</h4>
                </div>
                <div className='user_login_pass_active-subtitleblock'>
                    <p className='user_login_pass_active-subtitleblock-subtitle1'>{translator(siteLanguage).hello} <b>{userName} {userLastname}</b>, {translator(siteLanguage).welcome}</p>
                    <p className='user_login_pass_active-subtitleblock-subtitle2'>{dataUserLoginPassForm.email}</p>
                </div>

                <Row className='g-2 user_login_pass_form_active-row'>
                    <Col md>
                        <Form.Control
                            type='password'
                            name='pass'
                            placeholder={translator(siteLanguage).form_pass}
                            className='user_login_pass_form_active-controltext'
                            onChange={handleInputChange}
                            ref={referencePass}
                            />
                        <Form.Text className='user_login_pass_form_active-messageForm'>{message.passMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_login_pass_form_active-row'>
                    <Form.Text>{generalMessage}</Form.Text>
                </Row>
                <Button
                    type='submit'
                    id='user_login_pass_form_active-btn'
                    >
                    {translator(siteLanguage).form_btn}
                </Button>
            </Form>
        </Fragment>
    )
}

//...we export the component "active"...
export default UserLoginPassFormActive;