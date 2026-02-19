import React from 'react'

function Layout() {
  return (
    <>
      <div className='bg-red-300 p-2 flex  justify-around flex-col'>
        <h1>Parent</h1>

        <div className='flex justify-center align-middle bg-amber-300'>
          <h1>Child1</h1>
        </div>
        <div className='flex justify-end bg-blue-600'>
           <h1>Child2</h1>
        </div>


      </div>
    </>
  )
}

export default Layout
