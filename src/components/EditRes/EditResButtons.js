import phone from "phone";
import { useContext } from "react";
import ResiContext from "../../contexts/reservationContext";
import SafeResAPIService from "../../services/res-api-service";

export default function EditResButtons(props) {

    const resetContext = useContext(ResiContext)

    return (
        <div className='editRes_buttons'>
            <button
                className='editRes_noShow editRes_button cursor_hover'
                onClick={() => {
                    SafeResAPIService.updateGuestNoShow(props.id)
                        .then(res => resetContext.handleSetToast(res.message))
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
                        .then(res => resetContext.handleSetToast(res.message))
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
                        .then(res => resetContext.handleSetToast(res.message))
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
                        .then(res => resetContext.handleSetToast(res.message))
                        .then(() => {
                            props.changeView()
                            props.setNotifiedState()
                        })
                }}
            >
                notify
            </button>
            <button
                className='editRes_checkOff editRes_button cursor_hover'
                onClick={() => {
                    SafeResAPIService.updateGuestArrived(props.id)
                        .then(res => resetContext.handleSetToast(res.message))
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