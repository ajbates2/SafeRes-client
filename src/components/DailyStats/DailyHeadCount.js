export default function DailyHeadCount(props) {
    return (
        <div className='head_count'>

            <p className='count_title'>
                Head Count
            </p>
            <p className='count_value'>
                {props.headCount}
            </p>
        </div>
    )
}