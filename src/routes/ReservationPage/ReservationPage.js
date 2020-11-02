import React, { Component } from "react";
import Header from "../../components/Header/Header";
import TimeBlock from "../../components/TimeBlock/TimeBlock";
import './ReservationPage.css'

export default class ReservationPage extends Component {
  render() {
    return (
      <div className="res_page">
        <Header />
        <main className="reservations">
          <TimeBlock />
        </main>
      </div>
    );
  }
}