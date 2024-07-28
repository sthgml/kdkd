import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <button 
        onClick={() => {
          navigate("/mypage")
        }}
      >
        마이페이지로 가기
      </button>
      <h1>어서오세요!</h1>
      <h2>키덕키득에 오신 걸 환영해요!</h2>
    </div>
  )
}
