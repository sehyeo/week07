import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate=useNavigate();
  const onClickButton = () => {
    navigate('/');
  }
  return (
    <div className='page-container'>
      <div style={{
        margin:'60px',
        fontSize:'48px',
        fontWeight:'bold',marginBottom:'32px'
      }}>해당페이지를 찾지 못했습니다.</div>
      <div style={{
        margin:'60px',
        fontSize:'32px',
        lineWeight:'1.6'
      }}>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
      <div onClick={onClickButton} style={{
        marginLeft:'60px',
        fontSize:'32px',
        lineWeight:'1.6',
        color:'red',
        cursor:'pointer'
      }}>메인페이지로 이동</div>
    </div>
  )
}
