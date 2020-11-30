export default function DailyNoShows(props) {
    return (
        <div className='no_show_count sideBar_count_grid'>
            <p className='count_value'>
                {props.noShows}
            </p>
            <p className='count_title'>
                No Shows
            </p>
        </div>
    )
}