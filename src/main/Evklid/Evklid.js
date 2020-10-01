import {evkl} from "../mathOperation/pow";
import {distinction} from "../distinction";
//евклид
export let evklid = (x, y, city, xC, yC, cityC) => {
    return (Math.sqrt(evkl(x, xC)) + Math.sqrt(evkl(y, yC)) + distinction(city, cityC));
}