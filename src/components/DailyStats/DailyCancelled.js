export default function DailyCancelled(props) {
    return (
        <div className='cancelled_count sideBar_count_grid'>
            <p className='count_value'>
                {props.cancelled}
            </p>
            <p className='count_title'>
                Cancellations
            </p>
        </div>
    )
}