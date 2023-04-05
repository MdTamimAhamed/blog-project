import React, { useState } from 'react'
import InputHandlerLogin from './InputHandlerLogin'
import FormButton from '../reusables/FormButton'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <>
        <div className='w-full h-[80px] flex justify-center items-center bg-orange-200'>
            <div className='w-[1200px] flex justify-between items-center'>
                <h1 className='text-xl text-orange-950 font-semibold uppercase'>Blog Project</h1>
                <div>
                    <p className='text-orange-950'>New here? 
                        <span className='px-2 font-semibold hover:underline hover:cursor-pointer'>
                            <Link to='/signup'>Signup</Link></span>
                    </p>
                </div>
            </div>
        </div>
        <form className='h-[90vh] flex justify-center items-center'>
            <div className='w-[400px] bg-orange-100 p-8 rounded-sm'>
                <h1 className='text-xl font-bold pb-4'>Login</h1>
                <div>
                    <label>Email address</label>
                    <InputHandlerLogin
                        type='text'
                        state = {email}
                        setState = {setEmail}
                        placecholder='Email'
                    />
                </div>
                <div className='pt-3'>
                    <label>Password</label>
                    <InputHandlerLogin
                        type='password'
                        state = {password}
                        setState = {setPassword}
                        placecholder='Password'
                    />
                </div>
                <div className='pt-3'>
                    <FormButton
                        text = 'Login'
                        type = 'Submit'
                    />
                </div>
            </div>
        </form>
    </>
  )
}

export default Login