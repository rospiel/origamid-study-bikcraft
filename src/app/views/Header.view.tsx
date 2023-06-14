import styled from "styled-components";
import logo from "../../img/bikcraft.svg";
import menuJson from "../../data/menu.json";
import Menu, { MenuData } from "../components/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  const menu = menuJson as MenuData[];
  
  return (
    <HeaderContainer>
      <div className="header-container__content">
        <Link to="/">
          <img src={logo} alt="Bikcraft" width="136" height="32" />
        </Link>
        <Menu variant="horizontal" data={menu} />

      </div>
    </HeaderContainer>
  )

}

const HeaderContainer = styled.header`
  background-color: var(--color-12);
  
  .header-container__content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`