import React from 'react'

const NotFoundContact = () => {
  return (
    <div className='flex h-[50vh] justify-center items-center gap-4'>
        <div>
            <img src="Contact.svg" alt="" />
        </div>
        <h3 className='text-white text-2xl font-semibold'>Contact Not Found</h3>
    </div>
  )
}

export default NotFoundContact