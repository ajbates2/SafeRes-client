import { useState } from "react";
import './AddRes.css'
import AddResForm from "./AddResForm";
import { FiPlus } from 'react-icons/fi'

export default function AddResButton() {

    const [openForm, setOpenForm] = useState(false)

    return (
        <div className={`
            addRes_button
            ${!openForm ? '' : 'opened_form'}
        `}>
            <div className='cursor_hover' onClick={() => setOpenForm(!openForm)}>
                <FiPlus
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