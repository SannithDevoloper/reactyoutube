
import {useState}  from "react";
import TodoList from "./TodoList";
function App() {
  const [task,setTask]= useState("");
  const [todo,setTodo]=useState([])
  const changeHandler=e=>{
   setTask( e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
    console.log(task);
    const newTodo = [...todo,task];
    setTodo(newTodo);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todo.filter((tod,index) => index !== indexValue);
    setTodo(newTodos);
  }
  return (
    <div >
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title"> Todo Management Application</h4>
            <form onSubmit={submitHandler}>
              <input  size="30" type="text" name="task" value={task} onChange={changeHandler}></input> &nbsp; &nbsp;
              <input type="submit" value="ADD" name="add"></input>
            </form>
            <TodoList todolist={todo} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
      
     
    </div>
  );
}

export default App;
