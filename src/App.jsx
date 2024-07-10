import { useEffect, useState } from 'react'

import Navbar from './Navbar'
import InputComponent from './InputComponent'
import ThingsToDo from './ThingsToDo'
import ThingsDone from './ThingsDone'
function App() {
const [takeInput,setTakeInput]=useState(false)
const Data=localStorage.getItem("toDoItems")||"[]"
const storedData=JSON.parse(Data)
const [toDo,setToDo]=useState(storedData)
const [Done,setDone]=useState([])
function setComponent(){
    setTakeInput(true)
}
function updateVal(newVal){
  console.log(newVal.length);
  if(newVal.length>0){
    const newToDo=[...toDo,newVal]
  setToDo(newToDo)
 
  setTakeInput(false);
  }

}
useEffect(()=>{
  const setToDoItem=JSON.stringify(toDo)
  localStorage.setItem("toDoItems",setToDoItem)
},[toDo])

function onDone(index){
    const newDo=[...toDo]
      const completed=newDo.splice(index,1)[0]
      setToDo(newDo)
      setTimeout(() => {
        setDone([...Done, completed]);
      }, 100);
}
function handleAgainDo(index){
      const againDo=Done.splice(index,1)[0]
      setTimeout(() => {
        setToDo([...toDo, againDo]);
      }, 100);
}
function handleRemoveItems(index){
  const newDone=[...Done]

  newDone.splice(index,1)


  setDone(newDone)
}

  return (
    <>   
    <Navbar></Navbar>
    <div className='flex flex-col justify-start items-start'>
    <h1 className='text-3xl p-4 font-bold'>Things to get Done</h1> 

    <ThingsToDo toDoVal={toDo} onDone={onDone}/>
{takeInput?(<InputComponent setTakeInput={setTakeInput} updateVal={updateVal} /> ):
    <button onClick={setComponent} className='border border-black rounded-lg p-2 mt-4 ml-2 bg-gray-300 hover:bg-gray-500'>+ Add a todo</button>
  }
  
  <ThingsDone thingsDone={Done} AgainDo={handleAgainDo} removeItem={handleRemoveItems}/>
  </div>
    </>
  )
}


export default App
