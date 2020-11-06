import ResiList from "../ResiList/ResiList"
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
                <ResiList
                    resi={props.resi}
                    time={block.time}
                />
            </ul>
        )
    })

    return blockList
}