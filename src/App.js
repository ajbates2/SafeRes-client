import { Route } from "react-router-dom"
import ReservationPage from "./routes/ReservationPage/ReservationPage";
import LoginPage from "./routes/LoginPage/LoginPage";

export default function App() {

  return (
    <div className="App">
      <Route exact path={'/'} component={LoginPage} />
      <Route path={'/reservations'} component={ReservationPage} />
    </div>
  );
}