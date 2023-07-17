import React ,{FC}from 'react'

export const Wrapper :FC<{children:React.ReactNode}>= ({children}) => {
  return (
    <div className='max-w-7xl mx-auto px-3 md:px-10 '>
{children}
    </div>
  )
}
