import { Switch, Route } from "react-router-dom"
import ReservationPage from "./routes/ReservationPage/ReservationPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import Dashboard from "./routes/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={LoginPage} />
      <Route path={'/reservations'} component={ReservationPage} />
      <Route path={'/dashboard'} component={Dashboard} />
    </div>
  );
}

export default App;