import React from 'react'

const Footer = () => {
  return (
    <div className='py-8 bg-slate-800'>
     <div className='container mx-auto px-6 text-center'>
       <p className='text-gray-400'>
        &copy; {new Date().getFullYear()} Abhay Kumar. All rights reserved.
       </p>
     </div>
      
    </div>
  )
}

export default Footer 