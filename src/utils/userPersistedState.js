/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'

let x=[]
const usePersistedState = (key, INITIAL_STATE) => {
    const [state, setState] = useState(() => {
        const storage = localStorage.getItem(key);
        if(storage){
             x.push(JSON.parse(storage))
            return x
        }else {
            return INITIAL_STATE
        }
    });

    useEffect(() => {
        if(INITIAL_STATE.length > 0)
        localStorage.setItem(key, JSON.stringify(INITIAL_STATE))
    },[INITIAL_STATE, key]);
    return [state, setState]
}

export default usePersistedState;