import React from 'react'
// import { useState } from 'react';
import { useRef } from 'react';

function Counter() {
    const count=useRef(0);
    function handleCount (){
    count.current=count.current+1;
    alert(`Click me${count.current}`);
    }
    return (
        <div>
            <button onClick={handleCount}>Click me</button>
        </div>
    )
    }

export default Counter;
