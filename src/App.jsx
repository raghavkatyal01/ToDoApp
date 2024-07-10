import { useState } from 'react'

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
  const newToDo=[...toDo,newVal]
  setToDo(newToDo)
  const setToDoItem=JSON.stringify(toDo)
  localStorage.setItem("toDoItems",setToDoItem)
  setTakeInput(false);
}
function onDone(index){
      const completed=toDo.splice(index,1)[0]
      setTimeout(() => {
        setDone([...Done, completed]);
      }, 500);
}
function handleAgainDo(index){
      const againDo=Done.splice(index,1)[0]
      setTimeout(() => {
        setToDo([...toDo, againDo]);
      }, 500);
}

  return (
    <>   
    <Navbar></Navbar>
    <div className='flex flex-col justify-start items-start'>
    <h1 className='text-3xl p-4 font-bold'>Things to get Done</h1> 

    <ThingsToDo toDoVal={toDo} onDone={onDone}/>
{takeInput?(<InputComponent setTakeInput={setTakeInput} updateVal={updateVal}/> ):
    <button onClick={setComponent} className='border border-black rounded-lg p-2 ml-2'>+ Add a todo</button>
  }
  <p>Things Done</p>
  <ThingsDone thingsDone={Done} AgainDo={handleAgainDo}/>
  </div>
    </>
  )
}


export default App
