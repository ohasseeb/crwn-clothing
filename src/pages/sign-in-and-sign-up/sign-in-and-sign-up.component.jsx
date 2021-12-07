import React from  'react';
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    {/* <div className ='sign-in-and-sign-up'> SIGN IN</div>
    <div className="sign-in-and-sign-up"> SIGN OUT</div> */}
    </div>
)

export default SignInAndSignUp;