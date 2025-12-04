import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
import Flights from "./pages/Flights";

<Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/flights" element={<Flights />} />
  </Routes>
</Router>
