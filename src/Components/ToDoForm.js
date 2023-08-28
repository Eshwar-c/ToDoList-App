import React,{useState} from 'react'
function ToDoForm() {
  const[items,setItems]=useState([])
  const[inputText,updatedInputText]=useState('')
  const clickHandler = () =>{
   setItems([...items,{id:crypto.randomUUID,title:inputText,completed:true}])
   }
   const onSub=e=>{
    e.preventDefault()
    console.log(items)
    console.log(inputText)
  }
  const deleteToDo=(id)=>{
    const remainingItems=[...items]
    remainingItems.splice(id)
    setItems(remainingItems)
  }
  return (
    <><form onSubmit={onSub}>
      <h1>To Do List</h1>
      <div className='layout'>
        <input className='input' type='text' placeholder='enter next task ' onChange={(e) => updatedInputText(e.target.value)}></input>
        <button className='btn' onClick={clickHandler}>Add</button>
      </div>
    </form><h1>todolist</h1><ul>
        {items.map(item => {
          return (
            <li>
              <label>
                <input type='checkbox'  onClick={deleteToDo}/>
                {item.title}
              </label>
              <button onClick={deleteToDo}>delete</button>
            </li>
          )
        })}
    </ul></>
  )
}
export default ToDoForm

