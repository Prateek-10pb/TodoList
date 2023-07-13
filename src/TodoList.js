import React,{useState} from 'react';
const TodoList =() => {
    const[todos, setTodos]= useState([]);
    const[firstValue, setFirstValue]= useState([]);
    const handleInputChange=(event)=>{
        setFirstValue(event.target.value)
    };
    const handleAddTodo=()=>{
            setTodos([...todos,firstValue]);
            setFirstValue('')
    };
    const handleDeleteTodo =(index) =>{
         const newTodos=[...todos];
         newTodos.splice(index,1)
         setTodos(newTodos)
    };
    return(
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            height:'100vh'

        }}
        >
        <div style={{
            backgroundColor: 'lightblue',
            borderStyle: 'dotted',
            display: 'table',
            alignItems: 'center',
            justifyContent: 'center',
            height:'50vh'
       }}>
            <div
            style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
            <h2>Todo List</h2>
            <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <input
             type="text"
             value={firstValue}
             onChange={handleInputChange}
             placeholder='Enter a todo'
            />
            <button style={{backgroundColor:'blue'}} onClick={handleAddTodo}>Add</button>
            </div>
            </div>
            <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <ul>
                {todos.map((todo,index) => (
                    <div  style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <li key={index} style={{backgroundColor:'yellow',display: 'flex', width:'25vh', margin:'10px'}}>
                        <div
                        style={{
                        display:'flex',
                        width:'200px'}}
                        >
                        {todo}
                        </div>
                        <div style={{justifyContent:'flex-end'}}>
                        <button
                        style={{backgroundColor:'lightblue'}}
                        onClick={() =>
                            handleDeleteTodo(index)
                        }
                        >X</button>
                        </div>
                    </li>
                    </div>
                ))}
            </ul>
            </div>
        </div>
        </div>
    );
};
export default TodoList;