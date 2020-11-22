import {saveData, VoidPoints} from "../main/data";
import {getRandomCity} from "../main/GetRandom/GetRandomCity";
let click = 0;
export const generateVoidPoints = () => {
    let newVoid = {}
    if (click === 0) {
        for (let i = 0; i < 5; i++) {
            click++;
            newVoid = {
                x: saveData[i + Math.floor(Math.random() * Math.floor(70))].x,
                y: saveData[i + Math.floor(Math.random() * Math.floor(70))].y,
                city: getRandomCity(),
                color: '#FF69B4',
            }
            VoidPoints.push(newVoid);
        }
    }else{
        console.log('nope');
    }
}