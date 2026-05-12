import { createContext, useState} from 'react';

export let CounterContext = createContext()

export default function CounterContextProvider(props){

    let [count,setcount]=useState(0)
    function ChangeCount(){
        setcount(Math.random)
    }
    return <>
        <CounterContext.Provider value={{count,ChangeCount}}>
            {props.children}
        </CounterContext.Provider>
    </>
}