
import {distinction} from "../distinction";
import {monh} from "../mathOperation/abs";
//евклид
export let manhetan = (x, y, city, xC, yC, cityC) => {
    return (monh(x, xC) + monh(y, yC) + distinction(city, cityC));
}