import { useContext, useRef } from 'react'
import ResiContext from '../../contexts/reservationContext'
import SafeResAPIService from '../../services/res-api-service'
import NumberFormat from 'react-number-format';
import './EditRes.css'

export default function EditResForm(props) {

    const resContext = useContext(ResiContext)
    const guestNameRef = useRef(null)
    const phoneNumRef = useRef(null)
    const partyRef = useRef(null)
    const timeRef = useRef(null)
    const notesRef = useRef(null)
    const onButtonClick = () => {
        guestNameRef.current.focus()
        phoneNumRef.current.focus()
        partyRef.current.focus()
        timeRef.current.focus()
        notesRef.current.focus()
    }

    const updateResInfo = ev => {
        ev.preventDefault()
        SafeResAPIService.updateResInfo(
            props.id,
            guestNameRef.current.value,
            phoneNumRef.current.value,
            partyRef.current.value,
            timeRef.current.value,
            notesRef.current.value
        )
            .then(res => {
                console.log(res.status)
                props.changeView()
                resContext.setReset(!resContext.resetList)
            })
    }

    return (
        <form
            className='res_form editRes_form'
            onSubmit={updateResInfo}>
            <input
                type='text'
                name='guest_name'
                id='guest_name'
                defaultValue={props.guest_name}
                ref={guestNameRef}
                required
            />
            <input type='time'
                name='guest_name'
                id='guest_name'
                min='11:00'
                max='21:00'
                step='1800'
                ref={timeRef}
                defaultValue={props.res_time}
                required
            />
            <input
                type='number'
                name='party_size'
                id='party_size'
                defaultValue={props.party_size}
                ref={partyRef}
                required
            />
            <NumberFormat
                displayType={'tel'}
                name='phone_number'
                id='phone_number'
                defaultValue={props.phone_number}
                getInputRef={phoneNumRef}
                format="###-###-####"
                mask="_"
                required
            />
            <input
                type='text'
                name='notes'
                id='phone_number'
                placeholder='notes'
                defaultValue={props.notes}
                ref={notesRef}
            />
            <input type='submit' onClick={onButtonClick} value='update' />
        </form>
    )
}