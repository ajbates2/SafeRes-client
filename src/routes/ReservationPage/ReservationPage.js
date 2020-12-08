import React, { useContext, useEffect } from "react";
import DailyStats from "../../components/DailyStats/DailyStats";
import Header from "../../components/Header/Header";
import ListHeader from "../../components/ListHeader/ListHeader";
import TimeBlock from "../../components/TimeBlock/TimeBlock";
import ResiContext from "../../contexts/reservationContext";
import SafeResAPIService from "../../services/res-api-service";
import useResizeAware from 'react-resize-aware';
import './ReservationPage.css'
import ResToast from "../../components/ResToast/ResToast";

export default function ReservationPage(props) {
  const resContext = useContext(ResiContext)

  const getResInfo = () => {
    return SafeResAPIService.getAllCurrentResi()
      .then(data => resContext.setResList(data))
  }

  useEffect(getResInfo, [resContext.resetList]) // eslint-disable-line react-hooks/exhaustive-deps

  const dedupeByKey = (arr, key) => {
    const temp = arr.map(el => el[key])
    return arr.filter((el, i) =>
      temp.indexOf(el[key]) === i
    )
  }

  const [pageSizeListener, pageSize] = useResizeAware()
  const [listSizeListener, listSize] = useResizeAware()

  const shortenedList = dedupeByKey(resContext.resList, 'res_time')

  const pageHeight = Number(pageSize.height)
  const listHeight = Number(listSize.height)

  return (
    <div className={`
      res_page
    `}
      style={{
        height: `${(pageHeight > listHeight) ? '100vh' : 'auto'}`,
        marginBottom: `${listHeight === 700 ? '150px' : ''}`
      }}
    >
      { pageSizeListener}
      < Header />
      <main className='reservations' style={{ position: 'relative' }}>
        {listSizeListener}
        <ListHeader />
        {resContext.resList.length === 0
          ? <div className='empty_list'>might be a long day...
          </div>
          : shortenedList.map(block => {
            return (
              <TimeBlock
                key={block.res_time}
                resi={resContext.resList}
                time={block.res_time}
              />
            )
          })}
      </main>
      <ResToast />
      <DailyStats />
    </div >
  );
}