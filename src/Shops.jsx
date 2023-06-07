import React, { useState } from 'react';

function Shops() {
  const [selectedStore, setSelectedStore] = useState(null);
  const stores = ['Shop1', 'Shop2','Shop3','Shop4','Shop5','Shop6','Shop7',];

  const handleStoreSelection = (store) => {
    setSelectedStore(store);
  };

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '30%',
      backgroundColor: '#157347',
    }}
  >
    {selectedStore ? (
      <p style={{ color: 'white', fontSize: '24px' }}>
        Selected store: {selectedStore}
      </p>
    ) : (
      <div>
        <p style={{ color: 'white', fontSize: '35px', textAlign: 'center' }}>Select a store:</p>
        {stores.map((store) => (
          <button
          className='btn btn-danger ms-2'
            key={store}
            onClick={() => handleStoreSelection(store)}
            style={{ margin: '10px', padding: '10px 20px', fontSize: '18px' }}
          >
            {store}
          </button>
        ))}
      </div>
    )}
  </div>
);
}

export default Shops;