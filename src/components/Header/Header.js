import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'

export default function Header() {


    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    return (
        <header className='main_header'>
            <h1 className='app_title'>SafeRes</h1>
            <FontAwesomeIcon
                icon='bars'
                className='header_menu_button cursor_hover'
                size='2x'
                onClick={() => setMenuOpen(!menuOpen)}
            />
            {(!menuOpen) ?
                null :
                <Link
                    className='header_menu cursor_hover rich_black_font dark_blue_gray'
                    onClick={() => handleLogoutClick()}
                    to='/'
                >
                    logout
                </Link>
            }
        </header>
    )
}