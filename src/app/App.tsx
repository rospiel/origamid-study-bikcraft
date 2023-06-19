import { BrowserRouter, Route, Routes } from "react-router-dom";
import BicycleDetail from "./views/BicycleDetail.view";
import Main from "./views/Main";
import MainBicycles from "./views/MainBicycles";
import MainBudget from "./views/MainBudget";
import MainContact from "./views/MainContact";
import MainInsurance from "./views/MainInsurance";
import Terms from "./views/Terms";


function App() {
  return (
    <BrowserRouter basename="/origamid-study-bikcraft">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/bicycles" element={<MainBicycles />} />
        <Route path="/bicycles/:id" element={<BicycleDetail />} />
        <Route path="/insurance" element={<MainInsurance />} />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/budget" element={<MainBudget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
