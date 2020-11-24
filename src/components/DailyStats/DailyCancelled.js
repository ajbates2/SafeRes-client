export default function DailyCancelled(props) {
    return (
        <div className='cancelled_count'>
            <p className='count_title'>
                cancellations
            </p>
            <p className='count_value'>
                {props.cancelled}
            </p>
        </div>
    )
}