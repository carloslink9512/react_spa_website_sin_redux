import React, { Fragment, useState, useRef } from 'react';

//...we import the css style file...
import './user_recovery_form_active.component.css';


//...we import the "react-bootstrap" elements...
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';


//...we import the component "view"...
import { translator } from './user_recovery_form_active.translator';


//...we import the message system...
import UserSpinnerMessageView from '../../message/view/user_spinner_message_view/user_spinner_message_view.component';
import UserServerMessageView from '../../message/view/user_server_message_view/user_server_message_view.component';

//...component...
const UserRecoveryFormActive = (props) => {

    //...props...
    const setRecoveryEmail = props.setRecoveryEmail;
    const setUserName = props.setUserName;
    const setOptionSelect = props.setOptionSelect;
    
    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [generalMessage, setGeneralMessage] = useState('');
    const [message, setMessage] = useState({
        messageEmail: '',
        messageAccept: ''
    });
    const [dataUserRecoveryForm, setDataUserRecoveryForm] = useState({
        email: '',
        accept: false
    });
    const [dataCheckbox, setDataCheckbox] = useState({check: false});

    //...we create the references to clean the form...
    const referenceEmail = useRef(null);
    const referenceCheckbox = useRef(null);

    //...event handler...
    const handleInputChange = (event) => {
        setDataUserRecoveryForm({
            ...dataUserRecoveryForm,
            [event.target.name]: event.target.value
        });
    }
    const handleChangeAccept = () => {
        if (dataCheckbox.check === false){
            setDataCheckbox({check: true});
        }
        else {
            setDataCheckbox({check: false});
        }
    }

    //....................................................
    //...data control...
    const dataControl = (event) => {

        event.preventDefault();
        
        switch (true) {
            case (dataUserRecoveryForm.email.trim() === ''):
                setMessage({
                    messageEmail: translator(siteLanguage).message_email
                });
                referenceEmail.current.focus();
                break;

            case (dataCheckbox.check === false):
                setMessage({
                    messageAccept: translator(siteLanguage).message_check
                });
                referenceCheckbox.current.focus();
                break;

            default: 
                //...correct data...
                let objData = {
                    email: dataUserRecoveryForm.email.trim(),
                    accept: true,
                    language: siteLanguage
                }

                sendDataToServer(objData);
        }
    }

    //...we prepare the sending of data...
    const sendDataToServer = (objData) => {

        setGeneralMessage(
            <div className='user_recovery_form_active-spinner'>
                <UserSpinnerMessageView />
            </div>
        );

        //...
        const sendReceived = async (objData) => {
            //...we create the url...
            const url = 'http://localhost:20101/user_recovery';

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

            //...we analyze the return of the server...
            if (jsResponse.code === 'USER0075'){

                //...we clean the form...
                referenceEmail.current.value = '';
                referenceCheckbox.current.checked = false;

                setRecoveryEmail(dataUserRecoveryForm.email.trim());

                //...we crean the states...
                setDataUserRecoveryForm({
                    email: '',
                    accept: false
                });
                setDataCheckbox({check: false});

                //...we clean the messages...
                setMessage({
                    messageEmail: '',
                    messageAccept: ''
                });

                setUserName(jsResponse.name);
                setOptionSelect('op_rec_conf')
            }
            else {
                setGeneralMessage(<UserServerMessageView messageCode={jsResponse.code} />);
            }
        }

        //...
        sendReceived(objData);
    }

    //...render...
    return (
        <Fragment>
            <Form 
                className='user_recovery_form_active-base'
                onSubmit={dataControl}
                >
                <div className='user_recovery_active-titleBlock'>
                    <h4 className='user_recovery_active-titleBlock-title'>{translator(siteLanguage).title}</h4>
                    <p className='user_recovery_active-titleBlock-detail'>{translator(siteLanguage).subtitle}</p>
                </div>
                <Row className='g-2 user_recovery_form_active-row'>
                    <Col md>
                        <Form.Control
                            type='email'
                            name='email'
                            placeholder={translator(siteLanguage).form_email}
                            className='user_recovery_form_active-controltext'
                            ref={referenceEmail}
                            onChange={handleInputChange}
                            />
                        <Form.Text className='user_recovery_form_active-message'>{message.messageEmail}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_recovery_form_active-row'>
                    <Col>
                        <Form.Check 
                            type='checkbox'
                            className='user_recovery_form_active-check'
                            id='user_recovery_form_active-check'
                            name='gridcheck'
                            label={translator(siteLanguage).form_check_label}
                            ref={referenceCheckbox}
                            onChange={handleChangeAccept}
                        />
                        <Form.Text className='user_recovery_form_active-message'>{message.messageAccept}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_recovery_form_active-row'>
                    <Form.Text>{generalMessage}</Form.Text>
                </Row>
                <Button
                    type='submit'
                    id='user_recovery_form_active-btn'
                    >
                    {translator(siteLanguage).form_button}
                </Button>
            </Form>
        </Fragment>
    )
}

//...we export the component "active"...
export default UserRecoveryFormActive;