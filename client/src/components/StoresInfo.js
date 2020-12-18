import React from 'react';
import StoreInfoCard from './StoreInfoCard';
import { useSelector } from 'react-redux';

function StoresInfo() {
  const items = useSelector((state) => state.mainReducer.itemList);

  return (
    <div className='list-class'>
      {items.map((storeData) => (
        <StoreInfoCard key={storeData.store} storeData={storeData} />
      ))}
    </div>
  );
}

export default StoresInfo;
