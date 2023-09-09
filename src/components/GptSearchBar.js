import React from 'react'

const GptSearchBar = () => {
  return (
    <div className="flex w-full justify-center h-fit mt-[8%] py-5">
      <form className="bg-black py-3 px-3 rounded-md ">
        <input className='w-[30vw] bg-white py-2 px-4 mr-4 rounded-sm text-lg text-gray-700 outline-none'
        type='text' 
        placeholder='what would you like see today?' />
        <button className='bg-red-600 text-black px-4 py-2 rounded-sm'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
