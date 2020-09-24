import {getRandomInt} from "./GetRandomInt";
import {City} from "../data";


export let getRandomCity = () => {
    return City[getRandomInt(3)];
}