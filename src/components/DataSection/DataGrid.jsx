import React from 'react'
import SkeletonCard from './SkeletonCard'
import { useState, useEffect  } from 'react';
import { getDeals } from '../../api/getDeals';
import DealCard from './DealCard';

export default function DataGrid() {
  const [loading, setLoading] = useState(true);
    const [dealsList, setDealsList] = useState([])

  async function fethchDeals() {
    setLoading(true)
  try {
    const deals = await getDeals();
    setDealsList(deals); 
  } catch (error) {
    console.log(error)
  }
     setLoading(false);
}
  useEffect(() => { 
     
     fethchDeals() 
    
  },[])

  return (
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 w-full items-center justify-center max-h-[830px] overflow-y-auto'>
       
      {loading ? (
        // Render skeleton cards while data is fetching
        Array(8).fill(null).map((_, index) => (
          <SkeletonCard key={index} />
        ))
      ) : (
        // Render DealCard components when data is fetched
        dealsList.map((item, idx) => (
          <DealCard key={idx} item={item} />
        ))
      )}
    </div>
  )
}
