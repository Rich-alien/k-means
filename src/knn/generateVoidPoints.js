import {data, VoidPoints} from "../main/data";

export let generateVoidPoints = () => {
    let newVoid = {}
    for (let i = 0; i < 4; i++) {
        newVoid = {
            x: ((data[i + 30].x - 0.1) / (1 - 0.1)) * 700,
            y: ((data[i + 40].y - 0.1) / (300 - 1)) * 700,
            city: null,
            color: '#FF69B4',

        }
        VoidPoints.push(newVoid);
    }
    console.log(VoidPoints);
}