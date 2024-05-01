import React from 'react'
import SkeletonCard from './SkeletonCard'

export default function DataGrid() {

  return (
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 w-full items-center justify-center max-h-[830px] overflow-y-auto'>
       
      
      {Array(8)
        .fill(6)
        .map((_, index) => (
           <SkeletonCard key={index} />
        ))}
     
    </div>
  )
}
