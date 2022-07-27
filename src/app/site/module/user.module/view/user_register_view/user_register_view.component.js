import React, { Fragment, useState } from 'react';

//...we import the css style file...
import './user_register_view.component.css';

//...we import the "view" component...
import UserRegisterInfoView from '../user_register_info_view/user_register_info_view.component';

//...we import the "active" component...
import UserRegisterFormActive from '../../active/user_register_form_active/user_register_form_active.component';
import UserConfirmFormActive from '../../active/user_confirm_form_active/user_confirm_form_active.component';
import UserConfirmSuccessFormActive from '../../active/user_confirm_success_form_active/user_confirm_success_form_active.component';

//...component...
const UserRegisterView = () => {

    //...states...
    const [optionSelect, setOptionSelect] = useState('op_reg');
    const [registerEmail, setRegisterEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userLastname, setUserLastname] = useState('');
    const [registerPartial, setRegisterPartial] = useState(false);

    //...render...
    return(
        <Fragment>
            <div className='user_register_view-base'>
                <div className='my-container'>
                    <div className='user_register_view-container'>
                        <div className='user_register_view-container-leftblock'>
                            {optionSelect === 'op_reg' &&
                                <UserRegisterFormActive
                                    setOptionSelect={setOptionSelect}
                                    setRegisterEmail={setRegisterEmail}
                                    setUserName={setUserName}
                                    setUserLastname={setUserLastname}
                                    setRegisterPartial={setRegisterPartial}
                                />
                            }
                            {optionSelect === 'op_confirm' &&
                                <UserConfirmFormActive 
                                    registerEmail={registerEmail}
                                    setOptionSelect={setOptionSelect}
                                    registerPartial={registerPartial}
                                />
                            }
                            {optionSelect === 'op_success' &&
                                <UserConfirmSuccessFormActive />
                            }
                        </div>
                        <div className='user_register_view-container-rightblock'>
                            <UserRegisterInfoView />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the "view" component...
export default UserRegisterView;