import React from "react";
import Header from "../../components/Header/Header";
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
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
