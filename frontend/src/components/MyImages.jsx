import React from 'react'

const MyImages = () => {
  return (
    <div>
        <div className='w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-sm text-white mb-3'>
            <label className='text-center cursor-pointer' htmlFor="image">Upload image</label>
            <input type="file" id='image'  className='hidden'/>
        </div>
        <div className='h-[77vh] overflow-x-auto flex justify-start items-start'>
            <div className='grid grid-cols-2 gap-2  '>
                {
                    [1,2,3,4,45,56,87,98,90,3,3,3,34,34,23,45,67,89].map((img,i) => <div key={i} className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
                        <img className='w-full h-full object-fill' src={`http://localhost:5173/project.jpeg`} alt="" />

                    </div>)
                }

            </div>

        </div>
    </div>    
  )
}

export default MyImages