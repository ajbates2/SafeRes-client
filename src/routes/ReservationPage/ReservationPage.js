import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Reservation from "../../components/Reservation/Reservation";
import Store from "../../Store";
import './ReservationPage.css'

export default class ReservationPage extends Component {

  render() {
    return (
      <div className="res_page">
        <Header />
        <main className="reservations">
          <Reservation resi={Store} />
        </main>
      </div>
    );
  }
}