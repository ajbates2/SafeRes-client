export default function DailyUnique(props) {
    return (
        <div className='unique_count'>
            <p className='count_title'>
                Unique Parties
            </p>
            <p className='count_value'>
                {props.unique}
            </p>
        </div>
    )
}