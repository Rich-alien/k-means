import {City, cluster, clustersNum, Color, data} from "./data";
// import {getRandomFloat} from "./GetRandom/GetRandomFloat";

let newObj = {};
export let claster = () => {
    for (let i = 0; i < clustersNum ; i++) {
        newObj = {};
        newObj = {
            x: ((data[i+30].x - 0.1) / (1 - 0.1)) *700,
            y: ((data[i+40].y - 0.1) / (300 - 1))*700,
            city: City[i],

        }
        cluster.push(newObj)
    }
}
