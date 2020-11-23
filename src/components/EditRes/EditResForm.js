import './EditRes.css'

export default function EditResForm(props) {

    const updateResInfo = () => { }

    return (
        <form
            className='res_form editRes_form'
            onSubmit={() => updateResInfo()}>
            <input type='text' name='name' defaultValue={props.guest_name} />
            <input type='time'
                min='11:00'
                max='21:00'
                step='1800'
                defaultValue={props.res_time}
            />
            <input type='number' name='partySize' defaultValue={props.party_size} />
            <input type='tel' name='phoneNumber' defaultValue={props.phone_number} />
            <input type='text' name='notes' placeholder='notes' defaultValue={props.notes} />
            <input type='button' value='update' onClick={() => props.changeView()} />
        </form>
    )
}