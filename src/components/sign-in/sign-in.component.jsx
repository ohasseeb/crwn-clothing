import React from 'react';
import FormInput from "../form-input/form-input.component"
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss'

import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',

        }
    }// end ctor

    handleSubmit =  async event =>{ 
        event.preventDefault();
        this.setState({email: "", password: ""})
        
        try {
            await auth.signInWithEmailAndPassword(this.state.email ,  this.state.password);
            this.setState({email: "", password: ""});

        } catch(error){
            console.log(error);
        }
        
   
    }

    handleChange = event =>{

        const { value, name } = event.target;
        this.setState({[name]:value});

    }// end HandleChange



    render(){
        return(
        <div className='sign-in'>
            <h2>I already have an accout</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name="email" 
                label="email"
                handleChange={this.handleChange}
                value={this.state.email} 
                required

                />
                <FormInput 
                name="password"
                 type="password"
                  value={this.state.password} 
                  required 
                  handleChange={this.handleChange} 
                  label="password"
                  />
                  <div className="buttons"> 
                  <CustomButton type="submit">Sign In</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google </CustomButton>
  
                  </div>
            
                </form>



        </div>
        );
    }

}// end class

export default SignIn;