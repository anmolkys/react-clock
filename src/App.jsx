import { useState } from "react";
import './app.css'

export default function App(){
  let time = new Date().toLocaleTimeString();
  const [Ctime,setCtime]=useState(time);
  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime,1000)
  return (
    <div className="mainer">
    <h1 className="timer">{Ctime}</h1>
    </div>
  );

}