import React from "react";
import Header from "../../components/Header/Header";
import TimeBlock from "../../components/TimeBlock/TimeBlock";
import Store from "../../Store";
import './ReservationPage.css'

export default function ReservationPage(props) {

  return (
    <div className="res_page">
      <Header />
      <main className="reservations">
        <TimeBlock resi={Store} resId={props.match.params.id} />
      </main>
    </div>
  );
}