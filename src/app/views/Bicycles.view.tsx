import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import bicyclesJson from "../../data/bicycles.json";
import getImageByKey from "../../util/getImageByKey";
import Title2 from "../components/Title2";
import * as B from "./Bicycles.styles";

export interface BicyclesProps {
  bicycleIgnoreId?: string; 
}

interface BicyclesData {
  linkHref: string;
  imageHref: string;
  imageAlt: string;
  name: string;
  id: string;
  value: string;
}

export default function Bicycles(props: BicyclesProps) {
  const [bicycles, setBicycles] = useState<BicyclesData[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    setBicycles(getBicycles(props.bicycleIgnoreId));
  }, [props.bicycleIgnoreId])

  function configurePath(bicycleId: string): string {
    if (isAlreadyInBicycleDetailPage(pathname)) {
      return pathname.substring(0, pathname.lastIndexOf("/") + 1).concat(bicycleId);
    }
    
    return "/bicycles/".concat(bicycleId);
  }

  function isAlreadyInBicycleDetailPage(pathname: string): boolean {
    return (pathname.split("/").length - 1) > 1;
  }
  
  function getBicycles(bicycleIgnoreId: string | undefined): BicyclesData[] {
    const data = Array.from(bicyclesJson as BicyclesData[]);
    
    if (bicycleIgnoreId !== undefined) {
      const index = data.findIndex((item) => {
        return item.id === bicycleIgnoreId;
      });

      if (index !== -1) {
        data.splice(index, 1);
      }
    }
    return data;
  }

  return (
    <B.BicyclesContainer>
      <div className="container__box">
        <Title2 font="--font-1-xxl" color="--color-12" text="choose your" />
      </div>
      <ul className="bicycles-container__ul">
        {
          bicycles.map((bicycle, position) => {
            return (
              <li key={position} className="bicycles-container__li">
                <Link className="bicycles-container__a" key={position} to={configurePath(bicycle.linkHref)} >
                  <img width="920" height="1040" className="bicycles-container__img" src={getImageByKey(bicycle.imageHref)} alt={bicycle.imageAlt} />
                  <h3 className="bicycles-container__h3">{bicycle.name}</h3>
                  <span className="bicycles-container__span">{bicycle.value}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </B.BicyclesContainer>
  )
}