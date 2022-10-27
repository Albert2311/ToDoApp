import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import '../../CSS/Timeline.css';

const TimeLine = () => {
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

      <div id="timeline-cover" onScroll={() => {
          const items = document.querySelectorAll('.timeline-item');
          const items_cover = document.getElementById("timeline-cover");
    
          const trigger_bottom = items_cover.offsetHeight / 5 * 4;
          items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < trigger_bottom) {
              item.classList.add("show")
            }
            else {
              item.classList.remove("show")
            }
          })
          console.log(trigger_bottom)
        }} class="timeline-section">
        <div  
        
         class="timeline-items">
        {todos.sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
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
          // <div key={todos.id} class="timeline-item">
          <div key={todos.id} className={isdone?"timeline-item done":"timeline-item notdone"} >
            <div class="timeline-dot"></div>
              <div class="timeline-date">{todos.date}</div>
                <div className={iscolor1?'timeline-content1':iscolor2?'timeline-content2':iscolor3?'timeline-content3':iscolor4?'timeline-content4':'timeline-content5'} key={todos.id}>
                  <h5 className='shadow-none p-1 bg-light rounded box-color'>{todos.title}</h5>
                   <p>{todos.description} </p>
                </div>
          </div>
        )})}
        </div>
      </div>
    </>
  )
}

export default TimeLine