import React from 'react'

const HomeSectionCard = ()=> {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw02hejKBq_aVwjRwF2Uwjw5&ust=1721931084608000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOigzNamwIcDFQAAAAAdAAAAABAD" alt=""/>
        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Men Solid Pure cotton straigh kurta</p>

        </div>

    </div>
  )
}

export default HomeSectionCard