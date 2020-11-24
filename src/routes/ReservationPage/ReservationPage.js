import React, { useContext, useEffect } from "react";
import AddResButton from "../../components/AddRes/AddResButton";
import Header from "../../components/Header/Header";
import TimeBlock from "../../components/TimeBlock/TimeBlock";
import ResiContext from "../../contexts/reservationContext";
import SafeResAPIService from "../../services/res-api-service";
import './ReservationPage.css'

export default function ReservationPage(props) {
  const resContext = useContext(ResiContext)

  useEffect(() => {
    return SafeResAPIService.getAllCurrentResi()
      .then(data => resContext.setResList(data))
  }, [resContext.resetList])

  const dedupeByKey = (arr, key) => {
    const temp = arr.map(el => el[key])
    return arr.filter((el, i) =>
      temp.indexOf(el[key]) === i
    )
  }

  const shortenedList = dedupeByKey(resContext.resList, 'res_time')

  return (
    <div className="res_page">
      <Header />
      <main className="reservations">
        {shortenedList.map(block => {
          return (
            <TimeBlock
              key={block.res_time}
              resi={resContext.resList}
              time={block.res_time}
            />
          )
        })}
      </main>
      <AddResButton />
    </div>
  );
}