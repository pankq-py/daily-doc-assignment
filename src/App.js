import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { TicketDetails } from "./Components/TicketDetails";
import { TicketReservation } from './Components/TicketReservation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TicketReservation/>}/>
            <Route path='/ticket-details' element={<TicketDetails/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
