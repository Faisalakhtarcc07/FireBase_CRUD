import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDoc, getDocs, onSnapshot, snapshotEqual } from 'firebase/firestore'
import { db } from "./config/firebase"
import ContactsCard from './components/ContactsCard'
import Modal from './components/Modal'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import { ToastContainer, toast } from 'react-toastify';
import NotFoundContact from './components/NotFoundContact'

// Created .js file named validation to handle empty form fill up
// import * as Yup from "yup";

// const contactSchemaValidation = Yup.object().shape({
//   name : Yup.string().required("Name is Required"),
//   email : Yup.string().email("Invalid Email").required("Email is Required"),
// });

function App() {

  const [contacts, setContacts] = useState([])

  const [isOpen, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect( () => {
    const getContacts = async () => {
      try{
        const contactsRef = collection(db,"contacts")

        //Need To Refresh
        // const contactsSnapshot = await getDocs(contactsRef)

        // For Real Time Update !!!
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return{
              id : doc.id,
              ...doc.data(),
            }
          });
          // console.log(contactLists)
          setContacts(contactLists);
          return contactLists;
        });

      } catch (error){
        console.log(error)
      }
    };

    getContacts();
  },[]);

  const filterContacts = (e) => {
    const value = e.target.value;

      const contactsRef = collection(db,"contacts")
      
      onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return{
          id : doc.id,
          ...doc.data(),
        }
      });

      const filteredContacts = contactLists.filter((contact) => 
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  }

  return (
    <>
   
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar/>
      <div className='flex gap-2'>
        <div className='relative flex items-center flex-grow'>
          <HiMagnifyingGlass className='absolute ml-1 text-white text-3xl'/>
          <input 
            onChange={filterContacts}
            type="text" 
            className='pl-9 h-10 flex-grow rounded-md border border-white bg-transparent text-white'
          />
        </div>

        <FaCirclePlus 
        onClick={onOpen} 
        className='text-white cursor-pointer text-5xl'/>
      
      </div>

      <div className='mt-4 gap-3 flex flex-col'>
        {contacts.length <= 0 ? <NotFoundContact/> : contacts.map((contact) => (
            <ContactsCard key = {contact.id} contact={contact} />
        ))}
      </div>
    </div>

    <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
    <ToastContainer 
      position="bottom-center"/>
    </>

  )
};

export default App
