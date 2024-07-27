import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
    let x = 10;
    const [state, setState] = useState(0);
    const ref = useRef(0);
    /** not like => ref = 0
     * ref = {current: 0}
     * 
     */
    const i = useRef(null);
    useEffect(()=>{
        //if(i.current) return;
        i.current = setInterval(()=>{
            console.log("Namaste React", Math.random());
        },1000);
        return () => clearInterval(i.current);
    },[]);
    return (
        <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
            <div>
                <button className='bg-green-100 p-2 m-4' onChange={() => {x = x+1;}}>Increase x</button>
                <span className='font-bold text-xl'>Let = {x}</span>
            </div>
            <div>
                <button className='bg-green-100 p-2 m-4' onChange={() => {setState(state+1);}}>Increase state</button>
                <span className='font-bold text-xl'>Let state = {state}</span>
            </div>
            <div>
                <button className='bg-green-100 p-2 m-4' onClick={() => {ref.current = ref.current+1;}}>Increase ref</button>
                <span className='font-bold text-xl'>Let ref = {ref.current}</span>
            </div>
            <button className='bg-red-700 p-4 m-4 text-white font-bold rounded-lg' onClick={()=>{
                clearInterval(i.current)
            }}>Stop Printing</button>
        </div>
    )
}

export default Demo2
