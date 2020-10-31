import React, { Component } from "react";
import './Dashboard.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <header>
          <h2>SafeRes</h2>
          <h1>restaurant name</h1>
          <div>menu</div>
        </header>
        <main>
          <section class="analytics">more analytics?</section>
          <section class="emergency">
            <h3>In case of emergency</h3>
            <form>
              <label for="message">message:</label>
              <textarea id="message"></textarea>
              <label for="date">date:</label>
              <input type="date" />
              <button>Send</button>
            </form>
          </section>
        </main>
        <footer>footerContent</footer>
      </div>
    );
  }
}
