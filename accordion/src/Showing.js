import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, removeTodo,updateTodo } from "./Store/TodosSlice";
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

//   const [message1,setMessage1]=useState("");
  const [editIndex, setEdindex] = useState(null);
const [val,setVal]=useState("")
  return ( 
    <div>
      {todos.map((elem, index) => (
        <div id={elem.id}>
          <input
            type="text"
        value={ index===editIndex? val:elem.message}
            name=""
            disabled={index === editIndex ? false : true}
            id=""
            onChange={(e)=>{
                setVal(e.target.value)
            }}            
            className="bg-white"
          />
          {/* <h1></h1> */}
          {index === editIndex ? (
            <button className="bg-green-500" onClick={()=>{
                
                dispatch(updateTodo({id:elem.id,message:val}))
                setEdindex(null)

            }}> Done </button>
          ) : null}
          <button
            className="bg-blue-900"
            onClick={() => {
              dispatch(removeTodo(elem.id));
            }}
          >
            remove
          </button>
          <button
            className="bg-slate-800"
            onClick={() => {
                setVal(elem.message)
              setEdindex(index);
            }}
          >
            Update
          </button>
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
