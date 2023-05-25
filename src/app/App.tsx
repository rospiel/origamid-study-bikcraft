import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import Terms from "./views/Terms";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
