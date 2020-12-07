import React, { useState } from 'react'
import './Header.css'
import TokenService from '../../services/token-service'
import HeaderMenu from './HeaderMenu'
import { FiMenu } from 'react-icons/fi'

export default function Header() {


    const [dropdown, setDropdown] = useState(false)

    const handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    return (
        <header className='main_header'>
            <h1 className='app_title'>SafeRes</h1>
            <FiMenu
                icon='bars'
                className='header_menu_button cursor_hover'
                onClick={() => setDropdown(!dropdown)}
            />
            <HeaderMenu
                logout={() => handleLogoutClick()}
                dropdown={dropdown}
            />
        </header>
    )
}