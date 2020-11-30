export default function DailyHeadCount(props) {
    return (
        <div className='head_count sideBar_count_grid'>
            <p className='count_value'>
                {props.headCount}
            </p>
            <p className='count_title'>
                Head Count
            </p>
        </div>
    )
}