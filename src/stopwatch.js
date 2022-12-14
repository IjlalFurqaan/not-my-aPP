import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

function Stopwatch() {
    const startTime =useRef(null);
    const [now,setNow]=useState(null);
    let secondsElapsed=0;

    function startStopwatch(){
        startTime.current=Date.now();
        setInterval(()=>{
         setNow(Date.now())
        },10);

    }
    function stopStopwatch(){
   secondsElapsed=(now-startTime.current)/1000;
    }
  return (
    <section>
        <h1>{secondsElapsed.toFixed(3)}</h1>
        <button onClick={startStopwatch}>Start</button>
        <button onClick={stopStopwatch}>Stop</button>
    </section>
  )
}

export default Stopwatch
