import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import EditRes from '../EditRes/EditRes'
import './Reservation.css'

export default function Reservation(props) {

    const [editView, setEditView] = useState(false)
    const [checkOff, setCheckOff] = useState(false)
    const [waitState, setWaitState] = useState(false)

    if (!editView && !checkOff) {
        return (
            <li className={`res_block ${!waitState ? '' : 'waiting'}`} key={props.id}>
                <span className='res_name'>{props.name}</span>
                <span className='res_party'>{props.partySize} ppl</span>
                <span className='res_notes'>{props.notes}</span>
                <span className='fa_icons'>
                    <FontAwesomeIcon
                        icon='ellipsis-h'
                        className='fa_elli'
                        onClick={() => setEditView(!editView)}
                    />
                </span>
            </li>
        )
    }
    else if (editView && !checkOff) {
        return (
            <EditRes
                changeView={() => setEditView(!editView)}
                checkOff={() => setCheckOff(!checkOff)}
                setWaitState={() => setWaitState(!waitState)}
                {...props}
            />
        )
    }
    else return null
}