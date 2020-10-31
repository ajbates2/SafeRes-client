import React, { Component } from "react";
import './ReservationPage.css'

export default class ReservationPage extends Component {
  render() {
    return (
      <div className="res_page">
        <header>
          <h2>SafeRes</h2>
          <h1>restaurant name</h1>
          <div>menu</div>
        </header>
        <main class="reservations">
          <section class="time_slot">
            <p>time slot</p>
            <div class="res_block">reservation info</div>
            <div class="res_block">reservation info</div>
            <div class="res_block">reservation info</div>
            <div class="res_block">reservation info</div>
          </section>
        </main>
        <footer>
          <div class="res_total">total reservations today</div>
          <div class="head_count">head count for today</div>
          <div class="walk_in_ratio">walk in ratio</div>
        </footer>
      </div>
    );
  }
}
