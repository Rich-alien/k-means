//будет кртиться шарманка до n момента
import {
        FilterOperationDistantMan,
        operationDistantManhetan
} from "../data";
import {ManhetanCyrcle} from "./ManhetanCyrcle";

export let SearchErrorMan = () => {
        ManhetanCyrcle();
        operationDistantManhetan.splice(0, operationDistantManhetan.length);
        FilterOperationDistantMan.splice(0, FilterOperationDistantMan.length);
        // console.log(cluster);
}