import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './AddRes.css'
import AddResForm from "./AddResForm";

export default function AddResButton() {

    const [openForm, setOpenForm] = useState(false)

    if (!openForm) {
        return (
            <FontAwesomeIcon
                icon='plus-square'
                size='5x'
                className='fa_addResButton'
                onClick={() => setOpenForm(!openForm)}
            />
        )
    }
    else {
        return (
            <AddResForm setOpenForm={() => setOpenForm(!openForm)} />
        )
    }
}