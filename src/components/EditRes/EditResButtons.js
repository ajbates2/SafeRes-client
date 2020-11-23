import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ResiContext from "../../contexts/reservationContext";
import SafeResAPIService from "../../services/res-api-service";

export default function EditResButtons(props) {

    const resetContext = useContext(ResiContext)
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
                onClick={() => {
                    props.setNotifiedState()
                    props.changeView()
                }}
            />
            <FontAwesomeIcon
                icon='check'
                className='fa_checkOff'
                onClick={() => {
                    resetContext.setReset(!resetContext.resetList)
                    props.checkOff()
                    SafeResAPIService.updateGuestArrived(props.id)
                }}
            />
        </div>
    )
}