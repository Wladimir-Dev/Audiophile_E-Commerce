import { useEffect, useRef, useState } from 'react'

export const useLocalStorage = ({ nameStorage, initialValue }) => {

    const [state, setState] = useState(JSON.parse(window.localStorage.getItem(nameStorage)) || initialValue);
    const nameLocalStorage = useRef(nameStorage);

    useEffect(() => {
    
        window.localStorage.setItem(nameLocalStorage.current, JSON.stringify(state))
       
    }, [state])



    return { state, setState }
}
