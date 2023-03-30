import React from 'react'
import { FC } from 'react'
const Wrapper:FC<{children :React.ReactNode}>  =({children}) =>{
  return (
    <div className='mx-auto max-w-screen-2xl'>
            {children}
    </div>
  )
}

export default Wrapper