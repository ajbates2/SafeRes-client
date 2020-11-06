import './EditRes.css'
import EditResButtons from './EditResButtons'
import EditResForm from './EditResForm'

export default function EditRes(props) {

    return (
        <div className='editRes_view'>
            <EditResForm {...props} />
            <EditResButtons {...props} />
        </div>
    )
}