import React, { useState } from 'react'
import TokenService from '../../services/token-service'
import jwt from 'jsonwebtoken'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Header() {

    const decodeAuth = jwt.verify(TokenService.getAuthToken(), "its-corona-time")

    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    return (
        <header className='main_header'>
            <h1 className='app_title'>SafeRes</h1>
            <h1 className='rest_name'>{decodeAuth.restaurant_name}</h1>
            <FontAwesomeIcon
                icon='bars'
                className='header_menu_button cursor_hover'
                onClick={() => setMenuOpen(!menuOpen)}
            />
            {(!menuOpen) ?
                null :
                <Link
                    className='header_menu cursor_hover'
                    onClick={() => handleLogoutClick()}
                    to='/'
                >
                    logout
                </Link>
            }
        </header>
    )
}