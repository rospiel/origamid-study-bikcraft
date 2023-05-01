import * as M from "./Menu.styles";

export interface MenuData {
  name: string;
  address: string;
}

export interface MenuProps {
  data: MenuData[];
}

export default function Menu({ data }: MenuProps) {
  return (
    <M.MenuContainer aria-label="primaria">
      <ul className="menu-container__menu">
        {
          data.map((item, position) => {
            return (
              <li key={position}>
                <a className="menu-container__link" href={item.address}>{item.name}</a>
              </li>
            )
          })
        }
      </ul>
    </M.MenuContainer>
  )
}