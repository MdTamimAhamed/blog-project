import React from 'react'

const Home = () => {

    const nav_items = [
        {id:1, item_name:'Home'},
        {id:2, item_name:'Post'},
        {id:3, item_name:'Blog'},
        {id:4, item_name:'About'}
    ]

  return (
    <div className='w-full h-[80px] flex justify-center items-center bg-orange-200'>
        <div className='w-[1200px] flex justify-between items-center'>
            <h1 className='text-xl text-orange-950 font-semibold uppercase'>Blog Project</h1>
            <div>
                <ul className='flex justify-end items-centers'>
                    {nav_items.map((item)=>(
                        <li 
                          key={item.id}
                          className='mx-4 font-medium hover:underline hover:cursor-pointer'
                          >{item.item_name}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home