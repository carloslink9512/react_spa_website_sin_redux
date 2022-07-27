import React, { Fragment, useState, useRef } from 'react';

//...we import the css style file...
import './user_confirm_form_active.component.css';

//...we import the "react-bootstrap" elements...
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

//...we import the translator...
import { translator } from './user_confirm_form_active.translator';

//...we import the message system...
import UserSpinnerMessageView from '../../message/view/user_spinner_message_view/user_spinner_message_view.component';
import UserServerMessageView from '../../message/view/user_server_message_view/user_server_message_view.component';

//...component...
const UserConfirmFormActive = (props) => {

    //...props...
    const setOptionSelect = props.setOptionSelect;
    const registerPartial = props.registerPartial;

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [message, setMessage] = useState({
        messageEmail: '',
        messageControlCode: '',
        messageAccept: ''
    });
    const [registerEmail, setRegisterEmail] = useState(props.registerEmail);
    const [generalMessage, setGeneralMessage] = useState('');
    const [generalMessageRecovery, setGeneralMessageRecovery] = useState('');
    const [dataCheckbox, setDataCheckbox] = useState({check: false});
    const [dataConfirmForm, setDataConfirmForm] = useState({
        email: '',
        controlCode: ''
    });
    const [codeBtn, setCodeBtn] = useState(false);

    //...referemce to clean the form...
    const referenceControlCode = useRef(null);
    const referenceCheckbox = useRef(null);

    //...event handler...
    const handleInputChange = (event) => {
        setDataConfirmForm({
            ...dataConfirmForm,
            [event.target.name]: event.target.value
        });
    };

    const handleChangeAccept = () => {
        if (dataCheckbox.check === false){
            setDataCheckbox({check: true});
        }
        else {
            setDataCheckbox({check: false});
        }
    };

    const handleClickCodeBtn = () => {
        codeRecovery();
    }

    //...we control the data for shipping...
    const dataControl = (event) => {

        event.preventDefault();

        switch (true) {
            case (registerEmail.trim() === ''):
                setMessage({
                    messageEmail: translator(siteLanguage).form_message_email
                });
                break;

            case (dataConfirmForm.controlCode.trim() === ''):
                setMessage({
                    messageControlCode: translator(siteLanguage).form_message_controlcode
                });
                referenceControlCode.current.focus();
                break;

            case (dataCheckbox.check === false):
                setMessage({
                    messageAccept: translator(siteLanguage).form_message_accept
                });
                referenceCheckbox.current.focus();
                break;

            default:
                //...correct data...
                let objData = {
                    email: registerEmail.trim(),
                    controlCode: dataConfirmForm.controlCode.trim(),
                    accept: true,
                    language: siteLanguage
                }

                sendDataToServer(objData);
        }
    }
    
    //...we prepare the sending of data...
    const sendDataToServer = async (objData) => {

        setGeneralMessage(
            <div className='user_confirm_form_active-spinner'>
                <UserSpinnerMessageView />
            </div>
        );

        //...we call the function...
        const sendReceived = async (objData) => {
            
            //...we create the url...
            const url = 'http://localhost:20101/user_register_confirm';

            //...we create the config...
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

            if (jsResponse.code === 'USER0048'){

                //...we clean the form...
                referenceControlCode.current.value = '';
                referenceCheckbox.current.checked = false;

                //...we clean the states...
                setDataConfirmForm({
                    email: '',
                    controlCode: ''
                });

                //...we clean the message...
                setMessage({
                    messageEmail: '',
                    messageControlCode: '',
                    messageAccept: ''
                });

                setDataCheckbox({check: false});
                setOptionSelect('op_success');
            }
            else {
                setGeneralMessage(<UserServerMessageView messageCode={jsResponse.code} />);
            }
        }

        sendReceived(objData);
    }

    //...code recovery..............................................

    const codeRecovery = () => {

        setGeneralMessageRecovery(
            <div className='user_confirm_form_active-spinner'>
                <UserSpinnerMessageView />
            </div>
        );

        if (registerEmail.trim() !== ''){

            const objData = {
                email: registerEmail
            };
            
            const sendReceived = async () => {
                //...we create the url...
                let url = 'http://localhost:20101/user_register_code_recovery';

                //...we create the config...
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

                setGeneralMessageRecovery(<UserServerMessageView messageCode={jsResponse.code} />);

                if (jsResponse.code === 'USER0063'){
                    setCodeBtn(true);
                }
            };

            sendReceived(objData);
        }
    }

    //...render...
    return (
        <Fragment>
            <Form 
                className='user_confirm_form_active-base'
                onSubmit={dataControl}
                >
                <div className='user_confirm_active-titleblock'>
                    <h4 className='user_confirm_active-titleblock-title'>{translator(siteLanguage).title}</h4>
                    
                    {registerPartial === false &&
                        <p className='user_confirm_active-titleblock-detail'>{translator(siteLanguage).detail1}</p>
                    }
                    {registerPartial === true &&
                        <>
                            <p className='user_confirm_active-titleblock-detail'>{translator(siteLanguage).detail2_1}</p>
                            <p className='user_confirm_active-titleblock-detail'>{translator(siteLanguage).detail2_2}</p>
                            <Row className='user_confirm_form_active-row'>
                                <Form.Text>{generalMessageRecovery}</Form.Text>
                            </Row>
                            <Button 
                                bsPrefix='user_confirm_active-titleblock-codebtn'
                                onClick={handleClickCodeBtn}
                                disabled={codeBtn}
                                >
                                {translator(siteLanguage).form_btn_code}
                            </Button>
                        </>
                    }
                </div>
                <Row className='g-2 user_confirm_form_active-row'>
                    <Col md>
                        <Form.Control
                            type="email"
                            readOnly
                            name='email'
                            className="user_confirm_form_active-controltext"
                            value={registerEmail}
                            />
                        <Form.Text className='user_confirm_form_active-form-message'>{message.messageEmail}</Form.Text>
                    </Col>
                </Row>
                <Row className='g-2 user_confirm_form_active-row'>
                    <Col md>
                        <Form.Control
                            type="text"
                            name='controlCode'
                            placeholder={translator(siteLanguage).form_control_code}
                            className="user_confirm_form_active-controltext"
                            ref={referenceControlCode}
                            onChange={handleInputChange}
                            />
                        <Form.Text className='user_confirm_form_active-form-message'>{message.messageControlCode}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_confirm_form_active-row'>
                    <Col>
                        <Form.Check 
                            type="checkbox"
                            className='user_confirm_form_active-check'
                            id='user_confirm_form_active-check'
                            name='gridcheck'
                            label={translator(siteLanguage).form_accept_label}
                            ref={referenceCheckbox}
                            onChange={handleChangeAccept}
                        />
                        <Form.Text className='user_confirm_form_active-form-message'>{message.messageAccept}</Form.Text>
                    </Col>
                </Row>
                <Row className='user_confirm_form_active-row'>
                    <Form.Text>{generalMessage}</Form.Text>
                </Row>
                <Button
                    type='submit'
                    id='user_confirm_form_active-btn'
                    >
                    {translator(siteLanguage).form_btn}
                </Button>
            </Form>            
        </Fragment>
    )
}

//...we export the "active" component...
export default UserConfirmFormActive;