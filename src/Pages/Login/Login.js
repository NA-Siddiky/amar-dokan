import React from 'react';
import './Login.css';
import logInbg from '../../images/logIn.jpg';
import googleLogo from '../../images/google.png';
import facebookLogo from '../../images/facebook.png';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    return (
        <section className="login-section">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">

                <div className="row w-75 login-card">
                    <div className="col-md-5">
                        <img src={logInbg} alt="" />
                    </div>
                    <div className="col-md-7 py-3 d-flex justify-content-center align-items-center">
                        <div>
                            <button className='btn btn-login px-5 mb-3 m-auto'> <img src={googleLogo} alt="" /> Sign in with Google    </button>
                            <br />
                            <button className='btn btn-login px-5 m-auto'> <img src={facebookLogo} alt="" /> Sign in with Facebook </button>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default Login;