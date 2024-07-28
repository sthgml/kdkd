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
      LandingPage
    </div>
  )
}
