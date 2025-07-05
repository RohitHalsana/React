import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const {userid} = useParams()
    return (
    
    <div className='bg-pink-200'>User: {userid}</div>
  )
}

export default User