import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [emailError, setEmailError]=useState('');
    const [pwError, setPwError]=useState('');
    const [emailValid, setEmailValid]=useState(false);
    const [pwValid, setPwValid]=useState(false);
    const [notAllow, setNotAllow]=useState(true);

    const handleEmail=(e) => {
        setEmailError(e.target.value);
        const regex =/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(emailError)){
            setEmailValid(true);
        }
        else{
            setEmailValid(false);
        }
    }

    const handlePassword=(e) => {
        setPwError(e.target.value);
        const regex =/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(pwError)) {
        setPwValid(true);
      }
      else{
        setPwValid(false);
      }
    }


    useEffect(() => {
        if(emailValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);

  return (
    <div className="page">
        <div className="title-wrap">
            이메일과 비밀번호를<br/> 입력해주세요
        </div>
        <div className="content-wrap">
            <div className="inputTitle" id="이메일">
                이메일 주소
            </div>
            <div className="input-wrap">
                <input type="text" className="input" value={emailError} onChange={handleEmail}></input>
            </div>
        </div>
        <div className="errorMessage-wrap">
            <div id='emailerror'>
                {
                    !emailValid && emailError.length > 0 && (
                        <div>올바른 이메일을 입력해주세요.</div>
                    )
                }
            </div>
        </div>
        <div className="content-wrap">
            <div className="inputTitle" id="비밀번호">
                비밀번호
            </div>
            <div className="input-wrap">
                <input type="password" className="input" placeholder="영문, 숫자, 특수문자 포함 8자 이상" value={pwError} onChange={handlePassword}></input>
            </div>
            <div className="errorMessage-wrap">
                <div id='pwerror'>
                {
                        !pwValid && pwError.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상</div>
                        )
                    }
                </div>
            </div>
        </div>
        <div>
            <button disabled={notAllow} className="bottomButton">
                확인
            </button>
        </div>

    </div>
  )
}
