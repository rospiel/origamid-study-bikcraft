import styled from "styled-components";
import withHeaderAndFooter from "../../util/withHeaderAndFooter"
import Title2 from "../components/Title2";
import contactJson from "../../data/contact.json";
import { useEffect } from "react";
import { Contact } from "./Footer.view";
import getImageByKey from "../../util/getImageByKey";
import Button from "../components/Button";
import local from "../../img/icones/local.svg";
import email from "../../img/icones/email.svg";
import phone from "../../img/icones/telefone.svg";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import bottomLeft from "../../img/dec/bottom-left.svg";
import bottomRight from "../../img/dec/bottom-right.svg";
import { HeadProps } from "../../util/Head";

const head = {} as HeadProps;
head.title = "Contact";
head.description = "Contact page"

function MainContact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  const contact = contactJson as Contact;
  
  return (
    <MainContactContainer>
      <div className="main-contact-container__background">
        <div className="container__box">
          <p className="main-contact-container__title">ANSWERS IN UP TO 24H</p>
          <Title2 color="--color-0" font="--font-1-xxl" text="our contact"  />
        </div>
      </div>
      <div className="main-contact-container__contact container__box">
        <section className="main-contact-container__contact-data" aria-label="Address">
          <h2 className="main-contact-container__title-contact">Online Store</h2>
          <div className="main-contact-container__address">
            <p>{contact.address.street}</p>
            <p>{contact.address.state}</p>
          </div>
          <address className="main-contact-container__contact-detail">
            <a href={contact.mail}>{contact.mail.substring(7)}</a>
            <a href={contact.phone}>{contact.phone.substring(4)}</a>
          </address>
          <div className="main-contact-container__social-media">
            { contact.socialMedia.map((media, position) => {
              return (
                <a key={position} href={media.url}><img src={getImageByKey(media.img2)} alt={media.alt} /></a>
              )
            }) }
          </div>
        </section>
        <section className="main-contact-container__contact-form" aria-label="Form">
          <form action="#" className="main-contact-container__form">
            <div>
              <Input label="Name" type="text" idInput="name" nameInput="name" placeholder="Your name" />
            </div>
            <div>
              <Input label="Phone" type="number" idInput="phone" nameInput="phone" placeholder="408 999 9999" />
            </div>
            <div className="main-contact-container__input">
              <Input label="Email" type="email" idInput="email" nameInput="email" placeholder="email@email.com" />
            </div>
            <div className="main-contact-container__input">
              <Textarea label="Message" rows={5} idInput="message" nameInput="message" placeholder="What you need" />
            </div>
            <div className="main-contact-container__input">
              <Button text="Send Message" hasArrow={true} variant="gold" href="#" />
            </div>
            

          </form>
        </section>
      </div>
      
      
      
    </MainContactContainer>
  )
}

const MainContactContainer = styled.main`
background: linear-gradient(var(--color-11) 600px, var(--color-1) 0px);
  .main-contact-container__background {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--color-11);
  }

  .main-contact-container__title {
    font: var(--font-2-l-b);
    color: var(--color-5);
    margin-bottom: 4px;
  }

  .main-contact-container__contact {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .main-contact-container__contact-data, 
  .main-contact-container__contact-form {
    padding: 60px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .main-contact-container__contact-data {
    border-radius: 5px 0 0 5px;
    background: var(--color-12) url(${bottomLeft}) no-repeat bottom 20px left 20px;
  }

  .main-contact-container__title-contact {
    font: var(--font-1-m);
    color: var(--color-0);
    margin-bottom: 60px;
  }

  .main-contact-container__address {
    font: var(--font-2-s);
    color: var(--color-4);
    margin-bottom: 32px;
    padding-left: 28px;
    background: url(${local}) no-repeat 0px 2px;
  }

  .main-contact-container__address p {
    margin-bottom: 8px;
  }

  .main-contact-container__contact-detail {
    font: var(--font-2-s);
    color: var(--color-4);
  }

  .main-contact-container__contact-detail a {
    display: block;
    max-width: max-content; /* use just your size */
    margin-bottom: 8px;
    padding-left: 28px;
  }

  .main-contact-container__contact-detail a:first-child {
    background: url(${email}) no-repeat 0px 2px;
    margin-bottom: 32px;
  }

  .main-contact-container__contact-detail a:last-child {
    background: url(${phone}) no-repeat 0px 2px;
    margin-bottom: 60px;
  }

  .main-contact-container__contact-detail a:hover {
    color: var(--color-0);
  }

  .main-contact-container__social-media {
    display: flex;
    gap: 32px;
    padding-left: 28px;
  }

  .main-contact-container__contact-form {
    border-radius: 0 5px 5px 0;
    background: var(--color-0) url(${bottomRight}) no-repeat bottom 20px right 20px;
  }

  .main-contact-container__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .main-contact-container__form label {
    display: block;
    font: 600 1rem/1.5 var(--font-1), var(--font-default);
    margin-bottom: 4px;
  }

  .main-contact-container__form input[type="text"],
  .main-contact-container__form input[type="email"], 
  .main-contact-container__form textarea {
    font: 400 1rem/1.5 var(--font-2), var(--font-default);
    background: var(--color-1);
    border: 1px solid var(--color-2);
    padding: 12px;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }

  .main-contact-container__form input[type="text"]:focus,
  .main-contact-container__form input[type="email"]:focus, 
  .main-contact-container__form textarea:focus {
    outline: none;
    border-color: var(--color-p1);
    background: var(--color-0);
    box-shadow: 8 0 0 2px var(--color-13);
  }

  .main-contact-container__input {
    grid-column: span 2;
  }

  @media (max-width: 800px) {
    .main-contact-container__title {
      font-size: 1rem;
      text-transform: lowercase;
      font-weight: 400;
    }

    .main-contact-container__contact {
      grid-template-columns: 1fr;
    }

    .main-contact-container__contact-data, 
    .main-contact-container__contact-form {
      padding: 20px;
    } 

    .main-contact-container__contact-data {
      border-radius: 5px 5px 0 0;
      background: var(--color-12);
    }

    .main-contact-container__contact-form {
      border-radius: 0 0 5px 5px;
    }

    .main-contact-container__title-contact {
      margin-bottom: 32px;
    }

    .main-contact-container__contact-detail a:last-child {
      margin-bottom: 32px;
    }

    .main-contact-container__social-media {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 600px) {
    .main-contact-container__form {
      grid-template-columns: 1fr;
    }
    
    .main-contact-container__input {
      grid-column: span 1;
    }
  }
  
`

export default withHeaderAndFooter(MainContact, head);