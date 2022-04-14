import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

function Edit() {

    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [number,setNumber]= useState("")   

const {id}= useParams();

const contacts = useSelector(state=>state)

const currentContact = contacts.find(contact=>contact.id === parseInt(id))

const navigate = useNavigate()

const dispatch = useDispatch()

useEffect(()=>{
    if(currentContact){
        setName(currentContact.name)
        setEmail(currentContact.email)
        setNumber(currentContact.number)
    }

},[currentContact])

const handleSubmit =(e)=>{
    e.preventDefault();

    const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email )
    const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number))

    if(!email || !number || !name ){
        return toast.warning("Please fill in all fields")
    }

    if(checkEmail){
        return toast.error("This email already Exists");
    }
    if(checkNumber){
        return toast.error("This number already exists")
    }

    const data={
        id:parseInt(id),
        name,
        email,
        number
    }
   dispatch ({type:"UPDATE_CONTACT",payload:data})
   toast.success("student updated successfully")
  navigate("/")
}

    return (
        <div className="container">
            {
                currentContact
                ?
                <>
                 <div className="row">
            <h1 className="display-3 text-center my-5">
               Edit Student {id}
            </h1>
            <div className="col-md-6 shadow mx-auto">
                    <form  className="p-5" onSubmit={handleSubmit}>
                        <div className="form-group my-2">
                            <input 
                            type="text" 
                            placeholder='Name' 
                            className='form-control'
                            value={name}
                            onChange={e=>setName(e.target.value)}
                             />
                        </div>
                        <div className="form-group my-2">
                            <input 
                            type="email" 
                            placeholder='Email'  
                            className='form-control'
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-2">
                            <input 
                            type="number" 
                            placeholder='Phone Number'
                            className='form-control'
                            value={number}
                            onChange={e=>setNumber(e.target.value)} 
                            />
                        </div>
                        <div className="form-group my-2">
                            <input type="submit" value="Update Student" className="btn btn-dark"/>
                            <Link to="/" className="btn btn-danger mx-3">Cancel</Link>
                        </div>
                       
                    </form>
            </div>
        </div>
                </>
                :
                <h1 className="display-3 my-5 text-center ">the student contact with the id {id} cannot be found</h1>
            }
       
    </div>
    )
}

export default Edit
