import { useState } from "react"

const App = () => {
  const submithandler=(e)=>{
    e.preventDefault()
    console.log(username)
    // setUsername('')
  }
  const [username, setUsername] = useState('')
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