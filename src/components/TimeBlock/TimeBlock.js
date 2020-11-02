import Reservation from '../Reservation/Reservation'
import './TimeBlock.css'

export default function TimeBlock() {
    return (
        <section className='time_block'>
            <p>time slot</p>
            <Reservation />
        </section>
    )
}