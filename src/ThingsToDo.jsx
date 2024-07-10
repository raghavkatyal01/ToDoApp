import React from 'react'

function thingsToDo({toDoVal,onDone}) {
   
  return (
    <>
    
      <h1>Things to Do</h1>
      {toDoVal.map((p,index)=>{

           return (
            <>
            <div key={index} className='flex ml-2 w-16 justify-between'>
        <input type="checkbox" name="inptCheckbox" value="" onChange={()=> onDone(index)}></input>
           <p>{p}</p>
           </div>
           </>
           )
      })

      
    }
    </>
  )
}

export default thingsToDo
