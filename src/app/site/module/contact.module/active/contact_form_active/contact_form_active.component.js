import React, { Fragment, useState, useRef } from 'react';

//...importamos el archivo de estilos css...
import './contact_form_active.component.css';

//...importamos elementos de "react-bootstrap"...
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

//...importamos componentes del sistema de mensajes...
import ContactSpinnerMessageView from '../../message/view/contact_spinner_message_view/contact_spinner_message_view.component';
import ContactServerMessageView from '../../message/view/contact_server_message_view/contact_server_message_view.component';

//...we import the translator...
import { translator } from './contact_form_active.translator';

//...componente...
const ContactFormActive = () => {

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [contactData, setContactData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        commentary: '',
        accept: false,
        language: ''
    });
    const [checkboxData, setCheckboxData] = useState({
        check: false
    });
    const [message, setMessage] = useState({
        messageName: '',
        messageLastname: '',
        messageEmail: '',
        messagePhone: '',
        messageCommentary: '',
        messageAccept: ''
    });
    const [generalMessage, setGeneralMessage] = useState('');


    //...references to clean the form...
    const referenceName = useRef(null);
    const referenceLastname = useRef(null);
    const referenceEmail = useRef(null);
    const referencePhone = useRef(null);
    const referenceCommentary = useRef(null);
    const referenceCheckbox = useRef(null);

    //...event handler...
    const handleInputChange = (event) => {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value
        });
    }
    const handleChangeAccept = () => {
        if (checkboxData.check === false){
            setCheckboxData({check: true});
        }
        else {
            setCheckboxData({check: false});
        }
    }

    //.....................................................
    //...controlamos los datos para el envío al servidor...
    const dataControl = (event) => {
        event.preventDefault();

        switch (true){
            case (contactData.name.trim() === ''):
                setMessage({
                    messageName: translator(siteLanguage).form_name_message
                });
                referenceName.current.focus();
                break;

            case (contactData.lastname.trim() === ''):
                setMessage({
                    messageLastname: translator(siteLanguage).form_lastname_message
                });
                referenceLastname.current.focus();
                break;

            case (contactData.email.trim() === ''):
                setMessage({
                    messageEmail: translator(siteLanguage).form_email_message
                });
                referenceEmail.current.focus();
                break;

            case (contactData.commentary.trim() === ''):
                setMessage({
                    messageCommentary: translator(siteLanguage).form_commentary_message
                });
                referenceCommentary.current.focus();
                break;
            
            case (checkboxData.check === false):
                setMessage({
                    messageAccept: translator(siteLanguage).form_accept_message
                });
                referenceCheckbox.current.focus();
                break;

            default:
                let objData = {
                    name: contactData.name.trim(),
                    lastname: contactData.lastname.trim(),
                    email: contactData.email.trim(),
                    phone: contactData.phone.trim(),
                    commentary: contactData.commentary.trim(),
                    accept: true,
                    language: siteLanguage
                };
                sendDataToServer(objData);
        }
    }

    //...creamos la función de envío...
    const sendDataToServer = (objData) => {
        
        setGeneralMessage(
            <div>
                <ContactSpinnerMessageView />
            </div>
        );

        const sendAndReceived = async (objData) => {

            //...creamos la url...
            const url = 'http://localhost:10101/contact_insert';

            //...creamos el archivo de configuración...
            const config = {
                method: 'POST',
                body: JSON.stringify(objData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }

            //...send and reveived data...
            let res = await fetch(url, config);
            let jsonResponse = await res.json();
            let jsResponse = await JSON.parse(jsonResponse);

            console.log('resultado del contacto')
            console.log(jsResponse)

            //...We analyze the response from the server...
            if (jsResponse.code === 'CONT0017'){

                //...we clean the form...
                referenceName.current.value = '';
                referenceLastname.current.value = '';
                referenceEmail.current.value = '';
                referencePhone.current.value = '';
                referenceCommentary.current.value = '';
                referenceCheckbox.current.checked = false;

                //...we clean the state...
                setContactData({
                    name: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    commentary: '',
                    accept: false,
                    language: ''
                });

                //...we clean the message...
                setMessage({
                    messageName: '',
                    messageLastname: '',
                    messageEmail: '',
                    messagePhone: '',
                    messageCommentary: '',
                    messageAccept: ''
                });

                //...we clean the check...
                setCheckboxData({check: false});
            }
            setGeneralMessage(<ContactServerMessageView messageCode={jsResponse.code} />);
        }

        //...we call the function...
        sendAndReceived(objData);
    }

    //...render...
    return (
        <Fragment>
            <Form 
                className='contact_form_active-base'
                onSubmit={dataControl}
                >
                <div className='contact_form_active-titleBlock'>
                    <span className='contact_form_active-titleBlock-title'>{translator(siteLanguage).title}</span>
                </div>

                <Row className='g-2 contact_form_active-row'>
                    <Col md>
                        <Form.Control 
                            type="text" 
                            name='name'
                            /* id='contact_form_active-formcontrol-name' */
                            placeholder={translator(siteLanguage).form_name}
                            className="contact_form_active-controltext"
                            onChange={handleInputChange}
                            ref={referenceName}
                            />
                        <Form.Text className='contact_form_active-message'>{message.messageName}</Form.Text>
                    </Col>
                    <Col md>
                        <Form.Control 
                            type="text"
                            name='lastname' 
                            placeholder={translator(siteLanguage).form_lastname}
                            className="contact_form_active-controltext"
                            onChange={handleInputChange}
                            ref={referenceLastname}
                            />
                        <Form.Text className='contact_form_active-message'>{message.messageLastname}</Form.Text>
                    </Col>
                </Row>
                <Row className='contact_form_active-row'>
                    <Col md>
                        <Form.Control 
                            type="email" 
                            name='email'
                            placeholder={translator(siteLanguage).form_email}
                            className="contact_form_active-controltext"
                            onChange={handleInputChange}
                            ref={referenceEmail}
                            />
                        <Form.Text className='contact_form_active-message'>{message.messageEmail}</Form.Text>
                    </Col>
                </Row>
                <Row className='contact_form_active-row'>
                    <Col md>
                        <Form.Control 
                            type="text"
                            name='phone'
                            placeholder={translator(siteLanguage).form_phone}
                            className="contact_form_active-controltext"
                            onChange={handleInputChange}
                            ref={referencePhone}
                            />
                        <Form.Text className='contact_form_active-message'>{message.messagePhone}</Form.Text>
                    </Col>
                </Row>
                <Row className='contact_form_active-row'>
                    <Col md>
                        <Form.Control 
                            as="textarea"
                            name='commentary'
                            placeholder={translator(siteLanguage).form_commentary}
                            className="contact_form_active-controltext"
                            rows={5}
                            onChange={handleInputChange}
                            ref={referenceCommentary}
                            />
                        <Form.Text className='contact_form_active-message'>{message.messageCommentary}</Form.Text>
                    </Col>
                </Row>
                <Row className='contact_form_active-row'>
                    <Col>
                        <Form.Check 
                            type="checkbox"
                            className='contact_form_active-check'
                            id='contact_form_active-check'
                            name='gridcheck'
                            label={translator(siteLanguage).form_accept}
                            onChange={handleChangeAccept}
                            ref={referenceCheckbox}
                            />
                        <Form.Text className='contact_form_active-message'>{message.messageAccept}</Form.Text>
                    </Col>
                </Row>
                <Row className='contact_form_active-row'>
                    <Form.Text>{generalMessage}</Form.Text>
                </Row>
                <Button
                    type='submit'
                    id='contact_form_active-btn'
                    >
                    {translator(siteLanguage).form_btn}
                </Button>
            </Form>
        </Fragment>
    )
}

//...exportamos el componente "active"...
export default ContactFormActive;