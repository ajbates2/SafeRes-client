import Reservation from "../Reservation/Reservation"
import moment from "moment";
import './TimeBlock.css'

export default function TimeBlock(props) {
    const normalTime = moment(props.time, 'HH:mm:SS').format('hh:mm a')
    return (
        <div className='timeBlock_container independence'>
            <p className='timeBlock_title light_periwinkle_font'>{normalTime}</p>
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