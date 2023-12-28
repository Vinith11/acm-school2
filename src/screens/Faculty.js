import React from 'react'
import Ronaldo from "../assets/Ronaldo.webp"

const Faculty = () => {
  return (
    <div id="event" className="py-16">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Faculty</h2>
      </div>

      <div className='flex justify-center items-center '>
          <div className='rounded-lg shadow-xl h-[275px] w-[200px]'>
            <img 
            src={Ronaldo} 
            alt="" 
            className='m-1 h-[180px] w-[180px]'/>

          </div>
      </div>
    </div>
  )
}

export default Faculty