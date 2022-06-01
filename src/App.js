import logo from './logo.svg';
import './App.css';
import Header from './My Components/Header';
import {Footer} from './My Components/Footer';
import {ToDos} from './My Components/ToDos';
import React, { useState } from 'react';



function App() {
  
  let [todoarr, settodo] = useState([{title: "Todo1", desc:" Job Done1"},{title: "Todo2", desc:" Job Done2"},{title: "Todo3", desc:" Job Done3"}])
  function ondelete(todo){
    console.log(todoarr.length);
    console.log("I am on onclick", todo);
    settodo(todoarr.filter(e => e!=todo))
  
  }
  return (
    <>
    <Header title={"ToDo List"} />
    <ToDos todoarr={todoarr} ondelete={ondelete} />
    <Footer/>

    </>
  );
}

export default App;
