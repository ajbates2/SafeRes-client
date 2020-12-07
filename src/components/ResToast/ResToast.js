import { useContext } from 'react';
import { useTransition, animated, config } from 'react-spring';
import ResiContext from '../../contexts/reservationContext';
import './ResToast.css'

export default function ResToast(resProps) {

    const context = useContext(ResiContext)

    const transitions = useTransition(context.toast.message, null, {
        from: { opacity: 0, bottom: 0 },
        enter: { opacity: 1, bottom: 125 },
        leave: { opacity: 0, bottom: 0 },
        config: config.gentle
    })

    return transitions.map(({ item, key, props }) =>
        item &&
        <animated.p className='toast terracotta' style={props} key={key}>
            {item}
        </animated.p>
    )
}