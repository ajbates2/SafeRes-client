import React, { useEffect, useState } from 'react'

const ResiContext = React.createContext({
    resList: [],
    resetList: false,
    toast: { message: null },
    setResList: () => { },
    setReset: () => { },
    setToast: () => { }
})

export default ResiContext

export function ResListProvider(props) {
    const [resList, setResList] = useState([])
    const [resetList, setReset] = useState(false)
    const [toast, setToast] = useState({ message: null })

    useEffect(() => {
        const timer = setTimeout(() => {
            setToast({ message: null })
        }, 8000)
        return () => clearTimeout(timer)
    }, [toast.message])

    const handleSetToast = msg => setToast({ message: msg })

    const value = {
        resList,
        resetList,
        toast,
        setResList,
        setReset,
        handleSetToast
    }

    return (
        <ResiContext.Provider value={value}>
            {props.children}
        </ResiContext.Provider>
    )
}