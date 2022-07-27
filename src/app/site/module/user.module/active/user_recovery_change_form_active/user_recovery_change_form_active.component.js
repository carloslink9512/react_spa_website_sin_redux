import React, { Fragment, useState, useRef } from 'react';

//...we import the css style file...
import './user_recovery_change_form_active.component.css';


//...we import the "react-bootstrap" elements...
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

//...we import the component "view"...
import { translator } from './user_recovery_change_form_active.translator';
import encryptor from '../../other/crypto/encryptor';

//...we import the message system...
import UserSpinnerMessageView from '../../message/view/user_spinner_message_view/user_spinner_message_view.component';
import UserServerMessageView from '../../message/view/user_server_message_view/user_server_message_view.component';

//...component...
const UserRecoveryChangeFormActive = (props) => {

    //...props...
    const recoveryEmail = props.recoveryEmail;
    const setOptionSelect = props.setOptionSelect;

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [message, setMessage] = useState({
        emailMessage: '',
        passMessage: '',
        controlPassMessage: '',
        acceptMessage: ''
    });
    const [generalMessage, setGeneralMessage] = useState('');
    const [dataCheckbox, setDataCheckbox] = useState({check: false}); 
    const [dataUserRecoveryChangeForm, setDataUserRecoveryChangeForm] = useState({
        email: recoveryEmail,
        pass: '',
        controlPass: '',
        accept: false
    });

    //...we create the references to clean the form...
    const referenceEmail = useRef(null);
    const referencePass = useRef(null);
    const referenceControlPass = useRef(null);
    const referenceAcceptButton = useRef(null);
    const referenceCheckbox = useRef(null);


    //...event handler...
    const handleInputChange = (event) => {
        setDataUserRecoveryChangeForm({
            ...dataUserRecoveryChangeForm,
            [event.target.name]: event.target.value
        });
    }
    const handleChangeAccept = () => {
        if (dataCheckbox.check === false){
            setDataCheckbox({check: true});
        }
        else {
            setDataCheckbox({check: false})
        }
    }

    //.........................................
    //...we control the data for shipping...
    const dataControl = (event) => {

        event.preventDefault();

        switch (true) {
            case(dataUserRecoveryChangeForm.email.trim() === ''):
                setMessage({
                    emailMessage: translator(siteLanguage).message_email
                });
                referenceEmail.current.focus();
                break;

            case (dataUserRecoveryChangeForm.pass.trim() === ''):
                setMessage({
                    passMessage: translator(siteLanguage).message_pass
                });
                referencePass.current.focus();
                break;

            case (dataUserRecoveryChangeForm.controlPass.trim() === ''):
                setMessage({
                    controlPassMessage: translator(siteLanguage).message_controlpass
                });
                referenceControlPass.current.focus();
                break;

            case (dataUserRecoveryChangeForm.pass.trim() !== dataUserRecoveryChangeForm.controlPass.trim()):
                setMessage({
                    controlPassMessage: translator(siteLanguage).message_pass_controlpass
                });
                referenceControlPass.current.focus();
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
                    email: dataUserRecoveryChangeForm.email.trim(),
                    pass: encryptor(dataUserRecoveryChangeForm.pass.trim()),
                    accept: true,
                    language: siteLanguage.trim()
                };

                sendDataToServer(objData);
        }
    }

    //...we prepare the sending of data...
    const sendDataToServer = (objData) => {
        
        setGeneralMessage(
            <div className='user_recovery_change_form_active-spinner'>
                <UserSpinnerMessageView />
            </div>
        );

        const sendReceived = async (objData) => {

            //...we prepare the url...
            const url = 'http://localhost:20101/user_recovery_change';

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
            if (jsResponse.code === 'USER0094'){

                ///...we clean the form...
                referenceEmail.current.value = '';
                referencePass.current.value = '';
                referenceControlPass.current.value = '';
                referenceAcceptButton.current.disabled = true;
                referenceCheckbox.current.checked = false;
                
                //...we clean the states...
                setDataUserRecoveryChangeForm({
                    email: recoveryEmail,
                    pass: '',
                    controlPass: '',
                    accept: false
                });
                setDataCheckbox({check: false});

                //...we clean the messages...
                setMessage({
                    emailMessage: '',
                    passMessage: '',
                    controlPassMessage: '',
                    acceptMessage: ''
                });

                setOptionSelect('op_rec_succ');
            }
            else {
                setGeneralMessage(
                    <UserServerMessageView messageCode={jsResponse.code} />
                );
            }
        }
        sendReceived(objData);
    }

    //...render...
    return (
        <Fragment>
            <Form 
                className='user_recovery_change_form_active-base'
                onSubmit={dataControl}
                >
                <div className='user_recovery_change_form_active-titleBlock'>
                    <h4 className='user_recovery_change_form_active-titleBlock-title'>{translator(siteLanguage).title}</h4>
                    <p className='user_recovery_change_form_active-titleBlock-detail'>{translator(siteLanguage).subtitle}</p>
                </div>
                <Row className='g-2 user_recovery_change_form_active-row'>
                    <Col md>
                        <Form.Control
                            type='email'
                            name='email'
                            readOnly
                            value={recoveryEmail}
                            className='user_recovery_change_form_active-controltext'
                            ref={referenceEmail}
                            />
                        <Form.Text className='user_recovery_change_form_active-messageform'>{message.emailMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='g-2 user_recovery_change_form_active-row'>
                    <Col md>
                        <Form.Control
                            type='password'
                            name='pass'
                            placeholder={translator(siteLanguage).form_pass1}
                            className='user_recovery_change_form_active-controltext'
                            onChange={handleInputChange}
                            ref={referencePass}
                            />
                        <Form.Text className='user_recovery_change_form_active-messageform'>{message.passMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='g-2 user_recovery_change_form_active-row'>
                    <Col md>
                        <Form.Control
                            type='password'
                            name='controlPass' 
                            placeholder={translator(siteLanguage).form_pass2}
                            className='user_recovery_change_form_active-controltext'
                            onChange={handleInputChange}
                            ref={referenceControlPass}
                            />
                        <Form.Text className='user_recovery_change_form_active-messageform'>{message.controlPassMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_recovery_change_form_active-row'>
                    <Col>
                        <Form.Check 
                            type='checkbox'
                            className='user_recovery_change_form_active-check'
                            id='user_recovery_change_form_active-check'
                            name='gridcheck'
                            label={translator(siteLanguage).form_check_label}
                            onChange={handleChangeAccept}
                            ref={referenceCheckbox}
                        />
                        <Form.Text className='user_recovery_change_form_active-messageform'>{message.acceptMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_recovery_change_form_active-row'>
                    <Form.Text>{generalMessage}</Form.Text>
                </Row>
                <Button
                    type='submit'
                    id='user_recovery_change_form_active-btn'
                    ref={referenceAcceptButton}
                    >
                    {translator(siteLanguage).form_btn}
                </Button>
            </Form>
        </Fragment>
    )
}

//...we export the component "active"...
export default UserRecoveryChangeFormActive;