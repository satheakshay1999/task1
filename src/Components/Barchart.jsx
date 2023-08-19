import React from 'react'

const Barchart = () => {
  return (
    <div className='d-flex justify-content-between mt-5' style={{width: '300px', height: '50px'}}>
        <div className='border' style={{width: '50px'}}>
            <h1 className='ml-auto mr-auto'>a</h1>
        </div>  
        <div className='bg-primary' style={{width: '50px'}}>
            <h1 className='ml-auto mr-auto text-white text-center' >18</h1>
        </div>
        <div className='d-flex justify-content-between' style={{width: '100px' , height: '50px'}}>
            <button className='btn btn-dark mr-8'>+</button>
            <button className='btn btn-dark ml-8'>-</button>
        </div>
    </div>
  )
}

export default Barchart
