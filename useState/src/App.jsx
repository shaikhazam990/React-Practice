import React, { useState } from 'react';


const App = () => {

  const [nums, setNums] = useState(0)
  return (
    <div className='box'>
      <h1>hello</h1>
      <h1>{nums}</h1>
      <button onClick={()=> setNums(nums+1)}>increase</button>
      <button onClick={()=>setNums(nums+5)}> jump by 5</button>
      <button onClick={()=> setNums(nums-1)}>decrease</button>
      <button onClick={()=>setNums(0)} >Reset</button>



    </div>
  )
}

export default App