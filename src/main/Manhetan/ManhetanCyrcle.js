import {AfterNormalizeData, cluster, operationDistantManhetan} from "../data";
import {manhetan} from "./Manhetan";
import {MinMan} from "./minimalElMan";
//евклид
export let ManhetanCyrcle = () => {
    let obj;
    for (let i = 0; i < AfterNormalizeData.length; i++) {
        for (let j = 0; j < cluster.length; j++) {
             obj = {
                id: AfterNormalizeData[i].id,
                Cluster: cluster[j].city,
                distant: manhetan(
                    AfterNormalizeData[i].x,
                    AfterNormalizeData[i].y,
                    AfterNormalizeData[i].city,
                    cluster[j].x,
                    cluster[j].y,
                    cluster[j].city)
            }
            operationDistantManhetan.push(obj);
        }

    }

MinMan();
}