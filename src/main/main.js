import {getNormalXY} from "./GetNormalValue";
import {createNewData} from './generatorObj'
import {claster} from "./claster";

//главный файл для запуска необходимых функций
export let run = () => {
    createNewData();
    getNormalXY();
    claster();
}