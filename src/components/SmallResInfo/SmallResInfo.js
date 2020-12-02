import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SmallResInfo.css'
import { animated, useTransition } from "react-spring";

export default function SmallResInfo(resProps) {

    const transitions = useTransition(resProps.editView, null, {
        from: { position: 'relative', opacity: 0 },
        enter: item => async (next, cancel) => {
            await new Promise(resolve => setTimeout(resolve, 400));
            await next({ position: 'relative', opacity: 1 })
        },
        leave: { position: 'relative', opacity: 0 },
    })

    return transitions.map(({ item, props, key }) =>
        !item && <animated.li
            className=
            {
                `small_res_info
                    ${resProps.waitState || resProps.waiting ? 'waiting' : ''} 
                    ${resProps.notifiedState || resProps.notified ? 'notified' : ''}`
            }
            key={key}
            style={props}
        >
            {resProps.resizeListener}
            <span className='res_name'>{resProps.guest_name}</span>
            <span className='res_party'>{resProps.party_size} ppl</span>
            <span className='res_notes'>{resProps.notes}</span>
            <span className='fa_icons'>
                <FontAwesomeIcon
                    icon='ellipsis-h'
                    className='fa_elli'
                    onClick={() => resProps.setEditView(!resProps.editView)}
                />
            </span>
        </animated.li>
    )
}