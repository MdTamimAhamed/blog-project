import React from 'react'

const InputHandlerLogin = ({state, setState, type, placecholder}) => {
  return (
    <>
        <div>
            <input className='w-full h-10 border border-orange-900 rounded-sm px-3 outline-none'
                value={state}
                onChange={(e)=>setState(e.target.value)}
                type = {type || 'text'}
                placeholder={placecholder}
            />
        </div>
    </>
  )
}

export default InputHandlerLogin