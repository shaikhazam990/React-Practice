import { useState } from "react"

const App = () => {
    const [username, setUsername] = useState('')

    const [allUser, setAllUser] = useState([])
  const submithandler=(e)=>{
    e.preventDefault()

    const newAllUser = [...allUser]
    newAllUser.push(username)
    setAllUser(newAllUser) 
    console.log(newAllUser)
    setUsername('')
  }
  return (
    <main>
      <div className="form-conatiner">
        <form onSubmit={(e)=>{
         submithandler(e)
          
        }}>
          <input
            type="text"
            placeholder='Enter your name'
            value={username}
            required
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
             />
             
             <button>submit</button>
        </form>
      </div>
    </main>

  )
}

export default App