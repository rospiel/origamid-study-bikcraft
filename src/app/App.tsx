import Bicycles from "./views/Bicycles.view";
import Header from "./views/Header.view";
import Introduction from "./views/Introduction.view";
import Partners from "./views/Partners.view";
import Technology from "./views/Technology.view";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Bicycles />
      <Technology />
      <Partners />
    </>
  );
}

export default App;
