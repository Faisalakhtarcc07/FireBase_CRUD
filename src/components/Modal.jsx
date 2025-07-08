import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ( {onClose, isOpen, children} ) => {
  return createPortal(
    <>{isOpen && (
        <div 
        className='absolute grid place-items-center top-0 z-40 backdrop-blur h-screen w-screen '
        >
        <div className='m-auto z-50 relative min-h-[200px] min-w-[80%] bg-white p-4'>
            <div className='flex justify-end'>
                <AiOutlineClose onClick={onClose} className='text-2xl'/>
            </div>
            {children}f
        </div>
        </div>
    )} 
    </>
  ,document.getElementById("modal-root"));
};

export default Modal