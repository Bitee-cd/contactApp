import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

function Add() {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [number,setNumber]= useState("")

    const dispatch= useDispatch();
    const navigate = useNavigate()

    const contacts = useSelector((state)=>state)
   
    const handleSubmit =(e)=>{
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email)
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number)

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
            id:contacts[contacts.length-1].id+1 ,
            name,
            email,
            number
        }
       dispatch ({type:"ADD_CONTACT",payload:data})
       toast.success("student added successfully")
      navigate("/")
    }

    return (
    <div className="container">
        <div className="row">
            <h1 className="display-3 text-center my-5">
                Add Student
            </h1>
            <div className="col-md-6 shadow mx-auto">
                    <form  className="p-5" onSubmit={handleSubmit}>
                        <div className="form-group my-2">
                            <input type="text" placeholder='Name' className='form-control'
                            value ={name} onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="form-group my-2">
                            <input type="email" placeholder='Email'  className='form-control'
                            value ={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group my-2">
                            <input type="number" placeholder='Phone Number'className='form-control'
                            value ={number} onChange={(e)=>setNumber(e.target.value)} />
                        </div>
                        <div className="form-group my-2">
                            <input type="submit" value="Add Student" className="btn btn-dark btn-lg w-100"/>
                        </div>
                    </form>
            </div>
        </div>
    </div>
    )
}

export default Add
