import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

//...we import the css style file...
import './user_data_view.component.css';

//...we import the "active" component...
import UserDataSelectActive from '../../active/user_data_select_active/user_data_select_active.component';


//...component...
const UserDataView = (props) => {

    //...props...
    const userName = props.userName;
    const userLastname = props.userLastname;
    const userId = props.userId;
    const userToken = props.userToken;
    const setUserName = props.setUserName;
    const setUserLastname = props.setUserLastname;
    const userNewsletter = props.userNewsletter;
    const setUserNewsletter = props.setUserNewsletter;    

    //...render...
    return (
        <Fragment>
            <div className='user_data_view-base'>
                <div className='my-container'>
                    <div className='user_data_view-container'>
                        <div className='user_data_view-container-leftblock'>
                            <UserDataSelectActive 
                                userName={userName}
                                userLastname={userLastname}
                                userId={userId}
                                userToken={userToken}
                                setUserName={setUserName}
                                setUserLastname={setUserLastname}
                                userNewsletter={userNewsletter}
                                setUserNewsletter={setUserNewsletter}
                            />
                        </div>
                        <div className='user_data_view-container-rightblock'>
                            {/* info */}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//...we export the "view" component...
export default UserDataView;