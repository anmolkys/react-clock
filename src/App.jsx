import { useState } from "react";

export default function App(){
  let time = new Date().toLocaleTimeString();
  const [Ctime,setCtime]=useState(time);
  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime,1000)
  return (
    <>
    <h1 className="timer">{Ctime}</h1>
    </>
  );

}