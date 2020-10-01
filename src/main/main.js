import {getNormalXY} from "./GetNormalValue";
import {createNewData} from './generatorObj'
import {claster} from "./claster";
import {EvklidCyrcle} from "./Evklid/EvklidCyrcle";
import {cluster, FilterOperationDistant, operationDistant} from "./data";
//главный файл для запуска необходимых функций
export let run = () => {
    createNewData();
    getNormalXY();
    claster();
    EvklidCyrcle();

    console.log(FilterOperationDistant);
}