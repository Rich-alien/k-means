import {data, AfterNormalizeData, Color} from './data'

let NormalizeData = {};
export let getNormalXY = () => {
    for (let i = 0; i < data.length; i++) {

        NormalizeData = {};
        NormalizeData = {
            id: data[i].id,
            x: ((data[i].x - 0.1) / (1 - 0.1)) *700,
            y: ((data[i].y - 0.1) / (300 - 1))*700,
            city: data[i].city,
            color: data[i].color,
        }
        AfterNormalizeData.push(NormalizeData);
    }
}

