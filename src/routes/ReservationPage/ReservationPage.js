import React, { useContext, useEffect, useState } from "react";
import AddResButton from "../../components/AddRes/AddResButton";
import Header from "../../components/Header/Header";
import TimeBlock from "../../components/TimeBlock/TimeBlock";
import ResiContext from "../../contexts/reservationContext";
import SafeResAPIService from "../../services/res-api-service";
import Store from "../../Store";
import './ReservationPage.css'

export default function ReservationPage(props) {
  const [resList, setResList] = useState([])

  const getReservations = () => {
    return SafeResAPIService.getAllCurrentResi()
      .then(data => console.log(data))
  }

  useEffect(() => {
    getReservations()
  })

  const dedupeByKey = (arr, key) => {
    const temp = arr.map(el => el[key])
    return arr.filter((el, i) =>
      temp.indexOf(el[key]) === i
    )
  }

  const shortenedList = dedupeByKey(Store, 'time')
  return (
    <div className="res_page">
      <Header />
      <main className="reservations">
        {shortenedList.map(block => {
          return (
            <TimeBlock
              key={block.time}
              resi={Store}
              time={block.time}
            />
          )
        })}
      </main>
      <AddResButton />
    </div>
  );
}