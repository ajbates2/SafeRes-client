import React, { useState } from 'react'

const ResiContext = React.createContext({
    resList: [],
    resetList: false,
    setResList: () => { },
    setReset: () => { }

})

export default ResiContext

export function ResListProvider(props) {
    const [resList, setResList] = useState([])
    const [resetList, setReset] = useState(false)

    const value = {
        resList,
        resetList,
        setResList,
        setReset
    }

    return (
        <ResiContext.Provider value={value}>
            {props.children}
        </ResiContext.Provider>
    )
}