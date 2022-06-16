import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className='text-center flex justify-center my-5'>
        <img src={loading} alt="loading" height={30} width={30} />
      </div>
  )
}

export default Spinner


