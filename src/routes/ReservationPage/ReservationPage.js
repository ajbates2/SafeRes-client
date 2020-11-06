import React from "react";
import Header from "../../components/Header/Header";
import TimeBlock from "../../components/TimeBlock/TimeBlock";
import Store from "../../Store";
import './ReservationPage.css'

export default function ReservationPage(props) {
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
    </div>
  );
}