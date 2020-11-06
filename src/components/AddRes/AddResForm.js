import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddResForm(props) {
    return (
        <div className='addRes_container'>
            <FontAwesomeIcon
                icon='times'
                className='fa_closeAddRes'
                onClick={() => props.setOpenForm()}
            />
            <form className='res_form'>
                <input type='text' name='name' placeholder='Name' />
                <input type='time'
                    min='11:00'
                    max='21:00'
                    step='1800'
                    defaultValue='18:00'
                />
                <input type='number' name='partySize' placeholder='Party Size' />
                <input type='tel' name='phoneNumber' placeholder='Phone Number' />
                <input type='text' name='notes' placeholder='notes' />
                <input type='checkbox' name='walkIn' />
                <label htmlFor='walkIn'>Walk-In</label>
                <input type='button' value='submit' onClick={() => props.setOpenForm()} />
            </form>
        </div>
    )
}