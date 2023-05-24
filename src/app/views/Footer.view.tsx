import styled from "styled-components";
import getImageByKey from "../../util/getImageByKey";
import menuJson from "../../data/menu.json";
import Menu, { MenuData } from "../components/Menu";

export default function Footer() {
  const menu = menuJson as MenuData[];
  const phone = "tel:+5511999999999";
  const mail = "mailto:contact@bikcraft.com";

  return (
    <FooterContainer>
      <div className="footer-container__content container__box">
        <img src={getImageByKey("bikcraft")} alt="Bikcraft" />
        <div className="footer-container__contact">
          <h3 className="footer-container__h3">Contact</h3>
          <ul className="footer-container__ul">
            <li className="footer-container__li"><a href={phone}>{phone.substring(4)}</a></li>
            <li className="footer-container__li"><a href={mail}>{mail.substring(7)}</a></li>
            <li className="footer-container__li">XXXX NW Bobcat Lane Gold, St. Robert</li>
            <li className="footer-container__li">Missouri, MO</li>
          </ul>
          <div className="footer-container__social-media">
            <a href="./">
              <img src={getImageByKey("instagram")} alt="Instagram" />
            </a>
            <a href="./">
              <img src={getImageByKey("facebook")} alt="Facebook" />
            </a>
            <a href="./">
              <img src={getImageByKey("youtube")} alt="Youtube" />
            </a>
          </div>
        </div>
        <div className="footer-container__nav">
            <h3 className="footer-container__h3">Information</h3>
            <Menu variant="vertical" data={menu} />
          </div>
          <p className="footer-container__copy">Bikcraft © All Rights Reserved</p>
      </div>

    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: var(--color-12);

  .footer-container__content {
    display: grid;
    grid-template-columns: 3fr 5fr 4fr;
    gap: 40px;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .footer-container__contact {

  }

  .footer-container__h3 {
    font: var(--font-2-l-b);
    color: var(--color-0);
    margin-bottom: 32px;
  }

  .footer-container__ul {
    font: var(--font-2-m);
    color: var(--color-5);
    margin-bottom: 32px;
  }

  .footer-container__li {
    margin-bottom: 16px;
  }

  .footer-container__contact .footer-container__li:nth-child(even)::after {
    content: "";
    display: block;
    max-width: 360px;
    height: 2px;
    background: var(--color-11);
    margin-top: 16px;
  }
  
  .footer-container__social-media {
    display: flex;
    gap: 32px;
  }

  .footer-container__nav {

  }

  .footer-container__copy {
    font: var(--font-2-m);
    color: var(--color-6);
    grid-column: 1/-1;
    margin-top: 40px;
  }

  @media (max-width: 800px) {
    .footer-container__content {
      grid-template-columns: 1fr;
      gap: 60px;
    }
      
    .footer-container__copy {
      margin-top: 0px;
    }
  }
`