import withHeaderAndFooter from "../../util/withHeaderAndFooter"
import Title2 from "../components/Title2";
import React, { useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import productsJson from "../../data/products.json";
import { Product } from "./BicycleDetail.view";
import insuranceJson from "../../data/insurance.json";
import { InsuranceDetails } from "../components/InsuranceItem";
import getImageByKey from "../../util/getImageByKey";
import Radio, { RadioProps } from "../components/Radio";
import * as MB from "./MainBudget.styles";
import { HeadProps } from "../../util/Head";
import { useLocation } from "react-router-dom";

const head = {} as HeadProps;
head.title = "Budget";
head.description = "Budget page"

function MainBudget() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const productSelected = search.get("product");
  
  const products = productsJson as Product[];
  const plans = insuranceJson as InsuranceDetails[];
  const radiosTypeProduct = {} as RadioProps;
  radiosTypeProduct.name = "type";
  radiosTypeProduct.selected = search.get("type");
  radiosTypeProduct.options = [{ "id": "bikcraft", "children": "Bikcraft", "value": "bikcraft" }];
  radiosTypeProduct.options.push({ "id": "insurance", "children": "Insurance", "value": "insurance" });

  return (
    <MB.BudgetContainer>
      <div className="budget-container__background">
        <div className="container__box">
          <p className="budget-container__title">QUOTES IN YOUR EMAIL</p>
          <Title2 color="--color-0" font="--font-1-xxl" text="ask for a quote"  />
        </div>
      </div>
      <form className="budget-container__budget container__box " action="./">
        <div className="budget-container__product">
          <h2 className="budget-container__product-title" >Bikcraft or Insurance?</h2>
          <Radio name={radiosTypeProduct.name} selected={radiosTypeProduct.selected} options={radiosTypeProduct.options} />
          
          <div className="budget-container__content" id="budget-bikcraft">
            <h2 className="budget-container__content-option">Choose your (BIKCRAFT)</h2>
            { products && products.map((product, position) => {
              return (
                <React.Fragment key={position}>
                  <Radio name="product" selected={productSelected} options={[{ "id": product.id, "children": <>{product.name} <span>{product.price}</span></>, "value": product.id }]} />
                  <div className="budget-container__content-option-detail">
                    <ul>
                      { product.information && product.information.map((info, position) => {
                        return <li key={position}><img src={getImageByKey(info.img)} alt={info.title}/>{info.title}</li>
                      }) }
                    </ul>
                    <img src={getImageByKey(product.imgBicycle[0].img)} alt={product.imgBicycle[0].alt} />
                  </div>
                </React.Fragment>
              )
            }) }
          </div>

          <div className="budget-container__content" id="budget-insurance">
            <h2 className="budget-container__content-option">Choose your (PLAN)</h2>
            { plans && plans.map((plan, position) => {
              return (
                <React.Fragment key={position}>
                  <Radio name="product" selected={productSelected} options={[{ "id": plan.name, "children": <>{plan.name}<span>{plan.value}</span></>, "value": plan.name }]} />
                </React.Fragment>
              )
            }) }
          </div>

        </div>
        <div className="budget-container__data">
          <h2 className="budget-container__data-title">Choose your</h2>
          <div>
            <Input label="Name" type="text" idInput="name" nameInput="name" placeholder="Your name" />
          </div>
          <div>
            <Input label="Last Name" type="text" idInput="lastName" nameInput="lastName" placeholder="Your last name" />
          </div>
          <div className="budget-container__data-input">
            <Input label="Document" type="number" idInput="document" nameInput="document" placeholder="Your document" />
          </div>
          <div className="budget-container__data-input">
            <Input label="Email" type="email" idInput="email" nameInput="email" placeholder="email@email.com" />
          </div>
          <h2 className="budget-container__data-title">Delivery</h2>
          <div>
            <Input label="Zip Code" type="number" idInput="zipCode" nameInput="zipCode" placeholder="00000" />
          </div>
          <div>
            <Input label="Address" type="text" idInput="address" nameInput="address" placeholder="Your address" />
          </div>
          <div>
            <Input label="City" type="text" idInput="city" nameInput="city" placeholder="Your city" />
          </div>
          <div>
            <Input label="State" type="text" idInput="state" nameInput="state" placeholder="Your state" />
          </div>
          <div className="budget-container__data-input">
            <Button href="#" text="Request a Quote" variant="gold" hasArrow={true} />
          </div>
        </div>
      </form>
    </MB.BudgetContainer>
  )
}

export default withHeaderAndFooter(MainBudget, head);