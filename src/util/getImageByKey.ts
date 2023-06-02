import magicHome from "../img/bicicletas/magic-home.jpg";
import magic from "../img/bicicletas/magic.jpg";
import nimbusHome from "../img/bicicletas/nimbus-home.jpg";
import nimbus from "../img/bicicletas/nimbus.jpg";
import nebulaHome from "../img/bicicletas/nebula-home.jpg";
import nebula from "../img/bicicletas/nebula.jpg";
import bikcraft from "../img/bikcraft.svg";

/* partners */
import caravan from "../img/parceiros/caravan.svg";
import ranek from "../img/parceiros/ranek.svg";
import handel from "../img/parceiros/handel.svg";
import dogs from "../img/parceiros/dogs.svg";
import lescone from "../img/parceiros/lescone.svg";
import flexblog from "../img/parceiros/flexblog.svg";
import wildbeast from "../img/parceiros/wildbeast.svg";
import surfbot from "../img/parceiros/surfbot.svg";

/* social media */
import instagram from "../img/redes/instagram.svg";
import facebook from "../img/redes/facebook.svg";
import youtube from "../img/redes/youtube.svg";

import electric from "../img/icones/eletrica.svg";
import carbon from "../img/icones/carbono.svg";
import speed from "../img/icones/velocidade.svg";
import tracker from "../img/icones/rastreador.svg";
import sustainable from "../img/icones/sustentavel.svg";
import security from "../img/icones/seguro.svg";


const images = {
  magicHome,
  magic,
  nimbusHome, 
  nimbus,
  nebulaHome, 
  nebula,
  caravan, 
  ranek, 
  handel, 
  dogs, 
  lescone, 
  flexblog, 
  wildbeast,
  surfbot, 
  bikcraft, 
  instagram, 
  facebook,
  youtube, 
  electric,
  carbon,
  speed, 
  tracker, 
  sustainable, 
  security
};

export default function getImageByKey(key: string) {
  return images[key as keyof typeof images]
}