import {saveData, VoidPoints} from "../main/data";
import {getRandomCity} from "../main/GetRandom/GetRandomCity";

export let generateVoidPoints = () => {
    let newVoid = {}
   for(let i=0;i<1000;i++){
       for (let i = 0; i < 5; i++) {
           newVoid = {
               x: saveData[i + Math.floor(Math.random() * Math.floor(70))].x,
               y: saveData[i + Math.floor(Math.random() * Math.floor(70))].y,
               city: getRandomCity(),
               color: '#FF69B4',
           }
           VoidPoints.push(newVoid);
       }
   }
    console.log(VoidPoints);
}