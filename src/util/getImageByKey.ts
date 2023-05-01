import magicHome from "../img/bicicletas/magic-home.jpg";
import nimbusHome from "../img/bicicletas/nimbus-home.jpg";
import nebulaHome from "../img/bicicletas/nebula-home.jpg";

const images = {
  magicHome,
  nimbusHome, 
  nebulaHome
};

export default function getImageByKey(key: string) {
  return images[key as keyof typeof images]
}