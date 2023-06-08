import styled from "styled-components";
import getImageByKey from "../../util/getImageByKey";
import menuJson from "../../data/menu.json";
import contactJson from "../../data/contact.json";
import Menu, { MenuData } from "../components/Menu";

export interface Contact {
  phone: string;
  mail: string;
  address: {
    street: string;
    state: string
  };
  socialMedia: [
    {
      img1: string;
      img2: string;
      alt: string;
      url: string;
    }
  ]
}

export default function Footer() {
  const menu = menuJson as MenuData[];
  const contact = contactJson as Contact;
  
  return (
    <FooterContainer>
      <div className="footer-container__content container__box">
        <img src={getImageByKey("bikcraft")} alt="Bikcraft" />
        <div className="footer-container__contact">
          <h3 className="footer-container__h3">Contact</h3>
          <ul className="footer-container__ul">
            <li className="footer-container__li"><a href={contact.phone}>{contact.phone.substring(4)}</a></li>
            <li className="footer-container__li"><a href={contact.mail}>{contact.mail.substring(7)}</a></li>
            <li className="footer-container__li">{contact.address.street}</li>
            <li className="footer-container__li">{contact.address.state}</li>
          </ul>
          <div className="footer-container__social-media">
            { contact.socialMedia.map((media, position) => {
              return <a key={position} href={media.url}><img src={getImageByKey(media.img1)} alt={media.alt} /></a>
            }) }
          </div>
        </div>
        <div>
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