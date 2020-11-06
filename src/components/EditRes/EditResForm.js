import './EditRes.css'

export default function EditResForm(props) {

    return (
        <form className='res_form editRes_form'>
            <input type='text' name='name' defaultValue={props.name} />
            <input type='time'
                min='11:00'
                max='21:00'
                step='1800'
                defaultValue={props.time}
            />
            <input type='number' name='partySize' defaultValue={props.partySize} />
            <input type='tel' name='phoneNumber' defaultValue={props.phoneNumber} />
            <input type='text' name='notes' defaultValue={props.notes} />
            <input type='button' value='update' onClick={() => props.changeView()} />
        </form>
    )
}