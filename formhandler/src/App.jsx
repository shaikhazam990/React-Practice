import React, { useState } from 'react';


const App = () => {

  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')

  const [alluser, setAlluser] = useState([])

  const formhandler= (e)=>{
    e.preventDefault()
    console.log(title)

    const oldUser = [...alluser]

    oldUser.push({title,email})

    console.log(oldUser)

    setAlluser(oldUser)

    setTitle('')
    setEmail('')

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
        <input type="text" 
        placeholder='enter email'
        value={email}
        required
        onChange={(e)=>{ setEmail(e.target.value)}}

       />

        <button>Submit</button>
      </form>

      {alluser.map((elem,indx)=>{

        return <div key={indx}>
          <h1>{elem.title}</h1>
          <p>{elem.email}</p>

        </div>

      })}
    </div>
  )
}

export default App