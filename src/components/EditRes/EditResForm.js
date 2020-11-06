import './EditRes.css'

export default function EditResForm(props) {

    return (
        <form className='editRes_form'>
            <input type='text' name='name' defaultValue={props.name} />
            <input type='number' name='partySize' defaultValue={props.partySize} />
            <input type='tel' name='phoneNumber' defaultValue={props.phoneNumber} />
            <input type='text' name='notes' defaultValue={props.notes} />
            <input type='button' value='submit' onClick={() => props.changeView()} />
        </form>
    )
}