import './EditRes.css'

export default function EditRes(props) {

    return (
        <form className='editRes_form' onSubmit={() => props.onSubmit()}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' defaultValue={props.name} />
            <label htmlFor='partySize'>Party Size</label>
            <input type='number' name='partySize' defaultValue={props.partySize} />
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type='tel' name='phoneNumber' defaultValue={props.phoneNumber} />
            <label htmlFor='notes'>notes</label>
            <input type='text' name='notes' defaultValue={props.notes} />
            <input type='submit' />
        </form>
    )
}