import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail]= useState();
    const [passward, setPassword]= useState();
    
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            // createWithEmailPassword(auth, email,passward)
           await signInWithEmailAndPassword(auth, email ,passward)
            console.log("Login successfly");

        }catch(error){
            console.log(error);
        }

    }

  return (
    <div className='SignUp-container '>
       <form className='Signup-form ' onSubmit={handleSubmit}>
       <h2 className=''>Login</h2>
        <label htmlFor='email' >
            Email:
            <input className='w-full p-20 mt-5 mb-10 border-r-4' type='email' onChange={(e)=> setEmail(e.target.value)} placeholder='Email.com'  />

        </label>
        <label htmlFor='email'>
            Passward:
            <input className='w-full p-20 mt-5 mb-10 border-r-4' type='Password' onChange={(e)=> setPassword(e.target.value)} placeholder='Password' />

        </label>
          <button type='submit' className='bg-green-300 text-white py-10 px-10 cursor-pointer border-r-4'><Link to="/">Login</Link></button>
          <p>Don`g Have Account? <Link to="/signup">Registred</Link></p>
          

       </form>
      
    </div>
  )
}

export default Login;


