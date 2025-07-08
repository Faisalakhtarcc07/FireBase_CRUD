import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclouse from '../hooks/useDisclouse'
import { ToastContainer, toast } from 'react-toastify';

const ContactsCard = ({contact}) => {

  const {onClose, onOpen, isOpen} = useDisclouse();

  const deleteContact = async (id) => {
    try{
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully")
    }catch(error){
      console.log(error);
    }
  };

  return (
  <>
    <div key={contact.id} className='flex items-center justify-between rounded-lg bg-yellow-200 p-2'> 
      <div className='flex gap-1'>
        <HiOutlineUserCircle className='text-4xl text-orange-400'/>
          <div className=''>
            <h2 className='font-medium'>{contact.name}</h2>
            <p className='text-sm'>{contact.email}</p>
          </div>
      </div>
      <div className='flex text-3xl'>
        <RiEditCircleLine onClick={onOpen} className='cursor-pointer' />
        <IoMdTrash onClick={() => deleteContact(contact.id)}
        className='text-orange-400 cursor-pointer'/>
      </div>
    </div>

    <AddAndUpdateContact 
    isUpdate 
    contact = {contact} 
    isOpen={isOpen}
    onClose={onClose} 
    />

  </>
  )
}

export default ContactsCard