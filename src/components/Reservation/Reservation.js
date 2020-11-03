import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Reservation.css'

export default function Reservation(props) {
    const resList = time => props.resi.map(res => {
        if (time === res.time) {
            return (
                <li className="res_block" key={res.id}>
                    <span className='res_name'>{res.name} </span>
                    <span className='res_party'>{res.partySize} ppl</span>
                    <span className='res_notes'>{res.notes}</span>
                    <span className='fa_icons'>
                        <FontAwesomeIcon icon='edit' className='fa_edit' />
                        <FontAwesomeIcon icon='bell' className='fa_bell' />
                        <FontAwesomeIcon icon='check-square' className='fa_check_box' />
                    </span>
                </li>
            )
        }
        else return null
    })

    const dedupeByKey = (arr, key) => {
        const temp = arr.map(el => el[key])
        return arr.filter((el, i) =>
            temp.indexOf(el[key]) === i
        )
    }

    const shortenedList = dedupeByKey(props.resi, 'time')

    const blockList = shortenedList.map(block => {
        return (
            <ul className='time_block' key={block.time}>
                <p>{block.time}</p>
                {resList(block.time)}
            </ul>
        )
    })

    return blockList
}