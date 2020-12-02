import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './AddRes.css'
import AddResForm from "./AddResForm";

export default function AddResButton() {

    const [openForm, setOpenForm] = useState(false)

    return (
        <div className={`
            addRes_button
            ${!openForm ? '' : 'opened_form'}
        `}>
            <div className='cursor_hover' onClick={() => setOpenForm(!openForm)}>
                <FontAwesomeIcon
                    icon='plus'
                    size='3x'
                    className='fa_addResButton'
                />
            </div>
            <AddResForm
                setOpenForm={() => setOpenForm(!openForm)}
                openForm={openForm}
            />
        </div>
    )
}