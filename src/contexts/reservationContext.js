import React, { useState } from 'react'

const ResiContext = React.createContext({
    resList: [],

    setResList: () => { },
})

export default ResiContext

export function ResListProvider(props) {
    const [resList, setResList] = useState([])

    const value = {
        resList,
        setResList
    }

    return (
        <ResiContext.Provider value={value}>
            {props.children}
        </ResiContext.Provider>
    )
}