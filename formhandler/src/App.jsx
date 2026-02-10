import React, { useState } from 'react';


const App = () => {

  const [title, setTitle] = useState('')

  const formhandler= (e)=>{
    e.preventDefault()
    console.log(title)

    setTitle('')

  }


  return (
    <div className='box'>
      <form onSubmit={(e)=>{
        formhandler(e)
      }} >
        <input type="text" 
        placeholder='enter name'
        value={title}
        required
        onChange={(e)=>{ setTitle(e.target.value)}}

       />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App