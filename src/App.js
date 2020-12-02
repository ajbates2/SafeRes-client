import { Route } from "react-router-dom"
import ReservationPage from "./routes/ReservationPage/ReservationPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import { useSpring, animated } from 'react-spring'

export default function App() {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <animated.div className="App" style={spring}>
      <Route exact path={'/'} component={LoginPage} />
      <Route path={'/reservations'} component={ReservationPage} />
    </animated.div>
  );
}