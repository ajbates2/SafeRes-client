export default function DailyWalkIns(props) {
    return (
        <div className='walk_in_count sideBar_count_grid'>
            <p className='count_value'>
                {props.walkIns}
            </p>
            <p className='count_title'>
                Walk-Ins
            </p>
        </div>
    )
}