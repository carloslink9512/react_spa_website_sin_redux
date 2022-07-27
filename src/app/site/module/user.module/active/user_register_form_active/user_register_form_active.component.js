import React, { Fragment, useState, useRef } from 'react';

//...we import the css style file...
import './user_register_form_active.component.css';

//...we import the translator...
import { translator } from './user_register_form_active.translator';

//...we import the functions...
import encryptor from '../../other/crypto/encryptor';

//...we import the "react-bootstrap" elements...
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

//...import the system message...
import UserSpinnerMessageView from '../../message/view/user_spinner_message_view/user_spinner_message_view.component';
import UserServerMessageView from '../../message/view/user_server_message_view/user_server_message_view.component';

//...component...
const UserRegisterFormActive = (props) => {

    //...props...
    const setRegisterEmail = props.setRegisterEmail;
    const setUserName = props.setUserName;
    const setUserLastname = props.setUserLastname;
    const setOptionSelect = props.setOptionSelect;
    const setRegisterPartial = props.setRegisterPartial;

    //...states...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [dataUserForm, setDataUserForm] = useState({
        name: '',
        lastname: '',
        email: '',
        pass: '',
        controlPass: '',
        accept: false,
        language: ''
    });
    const [message, setMessage] = useState({
        nameMessage: '',
        lastnameMessage: '',
        emailMessage: '',
        passMessage: '',
        controlPassMessage: '',
        acceptMessage: ''
    });
    const [generalMessage, setGeneralMessage] = useState('');
    const [dataCheckbox, setDataCheckbox] = useState({
        check: false
    });

    //...referemce to clean the form...
    const referenceName = useRef(null);
    const referenceLastname = useRef(null);
    const referenceEmail = useRef(null);
    const referencePass = useRef(null);
    const referenceControlPass = useRef(null);
    const referenceCheckbox = useRef(null);

    //...event handler...
    const handleInputChange = (event) => {
        setDataUserForm({
            ...dataUserForm,
            [event.target.name]: event.target.value
        });
    };

    const handleChangeAccept = (event) => {
        if (dataCheckbox.check === false){
            setDataCheckbox({check: true});
        }
        else {
            setDataCheckbox({check: false});
        }
    }

    //......................................
    //...we control the data for shipping...
    const dataControl = (event) => {
        event.preventDefault();

        switch (true) {
            case (dataUserForm.name.trim() === ''):
                setMessage({
                    nameMessage: translator(siteLanguage).form_message_name
                });
                referenceName.current.focus();
                break;

            case (dataUserForm.lastname.trim() === ''):
                setMessage({
                    lastnameMessage: translator(siteLanguage).form_message_lastname
                });
                referenceLastname.current.focus();
                break;

            case (dataUserForm.email.trim() === ''):
                setMessage({
                    emailMessage: translator(siteLanguage).form_message_email
                });
                referenceEmail.current.focus();
                break;

            case (dataUserForm.pass.trim() === ''):
                setMessage({
                    passMessage: translator(siteLanguage).form_message_pass
                });
                referencePass.current.focus();
                break;

            case (dataUserForm.controlPass.trim() === ''):
                setMessage({
                    controlPassMessage: translator(siteLanguage).form_message_controlpass
                });
                referenceControlPass.current.focus();
                break;

            case (dataUserForm.pass.trim() !== dataUserForm.controlPass.trim()):
                setMessage({
                    controlPassMessage: translator(siteLanguage).form_message_pass_controlpass
                });
                referenceControlPass.current.focus();
                break;

            case (dataCheckbox.check === false):
                setMessage({
                    acceptMessage: translator(siteLanguage).form_message_accept
                });
                referenceCheckbox.current.focus();
                break;

            default:
                //...correct data...
                let objData = {
                    name: dataUserForm.name.trim(),
                    lastname: dataUserForm.lastname.trim(),
                    email: dataUserForm.email.trim(),
                    pass: encryptor(dataUserForm.pass.trim()),
                    accept: true,
                    language: siteLanguage.trim(),
                    newsletter: false
                };

                sendDataToServer(objData);
        }
    }

    //...we prepare the sending of data...
    const sendDataToServer = (objData) => {

        setGeneralMessage(
            <div className='user_register_form_active-spinner'>
                <UserSpinnerMessageView />
            </div>
        );

        const sendReceived = async (objData) => {
            
            //...we create the url...
            const url = 'http://localhost:20101/user_register';

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

            //...we analyze the response from the server...
            
            if (jsResponse.code === 'USER0019' || jsResponse.code === 'USER0006'){

                //...el usuario intenta registrarse...
                    //...el usuario se encuentra parcialmente registrado, pendiente de confirmar...
                if (jsResponse.code === 'USER0006') setRegisterPartial(true);
                
                setRegisterEmail(dataUserForm.email.trim());
                setUserName(dataUserForm.name.trim());
                setUserLastname(dataUserForm.lastname.trim());

                //...we clean the form...
                referenceName.current.value = '';
                referenceLastname.current.value = '';
                referenceEmail.current.value = '';
                referencePass.current.value = '';
                referenceControlPass.current.value = '';
                referenceCheckbox.current.checked = false;

                //...we clean the states...
                setDataUserForm({
                    name: '',
                    lastname: '',
                    email: '',
                    pass: '',
                    controlPass: '',
                    accept: false
                });

                //...we clean de messages...
                setMessage({
                    nameMessage: '',
                    lastnameMessage: '',
                    emailMessage: '',
                    passMessage: '',
                    controlPassMessage: '',
                    acceptMessage: ''
                });

                setDataCheckbox({check: false});
                setOptionSelect('op_confirm');

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
                className='user_register_form_active-base'
                onSubmit={dataControl}
                >
                <div className='user_register_form_active-titleblock'>
                    <h4 className='user_register_form_active-titleblock-title'>{translator(siteLanguage).title}</h4>
                </div>
                <Row className='g-2 user_register_form_active-row'>
                    <Col md>
                        <Form.Control 
                            type='text'
                            name='name'
                            placeholder={translator(siteLanguage).form_name}
                            className='user_register_form_active-controltext'
                            id='user_register_form_active-formcontrol-name'
                            ref={referenceName}
                            onChange={handleInputChange}
                            />
                        <Form.Text className='user_register_form_active-form-message'>{message.nameMessage}</Form.Text>
                    </Col>
                    <Col md>
                        <Form.Control 
                            type='text'
                            name='lastname'
                            placeholder={translator(siteLanguage).form_lastname}
                            className='user_register_form_active-controltext'
                            ref={referenceLastname}
                            onChange={handleInputChange}
                            />
                        <Form.Text className='user_register_form_active-form-message'>{message.lastnameMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='g-2 user_register_form_active-row'>
                    <Col md>
                        <Form.Control 
                            type='email'
                            name='email'
                            placeholder={translator(siteLanguage).form_email}
                            className='user_register_form_active-controltext'
                            ref={referenceEmail}
                            onChange={handleInputChange}
                            />
                        <Form.Text className='user_register_form_active-form-message'>{message.emailMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='g-2 user_register_form_active-row'>
                    <Col md>
                        <Form.Control 
                            type='password'
                            name='pass'
                            placeholder={translator(siteLanguage).form_pass}
                            className='user_register_form_active-controltext'
                            id='user_register_form_active-formcontrol-pass'
                            ref={referencePass}
                            onChange={handleInputChange}
                            />
                        <Form.Text className='user_register_form_active-form-message'>{message.passMessage}</Form.Text>
                    </Col>
                    <Col md>
                        <Form.Control 
                            type='password'
                            name='controlPass'
                            placeholder={translator(siteLanguage).form_pass_control}
                            className='user_register_form_active-controltext'
                            ref={referenceControlPass}
                            onChange={handleInputChange}
                            />
                        <Form.Text className='user_register_form_active-form-message'>{message.controlPassMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_register_form_active-row'>
                    <Col>
                        <Form.Check 
                            type='checkbox'
                            className='user_register_form_active-check'
                            id='user_register_form_active-check'
                            name='gridcheck'
                            label={translator(siteLanguage).form_check_accept_label}
                            ref={referenceCheckbox}
                            onChange={handleChangeAccept}
                        />
                        <Form.Text className='user_register_form_active-form-message'>{message.acceptMessage}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_register_form_active-row'>
                    <Form.Text>{generalMessage}</Form.Text>
                </Row>
                <Button
                    type='submit'
                    id='user_register_form_active-btn'
                    >
                    {translator(siteLanguage).form_btn}
                </Button>
            </Form>            
        </Fragment>
    )
}

//...we export the "active" component...
export default UserRegisterFormActive;