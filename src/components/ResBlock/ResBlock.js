import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import EditRes from "../EditRes/EditRes";
import SmallResInfo from '../SmallResInfo/SmallResInfo'
import useResizeAware from 'react-resize-aware';
import './ResBlock.css'

export default function ResBlock(props) {

    const [editView, setEditView] = useState(false)
    const [checkOff, setCheckOff] = useState(false)
    const [waitState, setWaitState] = useState(false)
    const [notifiedState, setNotifiedState] = useState(false)

    const [resizeListener, sizes] = useResizeAware()

    const spring = useSpring({
        height: !sizes.height ? '48px' : sizes.height,
        config: config.gentle
    })

    return (
        <animated.div className={`
                res_block dark_blue_gray
                ${props.waitState || props.waiting ? 'waiting' : ''} 
                ${props.notifiedState || props.notified ? 'notified' : ''}
                `}
            style={spring}
        >
            {!editView
                ? <SmallResInfo
                    setEditView={setEditView}
                    editView={editView}
                    waitState={waitState}
                    notifiedState={notifiedState}
                    resizeListener={resizeListener}
                    {...props}
                />
                : <>
                    <FontAwesomeIcon
                        icon='times'
                        className='fa_closeWindow cursor_hover'
                        onClick={() => setEditView(!editView)}
                    />
                    <EditRes
                        changeView={() => setEditView(!editView)}
                        checkOff={() => setCheckOff(!checkOff)}
                        setWaitState={() => setWaitState(!waitState)}
                        setNotifiedState={() => setNotifiedState(!notifiedState)}
                        waitState={waitState}
                        notifiedState={notifiedState}
                        resizeListener={resizeListener}
                        editView={editView}
                        width={sizes.width}
                        {...props}
                    />
                </>
            }
        </animated.div>

    )
}