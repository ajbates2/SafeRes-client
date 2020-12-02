import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import './AddRes.css'
import ResiContext from "../../contexts/reservationContext";
import SafeResAPIService from "../../services/res-api-service";
import NumberFormat from 'react-number-format';
import { useContext, useRef, useState } from "react";
import { animated, config, useSpring } from "react-spring";

export default function AddResForm(props) {

    const [walkInState, setWalkInState] = useState(false)
    const resContext = useContext(ResiContext)
    const walkInRef = useRef(false)
    const onButtonClick = () => {
        walkInRef.current.focus()
    }

    const animateProps = useSpring({
        marginTop: props.openForm ? 0 : -550,
        config: config.gentle
    })

    const handleSubmit = ev => {
        ev.preventDefault()
        const date = moment().format('DDDDYYYY')
        const { guest_name, phone_number, party_size, res_time, walk_in, notes } = ev.target
        SafeResAPIService.postNewResi(
            guest_name.value,
            phone_number.value,
            party_size.value,
            res_time.value,
            walk_in.value,
            notes.value,
            date)
            .then(() => {
                props.setOpenForm()
                resContext.setReset(!resContext.resetList)
            })
    }

    return (
        <animated.div style={animateProps} className='addRes_container terracotta'>
            <FontAwesomeIcon
                icon='times'
                className='fa_closeAddRes cursor_hover'
                onClick={() => props.setOpenForm()}
            />
            <form className='res_form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='guest_name'
                    id='guest_name'
                    placeholder='Name'
                    required
                />
                <input type='time'
                    name='res_time'
                    id='res_time'
                    defaultValue='18:00'
                    required
                />
                <input
                    type='number'
                    name='party_size'
                    id='party_size'
                    placeholder='Party Size'
                    required
                />
                <NumberFormat
                    displayType={'tel'}
                    name='phone_number'
                    id='phone_number'
                    placeholder='123-456-7890'
                    format="###-###-####"
                    mask="_"
                    required
                />
                <input
                    type='text'
                    name='notes'
                    id='notes'
                    placeholder='notes'
                />
                <button
                    type='button'
                    id='walk_in'
                    name='walk_in'
                    value={walkInState}
                    ref={walkInRef}
                    onClick={() => setWalkInState(!walkInState)}
                    className={
                        `walk_in_button cursor_hover independence light_periwinkle_font
                        ${walkInState ? 'walk_in_selected' : ''}`}
                    required
                >
                    Walk In
                </button>
                <button
                    className='add_res_submit cursor_hover'
                    onClick={onButtonClick}
                    type='submit'
                >
                    Add Res
                </button>
            </form>
        </animated.div>
    )
}