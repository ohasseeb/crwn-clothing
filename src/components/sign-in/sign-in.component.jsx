import React from 'react';
import FormInput from "../form-input/form-input.component"
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',

        }
    }// end ctor

    handleSubmit = event =>{ 
        event.preventDefault();
        this.setState({email: "", password: ""})
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
                value={this.state.email} 
                required
                label="email"
                handleChange={this.handleChange}
                
                />
                <FormInput 
                name="password"
                 type="password" value={this.state.password} required handleChange={this.handleChange} label="password"/>
                <input type="submit" value="Submit"></input>
            </form>



        </div>
        );
    }

}// end class

export default SignIn;