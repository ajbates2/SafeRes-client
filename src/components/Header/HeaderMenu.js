import { Link } from "react-router-dom";
import React from 'react'
import { animated, config, useSpring } from "react-spring";

export default function HeaderMenu(resProps) {

    const animateProps = useSpring({
        right: resProps.menuOpen ? 0 : -200,
        config: config.gentle
    })

    return (
        <animated.div className='header_menu dark_blue_gray'
            style={animateProps}
        >
            <Link
                className='header_menu_item cursor_hover'
                onClick={() => resProps.logout()}
                to='/'
            >
                logout
            </Link>
        </animated.div>
    )
}