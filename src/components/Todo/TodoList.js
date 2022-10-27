import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import '../../CSS/todo.css';


const TodoList = (props) => {
  
  const [modal,setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  } 

  const [editTodo, setEdit] = useState(false);

  const exitEdit = () => {
    setEdit(!editTodo);
  } 

  const colors = ["#d0f4de","#e4c1f9","#ff99c8","#a9def9","#fcf6bd"];
  const random = Math.floor(Math.random()*colors.length);
  const [idToDo, setIdToDo] = useState("");
  const [title,setTitle] = useState("");
  const [des,setDes] = useState("");
  const [create, setCreate] = useState("");
  const [date,setDate] = useState("");
  const [color,setColor] = useState("");
  const [status, setStatus] = useState("");
  const [todos,setToDos] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyBzzpq1IDkFs8MO17x80wNHUnImj_nhiKA",
    authDomain: "todoapp-ccf45.firebaseapp.com",
    projectId: "todoapp-ccf45",
    storageBucket: "todoapp-ccf45.appspot.com",
    messagingSenderId: "912243571285",
    appId: "1:912243571285:web:de339b64bfbd5b0a7ef2dc"
  };
  
  const fire = initializeApp(firebaseConfig);
  const db = getFirestore(fire);
  const todoCollection = collection(db,"todolists");

 const addTodo = async ()=>{
    var today = new Date();
    var date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ today.getDate()+ ' ';
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date1+time;
    await addDoc(todoCollection,{title: title, description: des, create:  dateTime, date , status: "In progress", color: (random, colors[random])})
    reFresh();
 }
  
 const editToDo = async(id)=>{
  const ToDo = doc(db,"todolists",id);
  const newToDo = {title: title,description:des,date};
  await updateDoc(ToDo,newToDo) ;
   reFresh();
 }
const doneToDo = async(id)=>{
  const toDo = doc(db,"todolists",id);
  const nStatus = {status: "Complete"}
  await updateDoc(toDo,nStatus);
  reFresh();
}

const deleteToDo = async(id)=>{
  const toDo = doc(db,"todolists",id);
  await deleteDoc(toDo);
  reFresh();
}

function reFresh(){
  window.location.reload();
}


useEffect (()=>{
  const getToDo = async ()=>{
    const dataToDo = await getDocs(todoCollection);
    setToDos(dataToDo.docs.map((doc)=>({...doc.data(),id: doc.id})))
  };
  getToDo()
  
  console.log(todos)
},[]);

  return (
    <>
    {/** popup add todo */}
    {modal &&
      <div className='popup-box'>
        <div className='popup'>
          <div className='content'>
            <header>
              <p>Add a new Note</p>
              <i onClick={toggle} className="bi bi-x-lg"></i>
            </header>

            <div id="addForm" className="form">
              
              <div className='row title'>
                <label >Title</label>
                  <input  
                  type="text"
                  onChange={(event)=>{setTitle(event.target.value)}}
                  />
              </div>

              <div className='row description'>
                <label>Description</label>
                  <textarea id="" name="" onChange={(event)=>{setDes(event.target.value)}}></textarea>
              </div>

              <div className='row title'>
                <label>Completion Date</label>
                  <input type="datetime-local" onChange={(event)=>{setDate(event.target.value)}}></input>
              </div>


              <div className='button'>
                <div className='button-todo'>
                  <button onClick={()=>{addTodo()}}>Add</button>
                </div>
                <div className='button-todo'>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    }

    {/* sửa todo */}

    {editTodo &&
      <div className='popup-box'>
        <div className='popup'>
          <div className='content'>
            <header>
              <p>Edit a thing ToDo</p>
              <i onClick={exitEdit} className="bi bi-x-lg"></i>
            </header>

            <div id="editForm" className="form">
              
              <div className='row title'>
                <label >Title</label>
                  <input  
                  type="text"
                  onChange={(event)=>{setTitle(event.target.value)}}
                  value={title}/>
              </div>

              <div className='row description'>
                <label>Description</label>
                  <textarea id="" name="" onChange={(event)=>{setDes(event.target.value)}} value={des}></textarea>
              </div>

              <div className='row title'>
                <label>Completion Date</label>
                  <input type="datetime-local" onChange={(event)=>{setDate(event.target.value)}} value={date}></input>
              </div>

              <div className='button'>
                <div className='button-todo'>
                  <button onClick={() => {editToDo(idToDo)}}>Edit</button>
                </div>
                <div className='button-todo'>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    }

    {/** end popup add todo */}
    {/*-----------------todo------------*/}
  <div className='MainTodo'>
    <div className='header'>
      <h3>TodoList</h3>
      <button onClick={() => setModal(!modal)} className="btn5-hover btn5">Create Todo</button>
    </div>
    {/*đây là phần map to do         */}
    
    <div className="wrapper-todo" >
      {todos.sort((a, b) => {
        if (a.create < b.create) {
          return 1;
        }
        if (a.create > b.create) {
          return -1;
        }
        return 0;
      }).map((todos)=>{
        let isdone = todos.status ==="Complete";
        let iscolor1 = todos.color ==="#d0f4de";
        let iscolor2 = todos.color ==="#e4c1f9";
        let iscolor3 = todos.color === "#ff99c8";
        let iscolor4 = todos.color === "#a9def9";
        let iscolor5 = todos.color ==="#fcf6bd";
              return(
                
                  <li className={iscolor1?'note1':iscolor2?'note2':iscolor3?'note3':iscolor4?'note4':'note5'} key={todos.id}>
                    <div className={isdone?'details-done':'details'}>
                    <div className='shadow-none p-1 bg-light rounded box-color' >
                      {todos.title}
                  </div>
                    <span>{todos.description}</span>
                  </div>
                  <div className='bottom-content'>
                    <span>{todos.create}</span>
                      <div className='settings'>
                      <i className="bi bi-three-dots"></i>
                        <ul className='menu'>
                          <li className={isdone?"done":"notdone"} onClick={isdone?"#":()=>{doneToDo(todos.id)}}> <i class="bi bi-check2-circle"></i>Done</li> 
                          <li className={isdone?"done":"notdone"} onClick={isdone?"#":() => (exitEdit(),setTitle(todos.title),setDes(todos.description),setDate(todos.date),setIdToDo(todos.id))}> <i className="bi bi-pencil-square" ></i>Edit</li> 
                          <li className="notdone" onClick={()=>{deleteToDo(todos.id)}}> <i className="bi bi-trash3" ></i>Delete</li>                       
                        </ul>
                      </div>
                </div>
                  </li>
              );
        })}
  </div>
  </div>
    </>
  )
}

export default TodoList;
