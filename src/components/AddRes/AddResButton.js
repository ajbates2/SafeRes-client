import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './AddRes.css'
import AddResForm from "./AddResForm";

export default function AddResButton() {

    const [openForm, setOpenForm] = useState(false)

    if (!openForm) {
        return (
            <div className='addRes_button cursor_hover'>
                <FontAwesomeIcon
                    icon='plus'
                    size='3x'
                    className='fa_addResButton'
                    onClick={() => setOpenForm(!openForm)}
                />
            </div>
        )
    }
    else {
        return (
            <AddResForm setOpenForm={() => setOpenForm(!openForm)} />
        )
    }
}