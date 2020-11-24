export default function DailyWalkIns(props) {
    return (
        <div className='walk_in_count'>
            <p className='count_title'>
                Walk-Ins
            </p>
            <p className='count_value'>
                {props.walkIns}
            </p>
        </div>
    )
}