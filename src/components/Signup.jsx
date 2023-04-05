import React, { useState } from 'react'
import InputHandlerSignup from './InputHandlerSignup'
import FormButton from '../reusables/FormButton'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [ user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

  return (
    <>
        <div className='w-full h-[80px] flex justify-center items-center bg-orange-200'>
            <div className='w-[1200px] flex justify-between items-center'>
                <h1 className='text-xl text-orange-950 font-semibold uppercase'>Blog Project</h1>
                <div>
                    <p className='text-orange-950'>Already have an account? 
                        <span className='px-2 font-semibold hover:underline hover:cursor-pointer'>
                            <Link to='/'>Login</Link></span>
                    </p>
                </div>
            </div>
        </div>
        <form className='h-[90vh] flex justify-center items-center'>
            <div className='w-[400px] bg-orange-100 p-8 rounded-sm'>
                <h1 className='text-xl font-bold pb-4'>Signup</h1>
                <div>
                    <label>Username</label>
                    <InputHandlerSignup
                        type='text'
                        state = {user}
                        setState = {setUser}
                        placecholder='Username'
                    />
                </div>
                <div className='pt-3'>
                    <label>Email address</label>
                    <InputHandlerSignup
                        type='text'
                        state = {email}
                        setState = {setEmail}
                        placecholder='Email'
                    />
                </div>
                <div className='pt-3'>
                    <label>Password</label>
                    <InputHandlerSignup
                        type='password'
                        state = {password}
                        setState = {setPassword}
                        placecholder='Password'
                    />
                </div>
                <div className='pt-3'>
                    <label>Confirm password</label>
                    <InputHandlerSignup
                        type='password'
                        state = {confirmPass}
                        setState = {setConfirmPass}
                        placecholder='Re-type passward'
                    />
                </div>
                <div className='pt-3'>
                    <FormButton
                        text = 'Signup'
                        type = 'Submit'
                    />
                </div>
            </div>
        </form>
    </>
  )
}

export default Signup