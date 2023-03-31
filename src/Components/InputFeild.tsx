import React from 'react'
import './styles.css'
const InputFeild = () => {
  return (
    <form className="input">
        <input type="input" placeholder='Enter a task' className='inputbox'/>
        <button className='inputsub' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild
