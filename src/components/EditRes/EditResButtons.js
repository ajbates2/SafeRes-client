import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditResButtons(props) {
    return (
        <div className='editRes_buttons'>
            <FontAwesomeIcon
                icon='times'
                className='fa_closeWindow'
                onClick={() => props.changeView()}
            />
            <button
                className='editRes_noShow'
                onClick={() => props.checkOff()}
            >
                no show
            </button>
            <button
                className='editRes_waitState'
                onClick={() => {
                    props.setWaitState()
                    props.changeView()
                }}
            >
                waiting
            </button>
            <FontAwesomeIcon
                icon='bell'
                className='fa_notify'
            />
            <FontAwesomeIcon
                icon='check'
                className='fa_checkOff'
                onClick={() => { props.checkOff() }}
            />
        </div>
    )
}