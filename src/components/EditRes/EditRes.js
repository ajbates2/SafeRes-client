import './EditRes.css'
import EditResButtons from './EditResButtons'
import EditResForm from './EditResForm'
import { animated, useTransition } from "react-spring";

export default function EditRes(resProps) {

    const transitions = useTransition(resProps.editView, null, {
        from: { position: 'relative', opacity: 0 },
        enter: item => async (next, cancel) => {
            await new Promise(resolve => setTimeout(resolve, 400));
            await next({ position: 'relative', opacity: 1 })
        },
        leave: { position: 'relative', opacity: 0 },
    })


    return transitions.map(({ item, props, key }) =>
        item &&
        <animated.div className={
            `editRes_view
                ${resProps.waitState || resProps.waiting ? 'waiting' : ''} 
                ${resProps.notifiedState || resProps.notified ? 'notified' : ''}`}
            style={props}
            key={key}
        >
            {resProps.resizeListener}
            <EditResForm {...resProps} />
            <EditResButtons {...resProps} />
        </animated.div>
    )
}