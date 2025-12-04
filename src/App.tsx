

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Flights from './pages/Flights';
import Home from './pages/Home';
import FlightDetails from './pages/FlightDetails';
import Review from './pages/Review';
import Booking from './pages/Booking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flights" element={<Flights />} />
          <Route path="flight-details" element={<FlightDetails />} />
          <Route path="review" element={<Review />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
