import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phone from "phone";
import { useContext } from "react";
import ResiContext from "../../contexts/reservationContext";
import SafeResAPIService from "../../services/res-api-service";

export default function EditResButtons(props) {

    const resetContext = useContext(ResiContext)

    return (
        <div className='editRes_buttons'>
            <FontAwesomeIcon
                icon='times'
                className='fa_closeWindow cursor_hover'
                onClick={() => props.changeView()}
            />
            <button
                className='editRes_noShow editRes_button cursor_hover'
                onClick={() => {
                    SafeResAPIService.updateGuestNoShow(props.id)
                        .then(res => console.log(res.status))
                        .then(() => {
                            resetContext.setReset(!resetContext.resetList)
                            props.checkOff()
                        })
                }}
            >
                no show
            </button>
            <button
                className='editRes_cancel editRes_button cursor_hover'
                onClick={() => {
                    SafeResAPIService.updateGuestCancelled(props.id)
                        .then(res => console.log(res.status))
                        .then(() => {
                            resetContext.setReset(!resetContext.resetList)
                            props.checkOff()
                        })
                }}
            >
                cancel
            </button>
            <button
                className='editRes_waitState editRes_button cursor_hover'
                onClick={() => {
                    SafeResAPIService.updateGuestWaiting(props.id)
                        .then(res => console.log(res.status))
                        .then(() => {
                            props.setWaitState()
                            props.changeView()
                        })
                }}
            >
                waiting
            </button>
            <button
                className='editRes_notify editRes_button cursor_hover'
                onClick={() => {
                    SafeResAPIService.notifySms(phone(props.phone_number)[0], props.guest_name, props.id)
                    props.changeView()
                    props.setNotifiedState()
                }}
            >
                notify
            </button>
            <button
                className='editRes_checkOff editRes_button cursor_hover'
                onClick={() => {
                    SafeResAPIService.updateGuestArrived(props.id)
                        .then(res => console.log(res.status))
                        .then(() => {
                            resetContext.setReset(!resetContext.resetList)
                            props.checkOff()
                        })
                }}
            >
                check off
            </button>
        </div>
    )
}