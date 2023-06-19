import { HeadProps } from "../../util/Head";
import withHeaderAndFooter from "../../util/withHeaderAndFooter";
import Bicycles from "./Bicycles.view";
import Insurance from "./Insurance.view";
import Introduction from "./Introduction.view";
import Partners from "./Partners.view";
import Statement from "./Statement.view";
import Technology from "./Technology.view";

const head = {} as HeadProps;
head.title = "Main";
head.description = "Main page"

function Main() {
  return (
    <>
      <Introduction />
      <Bicycles />
      <Technology />
      <Partners />
      <Statement />
      <Insurance />
    </>
  )
}

export default withHeaderAndFooter(Main, head);