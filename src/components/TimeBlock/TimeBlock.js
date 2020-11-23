import Reservation from "../Reservation/Reservation"
import './TimeBlock.css'

export default function TimeBlock(props) {

    return (
        <div className='timeBlock_container'>
            <p className='timeBlock_title'>{props.time}</p>
            <ul className='timeBlock_list' key={props.time}>
                {props.resi.map(res => {
                    if (res.res_time === props.time) {
                        return (
                            <Reservation
                                key={res.id}
                                {...res}
                            />
                        )
                    }
                    else return null
                }
                )}
            </ul>
        </div>
    )
}