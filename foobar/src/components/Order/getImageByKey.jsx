import elhefe from "../../assets/elhefe.png";
import fairytaleale from "../../assets/fairytaleale.png";
import githop from "../../assets/githop.png";
import hollabacklager from "../../assets/hollaback.png";
import hoppilyeverafter from "../../assets/hoppilyeverafter.png";
import mowintime from "../../assets/mowintime.png";
import row26 from "../../assets/row26.png";
import ruinedchildhood from "../../assets/ruinedchildhood.png";
import sleighride from "../../assets/sleighride.png";
import steampunk from "../../assets/steampunk.png";
import listicon from "../../assets/icons/list-icon.svg";
import carticon from "../../assets/icons/cart-icon.svg";
import homeicon from "../../assets/icons/home-icon.svg";


export default function getImageByKey(key) {
  const images = {
    elhefe,
    fairytaleale,
    githop,
    hollabacklager,
    hoppilyeverafter,
    mowintime,
    row26,
    ruinedchildhood,
    sleighride,
    steampunk,
    listicon,
    carticon,
    homeicon, 
  };
  
  return images[key];
}