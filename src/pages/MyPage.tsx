import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyPage() {
  const navigate = useNavigate();
  
  return (
    <div>
      <button onClick={() => {
        navigate("/")
      }}>go home</button>
      MyPage
    </div>
  )
}
