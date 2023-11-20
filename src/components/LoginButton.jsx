import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class LoginControl extends Component {
    constructor(props){
        super(props);
        this.state={isLoggedIn:false};
    }
    handleLoginClick = () => {
        this.setState({isLoggedIn:true});
    };
    handleLogoutClick = () => {
        this.setState({isLoggedIn:false});
    };
    render(){
        const isLoggedIn=this.state.isLoggedIn;
        return (
            <div>
                {isLoggedIn ? (
                    <div>
                        <Link className="loginpage" to={'/pages/LoginPage'}><button onClick={this.handleLoginClick} className="logbutton">로그인</button></Link>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.handleLoginClick} className="logbutton">로그인</button>
                    </div>
                )}
            </div>
        );
    }
}
export default LoginControl;