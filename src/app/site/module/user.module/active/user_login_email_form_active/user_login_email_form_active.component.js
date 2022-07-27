import React, { Fragment, useState, useRef } from 'react';

//...we import the css style file...
import './user_login_email_form_active.component.css';

//...we import the "react-bootstrap" elements...
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

//...we import the function...
import { translator } from './user_login_email_form_active.translator';

//...we import the message system...
import UserSpinnerMessageView from '../../message/view/user_spinner_message_view/user_spinner_message_view.component';
import UserServerMessageView from '../../message/view/user_server_message_view/user_server_message_view.component';

//...component...
const UserLoginEmailFormActive = (props) => {

    //...props...
    const setUserName = props.setUserName;
    const setUserLastname = props.setUserLastname;
    const setEmail = props.setEmail;
    const setOptionSelect = props.setOptionSelect;  
    
    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [generalMessage, setGeneralMessage] = useState('');
    const [message, setMessage] = useState({
        emailMessage: ''
    });
    const [dataUserLoginEmailForm, setDataUserLoginEmailForm] = useState({
        email: ''
    });

    //...references to clean from the form...
    const referenceEmail = useRef(null);

    //...event handler...
    const handleInputChange = (event) => {
        setDataUserLoginEmailForm({
            ...dataUserLoginEmailForm,
            [event.target.name]: event.target.value
        });
    };

    //..................................
    //...we control the data for shipping...
    const dataControl = (event) => {

        event.preventDefault();

        switch (true) {
            case (dataUserLoginEmailForm.email.trim() === ''):
                setMessage({
                    emailMessage: translator(siteLanguage).message_email
                });
                referenceEmail.current.focus();
                break;

            default:
                //...correct data...
                let objData = {
                    email: dataUserLoginEmailForm.email.trim()
                };

                sendDataToServer(objData);
        }
    }

    //...we prepare the sending of data...
    const sendDataToServer = (objData) => {

        setGeneralMessage(
            <div className='user_login_email_form_active-generalmessage'>
                <UserSpinnerMessageView />
            </div>
        );

        const sendReceived = async (objData) => {

            //...we prepare the url...
            const url = 'http://localhost:20101/user_login_email';

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

            //...
            if (jsResponse.code === 'USER0109'){
                setUserName(jsResponse.data.name);
                setUserLastname(jsResponse.data.lastname);
                setEmail(objData.email);
                setOptionSelect('op_login_pass');
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
                className='user_login_email_form_active-base'
                onSubmit={dataControl}
                >
                <div className='user_login_email_active-titleblock'>
                    <h4 className='user_login_email_active-titleblock-title'>{translator(siteLanguage).title}</h4>
                </div>
                <Row className='g-2 user_login_email_form_active-row'>
                    <Col md>
                        <Form.Control
                            type='email' 
                            name='email'
                            placeholder={translator(siteLanguage).form_email}
                            className='user_login_email_form_active-controltext'
                            onChange={handleInputChange}
                            ref={referenceEmail}
                            />
                        <Form.Text className='user_login_email_form_active-messageform'>{message.emailMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_login_email_form_active-row'>
                    <Form.Text>{generalMessage}</Form.Text>
                </Row>
                <Button
                    type='submit'
                    id='user_login_email_form_active-btn'
                    >
                        {translator(siteLanguage).form_btn}
                </Button>
            </Form>
        </Fragment>
    )
}

//...we export the component "active"...
export default UserLoginEmailFormActive;