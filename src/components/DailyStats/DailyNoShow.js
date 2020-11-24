export default function DailyNoShows(props) {
    return (
        <div className='no_show_count'>
            <p className='count_title'>
                No Shows
            </p>
            <p className='count_value'>
                {props.noShows}
            </p>
        </div>
    )
}