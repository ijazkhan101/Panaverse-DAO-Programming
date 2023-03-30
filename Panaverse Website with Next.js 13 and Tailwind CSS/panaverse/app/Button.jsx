
import React from 'react'

const  Button = ({children}) =>{
  return (
    <div>
        <button className='px-4 py-2 mt-1 ml-3 text-white bg-blue-500 rounded-md'>{children}</button>
    </div>
  )
}

export default  Button;