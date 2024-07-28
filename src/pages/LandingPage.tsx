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
        go to MyPage
      </button>
      랜딩 페이지
      <h1>어서오세요!</h1>
      <h2>키덕키득입니다~</h2>
    </div>
  )
}
