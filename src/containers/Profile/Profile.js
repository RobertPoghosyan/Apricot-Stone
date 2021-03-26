import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';

import fbService from 'api/fbService';
import { AppContext } from 'context/AppContext';
import {actionTypes} from 'context/actionTypes';

import user from "assets/user.svg"

import './Profile.scss';

const Profile = () => {
    const history = useHistory();
    const context = useContext(AppContext)

    const logoutHandler = async ()=>{
       await fbService.userService.logout()
       localStorage.removeItem('user')
       context.dispatch({type:actionTypes.REMOVE_USER})
       history.push("/auth")
    }
    
    return (
        <div className = "app-profile">
            <div className = "app-profile__credentials">
                <div className = "app-profile__icon">
                    <img src ={user}></img>  
                </div>
                <div className = "app-profile__user">
                    <ul>
                        <li>Username : <span>Robert</span></li>
                        <li>E-mail : <span>rob@aa.com</span></li>
                        <li>Password : <span>Test@123</span></li>
                    </ul>
                </div>
            </div>
            
            <div className = "app-profile__logout">
             <button onClick = {logoutHandler}>Logout</button>
            </div>
        </div>
    )
}

export default Profile;
