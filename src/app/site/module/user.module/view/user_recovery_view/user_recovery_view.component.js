import React, { Fragment, useState } from 'react';

//...we import the css style file...
import './user_recovery_view.component.css';

//...we import the component "active"...
import UserRecoveryFormActive from '../../active/user_recovery_form_active/user_recovery_form_active.component';
import UserRecoveryConfirmFormActive from '../../active/user_recovery_confirm_form_active/user_recovery_confirm_form_active.component';
import UserRecoveryChangeFormActive from '../../active/user_recovery_change_form_active/user_recovery_change_form_active.component';
import UserRecoverySuccessFormActive from '../../active/user_recovery_success_form_active/user_recovery_success_form_active.component';
import UserRecoveryInfoView from '../user_recovery_info_view/user_recovery_info_view.component';

//...component...
const UserRecoveryView = () => {

    //...state...
    const [optionSelect, setOptionSelect] = useState('op_rec');
    const [userName, setUserName] = useState('');
    const [recoveryEmail, setRecoveryEmail] = useState('');

    //...render...
    return (
        <Fragment>
            <div className='user_recovery_view-base'>
                <div className='my-container'>
                    <div className='user_recovery_view-container'>
                        <div className='user_recovery_view-container-leftBlock'>
                            {optionSelect === 'op_rec' &&
                                /*pide el correo electrónico y envia un mail*/
                                <UserRecoveryFormActive 
                                    setUserName={setUserName}
                                    setOptionSelect={setOptionSelect}
                                    setRecoveryEmail={setRecoveryEmail}
                                />
                            }
                            {optionSelect === 'op_rec_conf' &&
                                 /*pide el codigo enviado por mail*/
                                <UserRecoveryConfirmFormActive 
                                    userName={userName}
                                    setOptionSelect={setOptionSelect}
                                    recoveryEmail={recoveryEmail}
                                /> 
                            }
                            {optionSelect === 'op_rec_chan' &&
                                /*pide la nueva contraseña*/
                                <UserRecoveryChangeFormActive 
                                    setOptionSelect={setOptionSelect}
                                    recoveryEmail={recoveryEmail}
                                />
                            }
                            {optionSelect === 'op_rec_succ' &&
                                /*mensaje de que todo terminó bien*/
                                <UserRecoverySuccessFormActive 
                                    userName={userName}
                                />
                           }
                        </div>
                        <div className='user_recovery_view-container-rightBlock'>
                           <UserRecoveryInfoView />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the component "view"...
export default UserRecoveryView;