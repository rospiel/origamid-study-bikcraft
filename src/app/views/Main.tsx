import Bicycles from "./Bicycles.view";
import Footer from "./Footer.view";
import Header from "./Header.view";
import Insurance from "./Insurance.view";
import Introduction from "./Introduction.view";
import Partners from "./Partners.view";
import Statement from "./Statement.view";
import Technology from "./Technology.view";

export default function Main() {
  return (
    <>
      <Header />
      <Introduction />
      <Bicycles />
      <Technology />
      <Partners />
      <Statement />
      <Insurance />
      <Footer />
    </>
  )
}