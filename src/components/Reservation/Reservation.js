import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import EditRes from '../EditRes/EditRes'
import './Reservation.css'

export default function Reservation(props) {

    const [editView, setEditView] = useState(false)
    const [checkOff, setCheckOff] = useState(false)

    const changeState = () => setEditView(!editView)

    if (!editView && !checkOff) {
        return (
            <li className="res_block" key={props.id}>
                <span className='res_name'>{props.name}</span>
                <span className='res_party'>{props.partySize} ppl</span>
                <span className='res_notes'>{props.notes}</span>
                <span className='fa_icons'>
                    <FontAwesomeIcon
                        icon='edit'
                        className='fa_edit'
                        onClick={() => changeState()}
                    />
                    <FontAwesomeIcon icon='bell' className='fa_bell' />
                    <FontAwesomeIcon
                        icon='check-square'
                        className='fa_check_box'
                        onClick={() => setCheckOff(!checkOff)}
                    />
                </span>
            </li>
        )
    }
    else if (editView && !checkOff) {
        return (
            <EditRes
                changeState={() => setEditView(!editView)}
                {...props}
            />
        )
    }
    else return null
}