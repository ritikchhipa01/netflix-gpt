import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='px-[5%] absolute bg-gradient-to-r from-black/80 w-screen aspect-video flex flex-col justify-center z-[99]'>
    <h1 className='text-4xl font-bold text-white'>
        {title}
    </h1>
    <p className='text-lg py-3 w-1/4 text-white'>
        {overview}
    </p>
    <div className='flex gap-5'>
        <button className='px-14 py-3 font-bold text-lg bg-white text-black rounded-md hover:bg-white/80'>
            Play
        </button>
        <button className='px-12 py-3 text-lg bg-[#373736]/50 text-white rounded-md hover:bg-[#373736]/70'>
            More Info
        </button>
    </div>
    </div>
  )
}

export default VideoTitle
