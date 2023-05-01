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
    color: #fff;
    display: inline-block;
    padding: 16px 0px;
    font-size: 18px;
    position: relative;
    font-family: "Poppins";
    font-weight: 400;
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
      background: #111;
      padding: 12px 16px;
      border-radius: 4px;
    }

    .menu-container__link:hover {
      background-color: #2e2e2e;
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