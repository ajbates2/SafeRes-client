import { Route } from "react-router-dom"
import ReservationPage from "./routes/ReservationPage/ReservationPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import EditResPage from "./routes/EditResPage/EditResPage";

export default function App() {

  return (
    <div className="App">
      <Route exact path={'/'} component={LoginPage} />
      <Route path={'/reservations'} component={ReservationPage} />
      <Route path={'/edit/:id'} component={EditResPage} />
    </div>
  );
}