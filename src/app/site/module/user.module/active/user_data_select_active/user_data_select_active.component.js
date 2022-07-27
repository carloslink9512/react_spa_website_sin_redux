import { Fragment, useState, useRef } from 'react';

//...we import the "react-bootstrap" elements...
import { Form, Button } from 'react-bootstrap';

//...we import the css style file...
import './user_data_select_active.component.css';

//...we import the message system...
import UserSpinnerMessageView from '../../message/view/user_spinner_message_view/user_spinner_message_view.component';
import UserServerMessageView from '../../message/view/user_server_message_view/user_server_message_view.component';

//...we import the translator...
import { translator } from './user_data_select_active.translator';

//...component...
const UserDataSelectActive = (props) => {

    //...props...
    const userName = props.userName;
    const setUserName = props.setUserName;
    const userLastname = props.userLastname;
    const setUserLastname = props.setUserLastname;
    const userNewsletter = props.userNewsletter;
    const setUserNewsletter = props.setUserNewsletter;
    const userId = props.userId;
    const userToken = props.userToken;

    //...state...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [enabledState, setEnabledState] = useState(true);
    const [dataUserForm, setDataUserForm] = useState({
        name: '',
        lastname: '',
        accept: false,
    });
    const [message, setMessage] = useState({
        nameMessage: '',
        lastnameMessage: '',
        acceptMessage: ''
    });
    const [dataCheckbox, setDataCheckbox] = useState({
        check: false
    });
    const [dataNewsletter, setDataNewsletter] = useState({
        check: userNewsletter
    });
    const [generalMessage, setGeneralMessage] = useState('');

    //...referemce to clean the form...
    const referenceName = useRef(null);
    const referenceCheckbox = useRef(null);
    const referenceLastname = useRef(null); 
    const referenceNoNewsletter = useRef(null);
    const referenceYesNewsletter = useRef(null);

    //...event handler...
    const handleInputChange = (event) => {
        setDataUserForm({
            ...dataUserForm,
            [event.target.name]: event.target.value
        });
    }

    const handleDataEdit = () => {
        setDataUserForm({
            name: referenceName.current.value,
            lastname: referenceLastname.current.value
        });
        setEnabledState(false);
    }

    const handleDataCancel = () => {
        setEnabledState(true);

        setDataCheckbox({
            check: false
        });

        referenceNoNewsletter.current.checked = !userNewsletter;
        referenceYesNewsletter.current.checked = userNewsletter;

        setDataUserForm({
            name: '',
            lastname: '',
            accept: false
        });

        referenceCheckbox.current.checked = false;
        referenceName.current.value = userName;
        referenceLastname.current.value = userLastname;

        setMessage({
            nameMessage: '',
            lastnameMessage: '',
            acceptMessage: ''
        })

    } 

    const handleChangeAccept = (event) => {
        if (dataCheckbox.check === false){
            setDataCheckbox({check: true});
        }
        else {
            setDataCheckbox({check: false});
        }
    }

    const handleChangeNewsletterNo = () => {
        setDataNewsletter({check: false});
    }

    const handleChangeNewsletterYes = () => {
        setDataNewsletter({check: true});
    }

    //...data control...
    const dataControl = (event) => {
        event.preventDefault();

        switch (true) {
            case (dataUserForm.name.trim() === ''):
                setMessage({
                    nameMessage: translator(siteLanguage).message_name
                });
                referenceName.current.focus();
                break;

            case (dataUserForm.lastname.trim() === ''):
                setMessage({
                    lastnameMessage: translator(siteLanguage).message_lastname
                });
                referenceLastname.current.focus();
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
                    userName: dataUserForm.name.trim(),
                    userLastname: dataUserForm.lastname.trim(),
                    userId: userId.trim(),
                    userNewsletter: dataNewsletter.check
                };
                sendDataToServer(objData);
        }
    }

    //...we prepare the sending of data...
    const sendDataToServer = (objData) => {
        setGeneralMessage(
            <div className='user_data_select_active-spinner'>
                <UserSpinnerMessageView />
            </div>
        );

        const sendReceived = async (objData) => {

            //...we create the url...
            const url = 'http://localhost:20101/user_modify_profile';

            //...we create the config object...
            const config = {
                method: 'POST',
                body: JSON.stringify(objData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken.trim()}`
                }
            };

            //...we send and received data from the server...
            let res = await fetch(url, config);
            let jsonResponse = await res.json();
            let jsResponse = await JSON.parse(jsonResponse);

            //...We analyze the response from the server...
            if (jsResponse.code === 'USER0135'){

                setMessage({
                    nameMessage: '',
                    lastnameMessage: '',
                    acceptMessage: ''
                });

                setEnabledState(true);

                /*...actualizamos los datos personales en app.manager...*/

                setUserNewsletter(dataNewsletter.check);
                setUserName(dataUserForm.name.trim(),);
                setUserLastname(dataUserForm.lastname.trim(),);
            }

           setGeneralMessage(<UserServerMessageView messageCode={jsResponse.code} />)
        }

        //...we call the function...
        sendReceived(objData)
    }


    //...render...
    return (
        <Fragment>
            <div className='user_data_select_active-base'>
                <div className='user_data_select_active-container'>
                    <Form 
                        className='user_data_select_active-form'
                        onSubmit={dataControl}
                        >
                        <div className='user_data_select_active-form-titleblock'>
                            <h4 className='user_data_select_active-form-titleblock-title'>{translator(siteLanguage).title}</h4>
                        </div>
                        <Form.Group className="mb-3" >
                            <Form.Label className='user_data_select_active-form-controltext'>{translator(siteLanguage).form_name}</Form.Label>
                            <Form.Control 
                                type="text"
                                name='name'
                                className='user_data_select_active-form-controltext'
                                disabled={enabledState}
                                defaultValue={userName}
                                ref={referenceName}
                                placeholder={translator(siteLanguage).form_placeholder_name}
                                onChange={handleInputChange}
                            />
                            <Form.Text className='user_data_select_active-form-message'>{message.nameMessage}</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label className='user_data_select_active-form-controltext'>{translator(siteLanguage).form_lastname}</Form.Label>
                            <Form.Control 
                                type="text"
                                name='lastname'
                                className='user_data_select_active-form-controltext'
                                disabled={enabledState}
                                defaultValue={userLastname}
                                ref={referenceLastname}
                                placeholder={translator(siteLanguage).form_placeholder_lastname}
                                onChange={handleInputChange}
                            />
                            <Form.Text className='user_data_select_active-form-message'>{message.lastnameMessage}</Form.Text>
                        </Form.Group>

                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label={translator(siteLanguage).radio1}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    className='user_data_select_active-form-radio'
                                    disabled={enabledState}
                                    defaultChecked={!userNewsletter}
                                    onChange={handleChangeNewsletterNo}
                                    ref={referenceNoNewsletter}
                                />
                                <Form.Check
                                    inline
                                    label={translator(siteLanguage).radio2}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    className='user_data_select_active-form-radio'
                                    disabled={enabledState}
                                    defaultChecked={userNewsletter}
                                    onChange={handleChangeNewsletterYes}
                                    ref={referenceYesNewsletter}
                                />
                            </div>
                        ))}

                        <Form.Group className="mb-3" controlId="formBasicAccept">
                            <Form.Check 
                                type="checkbox"
                                className='user_data_select_active-form-check'
                                disabled={enabledState}
                                ref={referenceCheckbox}
                                label={translator(siteLanguage).form_label_check}
                                onChange={handleChangeAccept}
                            />
                            <Form.Text className='user_data_select_active-form-message'>{message.acceptMessage}</Form.Text>
                        </Form.Group>

                        <Form.Text>{generalMessage}</Form.Text>

                        <Button
                            type='button'
                            id='user_data_select_active-form-editbtn'
                            disabled={!enabledState}
                            onClick={handleDataEdit}
                            >
                            {translator(siteLanguage).form_edit_btn}
                        </Button>

                        <Button
                            type='submit'
                            id='user_data_select_active-form-acceptbtn'
                            disabled={enabledState}
                            >
                            {translator(siteLanguage).form_accept_btn}
                        </Button>

                        <Button
                            type='button'
                            id='user_data_select_active-form-cancelbtn'
                            disabled={enabledState}
                            onClick={handleDataCancel}
                            >
                                {translator(siteLanguage).form_cancel_btn}
                        </Button>
                    </Form>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the "active" component...
export default UserDataSelectActive;