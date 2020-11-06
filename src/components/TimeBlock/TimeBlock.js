import Reservation from "../Reservation/Reservation"
import './TimeBlock.css'

export default function TimeBlock(props) {
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
                {props.resi.map(res => {
                    if (res.time === block.time) {
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
        )
    })

    return blockList
}