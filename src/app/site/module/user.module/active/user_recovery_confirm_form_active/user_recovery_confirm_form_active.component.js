import React, { Fragment, useState, useRef } from 'react';

//...we import the css style file...
import './user_recovery_confirm_form_active.component.css';

//...we import the "react-bootstrap" elements...
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

//...we import the component "view"...
import { translator } from './user_recovery_confirm_form_active.translator';

//...we import the message system...
import UserSpinnerMessageView from '../../message/view/user_spinner_message_view/user_spinner_message_view.component';
import UserServerMessageView from '../../message/view/user_server_message_view/user_server_message_view.component';

//...component...
const UserRecoveryConfirmFormActive = (props) => {

    //...props...
    const userName = props.userName;
    const recoveryEmail = props.recoveryEmail;
    const setOptionSelect = props.setOptionSelect;    

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [generalMessage, setGeneralMessage] = useState('');
    const [message, setMessage] = useState({
        emailMessage: '',
        controlCodeMessage: '',
        acceptMessage: ''
    });
    const [dataUserRecoveryConfirmForm, setDataUserRecoveryConfirmForm] = useState({
        email: recoveryEmail,
        controlCode: '',
        accept: false
    });
    const [dataCheckbox, setDataCheckbox] = useState({check: false});

    //...we create the references to clean the form...
    const referenceEmail = useRef(null);
    const referenceControlCode = useRef(null);
    const referenceCheckbox = useRef(null);
    const referenceAcceptButton = useRef(null);

    //...event handler...
    const handleInputChange = (event) => {
        setDataUserRecoveryConfirmForm({
            ...dataUserRecoveryConfirmForm,
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

    //..............................................
    //...we control the data for shipping...
    const dataControl = (event) => {

        event.preventDefault();

        switch (true) {
            case (dataUserRecoveryConfirmForm.email.trim() === ''):
                setMessage({
                    emailMessage: translator(siteLanguage).message_email
                });
                referenceEmail.current.focus();
                break;

            case (dataUserRecoveryConfirmForm.controlCode.trim() === ''):
                setMessage({
                    controlCodeMessage: translator(siteLanguage).message_controlcode
                });
                referenceControlCode.current.focus();
                break;

            case (dataCheckbox.check === false):
                setMessage({
                    acceptMessage: translator(siteLanguage).message_accept
                });
                referenceCheckbox.current.focus();
                break;

            default:
                //...correct data...
                let objData = {
                    email: dataUserRecoveryConfirmForm.email.trim(),
                    controlCode: dataUserRecoveryConfirmForm.controlCode.trim(),
                    accept: true,
                    language: siteLanguage
                }

                sendDataToServer(objData);
        }
    }

    //...we prepare the sending of data...
    const sendDataToServer = (objData) => {

        setGeneralMessage(
            <div className='user_recovery_confirm_form_active-spinner'>
                <UserSpinnerMessageView />
            </div>
        );

        const sendReceived = async (objData) => {

            //...we prepare the url...
            const url = 'http://localhost:20101/user_recovery_confirm';

            //...we create the config object...
            const config = {
                method: 'POST',
                body: JSON.stringify(objData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }

            //...we send and receive data from the server...
            let res = await fetch(url, config);
            let jsonResponse = await res.json();
            let jsResponse = await JSON.parse(jsonResponse);

            //...We analyze the response from the server...
            if (jsResponse.code === 'USER0083'){
                
                //...we clean the form...
                referenceEmail.current.value = '';
                referenceControlCode.current.value =  '';
                referenceCheckbox.current.checked = false;
                referenceAcceptButton.current.disabled = true;

                //...we clean the states...
                setDataUserRecoveryConfirmForm({
                    email: '',
                    controlCode: '',
                    accept: false
                });
                setDataCheckbox({check: false});

                //...we clean the messages...
                setMessage({
                    emailMessage: '',
                    controlCodeMessage: '',
                    acceptMessage: ''
                });

                setOptionSelect('op_rec_chan');
            }
            else {
                setGeneralMessage(<UserServerMessageView messageCode={jsResponse.code} />);
            }
        }

        sendReceived(objData);
    }

    //...render...
    return (
        <Fragment>
            <Form 
                className='user_recovery_confirm_form_active-base'
                onSubmit={dataControl}
                >
                <div className='user_recovery_confirm_active-titleBlock'>
                    <h4 className='user_recovery_confirm_active-titleBlock-title'>{translator(siteLanguage).title}</h4>
                    <p className='user_recovery_confirm_active-titleBlock-detail'>{translator(siteLanguage).hello} {userName}, {translator(siteLanguage).subtitle}</p>
                </div>
                <Row className='g-2 user_recovery_confirm_form_active-row'>
                    <Col md>
                        <Form.Control
                            type='email'
                            name='email'
                            readOnly
                            value={recoveryEmail}
                            className='user_recovery_confirm_form_active-controltext'
                            ref={referenceEmail}
                            />
                        <Form.Text className='user_recovery_confirm_form_active-formmessage'>{message.emailMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='g-2 user_recovery_confirm_form_active-row'>
                    <Col md>
                        <Form.Control
                            type='text'
                            name='controlCode'
                            placeholder={translator(siteLanguage).form_code}
                            className='user_recovery_confirm_form_active-controltext'
                            ref={referenceControlCode}
                            onChange={handleInputChange}
                            />
                        <Form.Text className='user_recovery_confirm_form_active-formmessage'>{message.controlCodeMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_recovery_confirm_form_active-row'>
                    <Col>
                        <Form.Check 
                            type='checkbox'
                            className='user_recovery_confirm_form_active-check'
                            id='user_recovery_confirm_form_active-check'
                            name='gridcheck'
                            label={translator(siteLanguage).form_check_label}
                            ref={referenceCheckbox}
                            onChange={handleChangeAccept}
                        />
                        <Form.Text className='user_recovery_confirm_form_active-formmessage'>{message.acceptMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_recovery_confirm_form_active-row'>
                    <Form.Text>{generalMessage}</Form.Text>
                </Row>
                <Button
                    type='submit'
                    id='user_recovery_confirm_form_active-btn'
                    ref={referenceAcceptButton}
                    >
                    {translator(siteLanguage).form_btn}
                </Button>
            </Form>
        </Fragment>
    )
}

//...we export the component "active"...
export default UserRecoveryConfirmFormActive;