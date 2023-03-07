import React, { useEffect, useRef, useState } from 'react'

export const useLocalStorage = ({ nameStorage, initialValue }) => {

    const [state, setState] = useState(JSON.parse(window.localStorage.getItem(nameStorage)) || initialValue);
    const nameLocalStorage = useRef(nameStorage);

    useEffect(() => {
        state?.length>0 && window.localStorage.setItem("wakanda", JSON.stringify([state]))
        console.log(nameLocalStorage.current)
    }, [state])



    return { state, setState }
}
