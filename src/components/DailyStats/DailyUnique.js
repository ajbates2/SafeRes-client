export default function DailyUnique(props) {
    return (
        <div className='unique_count sideBar_count_grid'>
            <p className='count_value'>
                {props.unique}
            </p>
            <p className='count_title'>
                Unique Parties
            </p>
        </div>
    )
}