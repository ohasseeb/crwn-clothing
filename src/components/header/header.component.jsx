import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils'

import {connect} from 'react-redux'; // HOC

import './header.styles.scss'



const Header = () => (
    <div className ='header'>
        <Link className="logo-container" to="/">
        <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            
            <Link className="option" to="/signin">
                CONTACT
            </Link>

            <Link>
            {
                auth.currentUser ? 
                <div className='optiion' onClick={() => auth.signOut()}> 
                <Link className='option' to="/"> SIGN OUT</Link>
                </div>

                : 
                <Link className='option' to="/signin"> SIGN IN</Link>
            }
            
            </Link>


        </div>



    </div>


)


const mapStateToProps = state => ({

    currentUser: state.user.currentUser
});


export default  connect(mapStateToProps)(Header);