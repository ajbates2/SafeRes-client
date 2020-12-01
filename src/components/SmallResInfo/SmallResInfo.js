import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SmallResInfo.css'

export default function SmallResInfo(props) {

    return (
        <li
            className=
            {
                `small_res_info
                    ${props.waitState || props.waiting ? 'waiting' : ''} 
                    ${props.notifiedState || props.notified ? 'notified' : ''}`
            }
            key={props.id}
        >
            <span className='res_name'>{props.guest_name}</span>
            <span className='res_party'>{props.party_size} ppl</span>
            <span className='res_notes'>{props.notes}</span>
            <span className='fa_icons'>
                <FontAwesomeIcon
                    icon='ellipsis-h'
                    className='fa_elli'
                    onClick={() => props.setEditView(!props.editView)}
                />
            </span>
        </li>
    )
}
