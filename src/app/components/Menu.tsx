import { Link } from "react-router-dom";
import * as M from "./Menu.styles";

export interface MenuData {
  name: string;
  address: string;
}

export interface MenuProps {
  data: MenuData[];
  variant: "vertical" | "horizontal"
}

export default function Menu({ data, variant }: MenuProps) {
  return (
    <M.MenuContainer variant={variant} aria-label="primaria">
      <ul className="menu-container__menu">
        {
          data.map((item, position) => {
            return (
              <li key={position}>
                <Link className="menu-container__link" to={item.address}>{item.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </M.MenuContainer>
  )
}