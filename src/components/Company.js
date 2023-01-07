import React from 'react'

function Company() {
  return (
    <div className='m-2 p-3 bg-white text-blue-1  active:bg-blue-1 active:text-white rounded-lg'>
        <div className='flex justify-between items-center'>
            <h2>Compnay name</h2>
            <h3>CODE</h3>
        </div>
        <div className='flex justify-between items-center'>
            <p>8 Entities</p>
            <p>64 Users</p>
        </div>
    </div>
  )
}

export default Company