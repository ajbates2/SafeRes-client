import { Link } from "react-router-dom";
import React from 'react'
import { animated, config, useTransition } from "react-spring";

export default function HeaderMenu(resProps) {

    const transitions = useTransition(resProps.dropdown, null, {
        from: { display: 'none', top: 150, opacity: 0 },
        enter: { display: 'block', top: 85, opacity: 1 },
        leave: { top: 150, opacity: 0 },
        config: config.gentle
    })

    return transitions.map(({ item, key, props }) =>
        item
            ? <animated.div
                className={`
                header_menu dark_blue_gray
                ${resProps.menuOpen ? '' : ''}
            `}
                style={props}
                key={key}
            >
                <Link
                    className='header_menu_item cursor_hover'
                    onClick={() => resProps.logout()}
                    to='/'
                >
                    logout
            </Link>
            </animated.div>
            : <animated.div style={props} key={key} />
    )
}