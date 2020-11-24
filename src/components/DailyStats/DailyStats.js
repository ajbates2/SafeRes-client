import { useContext, useEffect, useState } from 'react'
import SafeResAPIService from '../../services/res-api-service'
import moment from "moment";
import './DailyStats.css'
import DailyHeadCount from './DailyHeadCount';
import DailyNoShows from './DailyNoShow';
import DailyWalkIns from './DailyWalkIns';
import DailyCancelled from './DailyCancelled';
import DailyUnique from './DailyUnique';
import AddResButton from '../AddRes/AddResButton';
import ResiContext from '../../contexts/reservationContext';

export default function DailyStats(props) {
    const resetCon = useContext(ResiContext)
    const [dailyStats, setDailyStats] = useState('')

    useEffect(() => {
        const res_day = moment().format('DDDDYYYY')
        SafeResAPIService.getDailyCount(res_day)
            .then(data => setDailyStats(data))
    }, [resetCon.resetList])

    return (
        <div className='dailyStats_container'>
            <DailyHeadCount headCount={dailyStats.head_count} />
            <DailyWalkIns walkIns={dailyStats.walk_ins} />
            <DailyUnique unique={dailyStats.unique_parties} />
            <DailyNoShows noShows={dailyStats.no_shows} />
            <DailyCancelled cancelled={dailyStats.cancellations} />
            <AddResButton />
        </div>
    )
}