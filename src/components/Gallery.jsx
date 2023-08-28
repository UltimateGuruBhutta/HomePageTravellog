import React from 'react'

function Gallery() {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-grey-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
         <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="/" className='w-full h-full object-cover '/>

         </div>
         <div>
            <img src=" https://images.unsplash.com/photo-1619957858854-1e43dfba3c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="/" className='w-full h-full object-cover '/>
            
         </div>
         <div>
            <img src="https://images.unsplash.com/photo-1628087236657-0cc963ad15fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="/" className='w-full h-full object-cover '/>
            
         </div>
         <div>
            <img src="https://images.unsplash.com/photo-1470043201067-764120126eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="/" className='w-full h-full object-cover '/>
            
         </div>
         <div>
            <img src="https://plus.unsplash.com/premium_photo-1687996106476-9e851e2b0eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="/" className='w-full h-full object-cover '/>
            
         </div>
      </div>
    </div>
  )
}

export default Gallery