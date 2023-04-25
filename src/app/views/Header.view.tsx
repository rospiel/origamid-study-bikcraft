import styled from "styled-components";
import logo from "../../img/bikcraft.svg";
import menuJson from "../../data/menu.json";
import Menu, { MenuData } from "../components/Menu";

export default function Header() {
  const menu = menuJson as MenuData[];
  
  return (
    <HeaderContainer>
      <div className="header-container__content">
        <a href="./">
          <img src={logo} alt="Bikcraft" />
        </a>
        <Menu data={menu} />

      </div>
    </HeaderContainer>
  )

}

const HeaderContainer = styled.header`
  background-color: #000;
  
  .header-container__content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    max-width: 1160px;
    margin-left: auto;
    margin-right: auto;
  }
`