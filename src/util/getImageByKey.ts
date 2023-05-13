import magicHome from "../img/bicicletas/magic-home.jpg";
import nimbusHome from "../img/bicicletas/nimbus-home.jpg";
import nebulaHome from "../img/bicicletas/nebula-home.jpg";

/* partners */
import caravan from "../img/parceiros/caravan.svg";
import ranek from "../img/parceiros/ranek.svg";
import handel from "../img/parceiros/handel.svg";
import dogs from "../img/parceiros/dogs.svg";
import lescone from "../img/parceiros/lescone.svg";
import flexblog from "../img/parceiros/flexblog.svg";
import wildbeast from "../img/parceiros/wildbeast.svg";
import surfbot from "../img/parceiros/surfbot.svg";

const images = {
  magicHome,
  nimbusHome, 
  nebulaHome, 
  caravan, 
  ranek, 
  handel, 
  dogs, 
  lescone, 
  flexblog, 
  wildbeast,
  surfbot
};

export default function getImageByKey(key: string) {
  return images[key as keyof typeof images]
}