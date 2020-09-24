import {AfterNormalizeData, cluster, operationDistant} from "../data";
import {evklid} from "./Evklid";
import {Min} from "../minimalEl";

export let EvklidCyrcle = () => {
    let distant;
    for (let i = 0; i < AfterNormalizeData.length; i++) {

        for (let j = 0; j < cluster.length; j++) {
            let obj = {
                Cluster: cluster[j].city,
                distant : evklid(
                    AfterNormalizeData[i].x,
                    AfterNormalizeData[i].y,
                    AfterNormalizeData[i].city,
                    cluster[j].x,
                    cluster[j].y,
                    cluster[j].city)
            }
            operationDistant.push(obj);
        }
    }
Min();
}