import React, { useState } from 'react'

function InputComponent({setTakeInput,updateVal}) {
    const [value,setValue] =useState("");
    function handleCancel(){
        setTakeInput(false)
    }
    function handleInptChange(e){
        setValue(e.target.value);
        
    }
    function handleUpdateVal(){
         updateVal(value);
        
    }
  return (
    <>
    <div className='flex p-4 flex-col space-y-4 border w-full bg-gray-300  shadow-2xl'>
        <h1>Create a toDo</h1>
      <input type="text" className='w-1/2 border border-black p-2 rounded-lg' onChange={handleInptChange} value={value}/>
    <div className='flex flex-row space-x-3'> 
        <button onClick={handleUpdateVal} className='border border-black rounded-lg p-2 '>Save</button>
        <button className='border border-black rounded-lg p-2 ' onClick={handleCancel}>Cancel</button>
        </div>
    </div>
    </>
  )
}

export default InputComponent
