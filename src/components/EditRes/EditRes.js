import './EditRes.css'
import EditResButtons from './EditResButtons'
import EditResForm from './EditResForm'

export default function EditRes(props) {

    return (
        <div className={
            `editRes_view dark_blue_gray
                ${props.waitState || props.waiting ? 'waiting' : ''} 
                ${props.notifiedState || props.notified ? 'notified' : ''}`}
        >
            <EditResForm {...props} />
            <EditResButtons {...props} />
        </div>
    )
}