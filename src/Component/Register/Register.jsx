import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase-init';

const Register = () => {
  const [errorMessage,setErrorMessage] = useState('');
  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    setErrorMessage('')

    // create user 

    createUserWithEmailAndPassword(auth,email,password)
    .then(result =>{
      console.log(result)
    })
    .catch(error => {
      console.log(error)
      setErrorMessage(error.message)
    })

  }
  return (
    <div className='max-w-sm  border-2  p-4 mx-auto my-auto'>
      <h1 className='p-2 text-2xl font-bold'>This is Register</h1>
      <form onSubmit={handleRegister}>
        {/* Email  */}
        <div className='space-y-4'>
          <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" name='email' placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        {/* password  */}
        <div>
          <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              name='password'
              required
              placeholder="Password"

            />
          </label>
          <input className='btn btn-primary' type="submit" value="Submit" />
        </div>

      </form>
      {
        errorMessage && <p className='text-red-500'>{errorMessage}</p>
      }
    </div>
  );
};

export default Register;