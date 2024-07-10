import React from 'react'
import { ImCross } from "react-icons/im";
function ThingsDone({thingsDone,AgainDo,removeItem}) {
  return (
   <>
    <h1 className='text-xl p-4 font-bold'>Things Done</h1>
    <div className='ml-2 w-96'>
   {thingsDone.map((p,index)=>{

           return (
            <>
            <div key={index} className='flex ml-2  gap-8'>
        <input type="checkbox"  name="inptCheckbox" className='' value="" onChange={()=> AgainDo(index)}></input>
           <p className=''>{p}</p>
           <button onClick={()=> removeItem(index)}>
           <ImCross className="text-xl" />
           </button>
           </div>
           </>
           )
      })

      
    }
    </div>
   </>
  )
}

export default ThingsDone
