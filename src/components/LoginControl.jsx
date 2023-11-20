import React, {Component} from 'react'

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
                        <button onClick={this.handleLogoutClick} className="logbutton">로그아웃</button>
                        <p style={{marginLeft:'80px'}}>환영합니다!</p>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.handleLoginClick} className="logbutton">로그인</button>
                        <p style={{marginLeft:'80px'}}>로그인 해주세요!</p>
                    </div>
                )}
            </div>
        );
    }
}
export default LoginControl;