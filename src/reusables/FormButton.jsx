import React from 'react'

const FormButton = ({text,type}) => {
  return (
    <>
        <button 
        type={type || 'submit'}
        className={`w-full bg-orange-950 text-white py-2 rounded-sm hover:bg-orange-900`}>{text}</button>
    </>
  )
}

export default FormButton