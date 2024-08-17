import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo,removeTodo } from "./Store/TodosSlice";
// const [todos,setTodos]=useState([]);

//  const todo= useSelector((state)=>{
// return state.todos
//   })

function Showing() {
  const dispatch = useDispatch();

  const [todos, setTodos] = useState([]);
  const todo = useSelector((state) => {
    return state.todos;
  });

  useEffect(() => {
    setTodos(todo);
  }, [todo]);

  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (message !== "") {
      dispatch(addtodo(message));
      console.log("successfully submitted", message);
    }

    setMessage("");
  };

  return (
    <div>
      {todos.map((elem) => (
        <div id={elem.id}>
          <h1>{elem.message}</h1>

          <button className="bg-blue-900" onClick={()=>{
            dispatch(removeTodo(elem.id))
          }}>remove</button>
        </div>
      ))}
      <div>
        <label htmlFor="">This is a wrriten format</label>
        <input
          type="text"
          name=""
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id=""
        />

        <button onClick={submit}>Add todo</button>
      </div>
    </div>
  );
}

export default Showing;
