import React from 'react'

function ThingsDone({thingsDone,AgainDo}) {
  return (
   <>

   {thingsDone.map((p,index)=>{

           return (
            <>
            <div key={index} className='flex ml-2 w-16 justify-between'>
        <input type="checkbox" checked name="inptCheckbox" value="" onChange={()=> AgainDo(index)}></input>
           <p>{p}</p>
           </div>
           </>
           )
      })

      
    }
   </>
  )
}

export default ThingsDone
