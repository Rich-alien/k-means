// первый метод нахождения расстояния
import { saveData, VoidPoints} from "../main/data";
import {monh} from "../main/mathOperation/abs";
import {distinction} from "../main/distinction";
let afterMonhettanObj =[];
export let monRun = () => {

    for (let i = 0; i < saveData.length; i++) {
        for (let j = 0; j < VoidPoints.length; j++) {
            let zet;
            zet = {
                id: saveData[i].id,
                Cluster: VoidPoints[j].city,
                distant: manhetanKnn(
                    saveData[i].x,
                    saveData[i].y,
                    saveData[i].city,
                    VoidPoints[j].x,
                    VoidPoints[j].y,
                    VoidPoints[j].city)
            }
            afterMonhettanObj.push(zet);
        }
    }
}
console.log(afterMonhettanObj);
 let manhetanKnn = (x, y, city, xV, yV, cityV) => {
    return (monh(x, xV) + monh(y, yV) + distinction(city, cityV));
}