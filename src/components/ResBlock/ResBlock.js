import { useState } from "react";
import { animated, useTransition } from "react-spring";
import EditRes from "../EditRes/EditRes";
import SmallResInfo from '../SmallResInfo/SmallResInfo'
import './ResBlock.css'

export default function ResBlock(props) {

    const [editView, setEditView] = useState(false)
    const [checkOff, setCheckOff] = useState(false)
    const [waitState, setWaitState] = useState(false)
    const [notifiedState, setNotifiedState] = useState(false)


    return (
        <div className={`
                res_block dark_blue_gray
                ${props.waitState || props.waiting ? 'waiting' : ''} 
                ${props.notifiedState || props.notified ? 'notified' : ''}
                `}
        >
            {!editView
                ? <SmallResInfo
                    setEditView={setEditView}
                    editView={editView}
                    waitState={waitState}
                    notifiedState={notifiedState}
                    {...props}
                />
                : <EditRes
                    changeView={() => setEditView(!editView)}
                    checkOff={() => setCheckOff(!checkOff)}
                    setWaitState={() => setWaitState(!waitState)}
                    setNotifiedState={() => setNotifiedState(!notifiedState)}
                    waitState={waitState}
                    notifiedState={notifiedState}
                    {...props}
                />
            }
        </div>

    )
}