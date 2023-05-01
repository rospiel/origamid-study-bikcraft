import styled from "styled-components";

export const MenuContainer = styled.nav`

  .menu-container__menu {
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

  .menu-container__link {
    color: var(--color-0);
    display: inline-block;
    padding: 16px 0px;
    position: relative;
    font: var(--font-1-m);
  }

  .menu-container__link:after {
    content: "";
    display: block;
    height: 2px;
    width: 0px;
    background: #fff;
    margin-top: 4px;
    transition: 0.3s;
    position: absolute;
  }

  .menu-container__link:hover:after {
    width: 100%;
  }

  @media (max-width: 800px) {
    .menu-container__menu {
      gap: 20px;
    }

    .menu-container__link {
      background: var(--color-11);
      padding: 12px 16px;
      border-radius: 4px;
    }

    .menu-container__link:hover {
      background-color: var(--color-10);
    }

    .menu-container__link:after {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .menu-container__menu {
      gap: 12px;
    }

    .menu-container__link {
      padding: 8px 12px;
      font-size: 14px;
    }
  }


`